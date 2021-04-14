import {React, Component} from 'react';
import './QuestionsData.css';

export class QuestionsData extends Component{
    render()
    {
        const que=this.props.question
        return(
        <div className='questions'>
          <div className="totalques">
            <p>Total Questions Posted : {this.props.number}</p>
          </div>
          <div className="ques">
           {que.length? 
            (<ul>
              {this.props.question.map((que) =>
              <li key={que.question_id}>
                <p><span className="highlight">Question</span> : {que.title}</p>
                <a target="_blank" href={que.link}>QusetionID : {que.question_id}</a>
                {que.is_answered ? <span className='tick' title='Question is Answered'> ✔</span> :null }
                <hr></hr>
              </li>
               )}
            </ul>)
            :
          <p className='nodata'>No Recent Questions Posted</p>
              }
         </div>

        </div>)
    }
}