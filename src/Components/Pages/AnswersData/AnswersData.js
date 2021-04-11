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
          <p>question:{ans.title}</p>
          <a target="_blank" href={ans.link}>answerid:{ans.answer_id}</a>

        </li>
      )}
    </ul>
        </div>)
    }
}