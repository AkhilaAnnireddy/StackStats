import {React, Component} from 'react';
import './QuestionsData.css';

export class QuestionsData extends Component{
    render()
    {
        const que=this.props.question
        return(
        <div className='questions'>
          <div className="totalques">
            <p>Total Questions Posted:{this.props.number}</p>
          </div>
          <div className="ques">
            <ul>
              {this.props.question.map((que) =>
              <li key={que.question_id}>
                {/* <p>{ans.is_accepted}</p> */}
                {/* <p><span className="highlight">Question-Id</span> : {ans.question_id}</p> */}
                <p><span className="highlight">Question</span> : {que.title}</p>
                <a target="_blank" href={que.link}>QusetionID : {que.question_id}</a>
                <hr></hr>
              </li>
               )}
            </ul>
         </div>
        </div>)
    }
}