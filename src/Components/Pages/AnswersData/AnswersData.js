import {React, Component} from 'react';
import './AnswersData.css';


export class AnswersData extends Component{
    render()
    {
        const ans=this.props.ans
        return(<div className='answered'>
            {/* <p><b>Total Answers:</b>{this.props.ans.length}</p> */}
            <ul>
        {this.props.ans.map((ans) =>
        <li key={ans.answer_id}>
          {/* <p>{ans.is_accepted}</p> */}
          {/* <p><span className="highlight">Question-Id</span> : {ans.question_id}</p> */}
          <p><span className="highlight">Question</span> : {ans.title}</p>
          <a target="_blank" href={ans.link}>Answer-Id : {ans.answer_id}</a>
          <hr></hr>
        </li>
      )}
    </ul>
        </div>)
    }
}