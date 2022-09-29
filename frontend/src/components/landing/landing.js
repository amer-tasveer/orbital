import React,{Component} from 'react';
import Axios from 'axios'
import './landing.css'
import {Link} from 'react-router-dom'
import ReactGA from 'react-ga'
class Landing extends Component{


    constructor(props){
        super(props);
        this.state={
            post:[],
            loading:false
        }
    }
componentDidMount(){
this.getFeatured()
ReactGA.initialize('UA-174924337-1');
ReactGA.pageview(this.props.location.pathname)
}

getFeatured(){

Axios.get('/api/article/post/all/').then((res)=>{
    this.setState({
        post:res.data.items
    })
    console.log(this.state.post)
    console.log(res)

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
    const{post}=this.state;
    console.log(post)
if(post!=undefined){
return post.map((post,index)=>{
    if(post.sys.contentType.sys.id=='articlesart'){
        return(
            <div className='featured-container'  >
                <img className='images' src={post.fields.images[0].fields.file.url}/>
                <Link className='post-title' to={"/articles/"+post.fields.slug} >
                    <label >
                        {post.fields.title}
                    </label>
                </Link>
                <p className='post-text'  >
                {this.renderPara(post.fields.firstparagraph)}
        
                </p>
                
            </div>
            )
    } else if(post.sys.contentType.sys.id=='articlesfeatured'){
        return(
            <div className='featured-container'  >
                <img className='images' src={post.fields.images[0].fields.file.url}/>
                <Link className='post-title' to={"/featured/"+post.fields.slug} >
                    <label >
                        {post.fields.title}
                    </label>
                </Link>
                <p className='post-text'  >
                {this.renderPara(post.fields.firstparagraph)}
        
                </p>
                
            </div>
            )
    }

})
}

}

  render(){
    return (
      <div className="landing-wrapper">
          <div className='featured-wrapper'  >
          {this.renderFeatured()}

          </div>
      </div>
    );
  }

}

export default Landing;