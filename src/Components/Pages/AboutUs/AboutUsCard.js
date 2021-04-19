import React from 'react';


function AboutUsCard(props){
   let linkedin=(props.linkedin=='')?null:"LinkedIn"
        return(
            <div className='abtcard'>
                <img src={props.img}/>
                <h5>{props.name}</h5>
                <h6><i>{props.role}</i></h6>
               <p class='git'><a href={props.github}><i class="fab fa-github ico"></i> </a></p>
               <p class='git'><a href={props.linkedin}>{props.linkedin==''?null:<i class="fab fa-linkedin ico"></i>}</a></p>
            </div>
        )
   
}
export default AboutUsCard