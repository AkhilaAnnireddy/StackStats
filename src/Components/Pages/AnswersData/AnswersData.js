import {React, Component} from 'react';
import './AnswersData.css';


export class AnswersData extends Component{
    render()
    {
        const ans=this.props.ans
        return(
          <div className='answered'>
            <div className='totalans'>
              <p>Total Answers Posted:{this.props.number}</p>
            </div>
            <div className='ansr'>
              <ul>
                {this.props.ans.map((ans) =>
                <li key={ans.answer_id}>
                {/* <p>{ans.is_accepted}</p> */}
                {/* <p><span className="highlight">Question-Id</span> : {ans.question_id}</p> */}
                <p><span className="highlight">Question</span> : {ans.title}</p>
                <a target="_blank" href={ans.link}>AnswerId : {ans.answer_id}</a>
                <hr></hr>
                </li>
                )}
              </ul>
            </div>
          </div>
          )
    }
}