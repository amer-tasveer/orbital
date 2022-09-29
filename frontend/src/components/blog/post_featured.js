import React,{Component} from 'react';
import Axios from 'axios'
import './post.css'
import ReactGA from 'react-ga'

class Post_Featured extends Component{

  constructor(props){
    super(props);
    this.state={
        post:[],
        loading:false,
        loaded:false,
        quotes:[]
    }
}
  componentDidMount(){
this.getPostData()
ReactGA.initialize('UA-174924337-1');
ReactGA.pageview(this.props.location.pathname)
window.addEventListener("scroll", () => {
  const image= document.getElementsByClassName('news-image')
  if(image[0]!==undefined){
    image[0].style.opacity=1

  }
  const currentScroll = window.pageYOffset;
  const bottom=window.height
  const total=currentScroll+bottom
  for(var q=0;q<image.length;q++){

    var length=image[q].offsetTop-700
    if (currentScroll >=length) {
      image[q].style.opacity=1
    } 
  }

});
  }
getPostData(){
this.setState({
  loading:true,
  
})
Axios.get("/api/article/post/featured/"+this.props.match.params.slug).then((res)=>{
this.setState({
  post:res.data.items[0],
  loading:false,
  loaded:true,
  
})


})

}

FirstPara(){
  const{post}=this.state;
  if(this.state.loaded==true &&this.state.post.length!==0){
    if(post.fields.firstparagraph==undefined){
      return null
    }
    else if(post.fields.firstparagraph){
return(
  <div class="news-item">
    <div class="news-image">
      {this.renderImage(post.fields.firstparagraph)}
    </div>
    <div class="news-info">
      {this.renderPara(post.fields.firstparagraph)}
    </div>
    <div>
      {this.renderLastImage(post.fields.firstparagraph)}
    </div>
  </div>
)
  }
  else if(this.state.loaded==false && this.state.post.length==0){
return(
null
)
  }
}
}

SecondPara(){
  const{post}=this.state;
  if(this.state.loaded==true &&this.state.post.length!==0){
    if(post.fields.secondparagraph==undefined){

      return null
    }
 if(post.fields.secondparagraph){

return(
  <div class="news-item">
    <div class="news-image">
      {this.renderImage(post.fields.secondparagraph)}
    </div>
    <div class="news-info">
      {this.renderPara(post.fields.secondparagraph)}
    </div>
    <div>
      {this.renderLastImage(post.fields.secondparagraph)}
    </div>
    <div>
      
    </div>
  </div>
)
}
  }
  else if(this.state.loaded==false && this.state.post.length==0){
return(
null  
)
  }
}
ThirdPara(){
  const{post}=this.state;
  if(this.state.loaded==true &&this.state.post.length!==0){
    if(post.fields.thirdparagraph==undefined){
      return null
    }
    else if(post.fields.thirdparagraph){
return(
  <div class="news-item">
    <div class="news-image">
      {this.renderImage(post.fields.thirdparagraph)}
    </div>
    <div class="news-info">
      {this.renderPara(post.fields.thirdparagraph)}
    </div>
    <div>
      {this.renderLastImage(post.fields.thirdparagraph)}
    </div>
  </div>
)}
  }
  else if(this.state.loaded==false && this.state.post.length==0){
return(
 null
)
  }
}
FourthPara(){
  const{post}=this.state;
  if(this.state.loaded==true &&this.state.post.length!==0){
    if(post.fields.fourthparagraph==undefined){
      return null
    }
 else if (post.fields.fourthparagraph){
return(
  <div class="news-item">
    <div class="news-image">
      {this.renderImage(post.fields.fourthparagraph)}
    </div>
    <div class="news-info">
      {this.renderPara(post.fields.fourthparagraph)}
    </div>
    <div>
      {this.renderLastImage(post.fields.fourthparagraph)}
    </div>
  </div>
)}
  }
  else if(this.state.loaded==false && this.state.post.length==0){
return(
null)
  }
}
FifthPara(){
  const{post}=this.state;
  if(this.state.loaded==true &&this.state.post.length!==0){
    if(post.fields.fifthparagraph==undefined){
      return null
    }
    else if(post.fields.fifthparagraph.content){
      return(
        <div class="news-item">
          <div class="news-image">
            {this.renderImage(post.fields.fifthparagraph)}
          </div>
          <div class="news-info">
            {this.renderPara(post.fields.fifthparagraph)}
          </div>
          <div>
            {this.renderLastImage(post.fields.fifthparagraph)}
          </div>
        </div>
      )
    }

  }
  else if(this.state.loaded==false && this.state.post.length==0){
return(
  <div>
    <h1>
      Loading
    </h1>
  </div>
)
  }
}
renderLastImage(data){
  var count=0
  return data.content.map((post,index)=>{
    if(post.content[0]==undefined){
      count++
if(count>2){
  return(
    <img className='last-image' src={post.data.target.fields.file.url}/>
    
          )}
    }
    else if(post.content[0].value){

      return null
        
      }})
}

renderImage(data){
  var count=0
  return data.content.map((post,index)=>{
    if(post.content[0]==undefined){
      count++
      if(count<=2)

      return(
<img className='news-image' src={post.data.target.fields.file.url}/>

      )
    }
    else if(post.content[0].value){

      return null
        
      }})
    
 
}

renderPara(data){
  return data.content.map((post,index)=>{
    if(post.content==undefined){
      return  null
    }
    else{ 
      return post.content.map((post,index)=>{
        if(post.marks.length==0){
          return (
            <p className='news-info'  >
              {post.value}
            </p>
          )     
         }
         else if (post.marks[0].type=='bold'){
          return (
            <p className='news-info-bold'  >
              {post.value}
            </p>
          ) 
         }    })}

    })}
 

renderTitle(){
  const{post}=this.state;
  if(this.state.loaded==true &&this.state.post.length!==0){
    return(
      <div className='header-container'  >
      <h1 className='article-header'  >
        {post.fields.title}
      </h1>
      <div className='icon-author-container'  >
      <i class="las la-arrow-right"></i>
      <label className='author-text'  >Written By {post.fields.author}</label>

      </div>
      </div>

    )
  }
}
renderQuote(){
  const{post}=this.state;
  if(this.state.loaded==true &&this.state.post.length!==0){

return(
  <div class="news-item">
    <div class="news-image">
      {this.renderImage(post.fields.qoutes)}
    </div>
    <div class="news-info">
      {this.renderPara(post.fields.qoutes)}
    </div>

  </div>
)
  }
  else if(this.state.loaded==false && this.state.post.length==0){
return(
null
)
  }
}

  render(){
    return (
      <div className="post-wrapper">
{this.renderTitle()}
<div class="news-list">
  {this.renderQuote()}
{this.FirstPara()}
{this.SecondPara()}
{this.ThirdPara()}
{this.FourthPara()}
{this.FifthPara()}


</div>
      </div>
    );
  }

}

export default Post_Featured;