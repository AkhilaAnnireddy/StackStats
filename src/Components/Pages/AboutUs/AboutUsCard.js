import React from 'react';


function AboutUsCard(props){
   let linkedin=(props.linkedin=='')?null:"LinkedIn"
        return(
            <div className='abtcard'>
                <img src={props.img}/>
                <h4>{props.name}</h4>
               <p id='git'><a href={props.github}><i class="fab fa-github ico"></i>GitHub </a></p>
               <p><a href={props.linkedin}>{props.linkedin==''?null:<i class="fab fa-linkedin ico"></i>}{linkedin}</a></p>
            </div>
        )
   
}
export default AboutUsCard