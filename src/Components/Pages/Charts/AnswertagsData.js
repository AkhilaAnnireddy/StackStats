import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import '../Profilepage/profilepage.css';

export class Answersgraph extends React.Component{
    render(){
        //console.log(this.props.tags)
       let adata = this.props.tags
       // console.log(this.props.anscount)
        let anscount=this.props.anscount
        return(
            <div>
                {adata.length?
                 <Doughnut 
          
          data={{

              labels: adata,
              datasets: [{
          label: '  No of Answers',
          data: anscount,
          backgroundColor: [
            'rgb(89, 203, 232)',
'rgb(255, 181, 196)',
'rgb(255, 255, 102)',
'rgb(0, 168, 129)',
'rgb(250, 70, 22)',
'rgb(194, 122, 54)',
'rgb(244, 54, 76)',
'rgb(255,255,102)',
'rgb(0, 105, 148)',
'rgb(252, 142, 172)',
'rgb(255, 243, 109)',
'rgb(159, 108, 217)',
'rgb(63, 212, 133)',
'rgb(255, 153, 19)',
'rgb(144, 84, 47)',
'rgb(255, 61, 74)',
'rgb(168, 169, 173)',
'rgb(255, 137, 133)',
'rgb(0, 105, 148)',
'rgb(245, 181, 219)',
'rgb(253, 218, 22)',
'rgb(187, 133, 171)',
'rgb(38, 208, 124)',
'rgb(255, 198, 0)',
'rgb(98, 52, 18)',
'rgb(235, 73, 102)',
'rgb(206, 214, 195)',
'rgb(163, 255, 163)',
'rgb( 67, 107, 149)',
'rgb(176, 224, 230)'
          ]
      }]
  }}
      height={350}
      width={350}
      options={{maintainAspectRatio: false ,
      legend:{
          position:'bottom',
          align:'center',
          labels:{
              fontSize:10,
              boxWidth:20,
              
          }
         
      }
      }}

      />:<p className='nodata'>Sufficient data Not Found</p>}
            </div>
        )
    }
}