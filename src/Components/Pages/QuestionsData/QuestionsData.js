import {React, Component} from 'react';

import './QuestionsData.css';

export class QuestionsData extends Component{
    render()
    {
<<<<<<< HEAD
        return(<div>
            <h6>Total Questions:{this.props.number}</h6>
=======
        const que=this.props.question
        return(<div className='questions'>
            {/* <p><b>Total Answers:</b>{this.props.ans.length}</p> */}
            <ul>
        {this.props.question.map((ans) =>
        <li key={ans.question_id}>
          {/* <p>{ans.is_accepted}</p> */}
          {/* <p><span className="highlight">Question-Id</span> : {ans.question_id}</p> */}
          <p><span className="highlight">Question</span> : {ans.title}</p>
          <a target="_blank" href={ans.link}>QusetionID : {ans.question_id}</a>
          <hr></hr>
        </li>
      )}
    </ul>
>>>>>>> 4600287ed9a9ce5bbbdd62c45e6a1a507844cd5e
        </div>)
    }
}