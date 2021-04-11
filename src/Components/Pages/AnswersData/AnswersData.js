import {React, Component} from 'react';
import './AnswersData.css';


export class AnswersData extends Component{
    render()
    {
        const ans=this.props.ans
        return(<div>
            <p><b>Total Answers:</b>{this.props.ans.length}</p>
            <ul>
        {this.props.ans.map((ans) =>
        <li key={ans.answer_id}>
          <p>question id:{ans.question_id}</p>
          <p>Answerid:{ans.answer_id}</p>
          <a href={ans.answer_id}>{ans.body}</a>
        </li>
      )}
    </ul>
        </div>)
    }
}