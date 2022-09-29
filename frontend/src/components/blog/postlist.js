import React,{Component} from 'react';
import Axios from 'axios'
import './postlist.css'
import {Link} from 'react-router-dom'
import ReactGA from 'react-ga'

class PostList extends Component{


    constructor(props){
        super(props);
        this.state={
            featured:[],
            loading:false
        }
    }
componentDidMount(){
this.getFeatured()
ReactGA.initialize('UA-174924337-1');
ReactGA.pageview(this.props.location.pathname)
}

getFeatured(){

Axios.get('/api/article/post/featured/').then((res)=>{
    this.setState({
        featured:res.data.items
    })
    console.log(this.state.featured)
})

}
renderPara(data){
    return data.content.map((post,index)=>{
      if(post.content[0]==undefined){
        return  null
      }
      else if(post.content[0].value){
  
        return   post.content[0].value

        
          
        }})
      
   
  }
renderFeatured(){
    const{featured}=this.state;
if(featured!=undefined){
return featured.map((post,index)=>{
    return(
    <div className='featured-container'  >
        <img className='images' src={post.fields.images[0].fields.file.url}/>
        <Link className='post-title' to={"/featured/"+post.fields.slug} >
            <label>
                {post.fields.title}
            </label>
        </Link>
        <p className='post-text'  >
        {this.renderPara(post.fields.firstparagraph)}

        </p>
    </div>
    )
})
}

}

  render(){
    return (
      <div className="postlist-wrapper">
          <div className='article-wrapper'  >
          {this.renderFeatured()}

          </div>
      </div>
    );
  }

}

export default PostList;