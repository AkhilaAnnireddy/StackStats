import {React, Component} from 'react';
import './AnswersData.css';

export class AnswersData extends Component{
    render()
    {
        const ans=this.props.ans
        return(
          <div className='answered'>
            <div className='totalans'>
              <p>Total Answers Posted : {this.props.number}</p>
            </div>  
            <div className='ansr'>
              {ans.length ?
              <ul>
                {this.props.ans.map((ans) =>
                <li key={ans.answer_id}>
                <p><span className="highlight">Question</span> : {ans.title}</p>
                <a target="_blank" href={ans.link}>AnswerId : {ans.answer_id}</a>
                 {ans.is_accepted ? <span className='tick' title='Answer Accepted'> ✔</span> :null }
                <hr></hr>
                </li>
                )}
              </ul>:
              <p className='nodata'>No Recent Answers Posted</p>
                }
            </div> 
              {/* <div className='noans'> No Answers Posted Yet :( </div> */}
          </div>
          )
    }
}