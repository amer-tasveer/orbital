import React,{Component} from 'react';
import './about.css'
import ReactGA from 'react-ga'


class About extends Component{

  componentDidMount(){
    ReactGA.initialize('UA-174924337-1');
    ReactGA.pageview(this.props.location.pathname)  }

  render(){
    return (
<div class="container">
<div class="about-column">

<p className='about-text'>
An Esoteric collection of articles and artwork with a spotlight on contemporary Southeast Asian music culture and the forces that provoke our works. 

The Southeast Asian independent music scene is like no other with barely any meddling from large multinational record labels, musicians have been produced with symbiotic ties with other visual creative mediums and their respective subcultures, this is what we hope to explore and archive. 

</p>
<p className='about-text'>
Orbital will always be ad-free but we need support.
Help assist us in developing more expansive projects and content for the site so we can keep providing you with the best in curated weirdness.
</p>

<hr className='hr'></hr>
<h3 className='column-header'  >
  Be A Contrubitor
</h3>
<p className='about-text'>
All content mediums wellcome -  Sounds, Photography, Articles or Events.
Get in touch with us.  

</p>
<hr className='hr'></hr>
<h3 className='column-header'  >
Staff Writer Wanted

</h3>
<p className='about-text'>
Passionate about music and the arts? We would love to hear about you!

</p>
<hr className='hr'></hr>

</div>
<div className="team-column">

<div className='team-container'  >
<label className='team-name'  >Manish Dhadli</label>
<label className='team-role'  >Lead Editor</label>
<p className='team-text'>
Professionally, I am anything but a creative. After studying engineering and coming from a world that generally lacks bold expression. I would describe myself as a casual curator of weird and esoteric art. My appreciation of the Arts comes from largely personal interest, not a professional one. This, I feel, is the way forward for a vast majority of people when it comes to creative appreciation. As the arts can sometimes feel excluding to the casual observer, looked at as something needing participation to fully appreciate. With Orbital we hope to bring out and display for all the lesser known eccentricities of SEA music culture. 
</p>
<label className='team-name'  >Amer-Tasveer</label>

<label className='team-role'  >Web Development Lead </label>
<p className='team-text'>
After working on a variety of commercial projects including start-ups, Tass decided that he would like to drive into the world of creative media. This new medium, he feels, is needed to balance the humdrum of the concrete world.Thus, this is his dive into the meta.  </p>
<label className='team-name'  >Katheleen Lee</label>
<label className='team-role'  >Contributor</label>



</div>

</div>
</div>
    );
  }

}


export default About;