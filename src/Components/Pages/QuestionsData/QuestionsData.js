import {React, Component} from 'react';
import './QuestionsData.css';


export class QuestionsData extends Component{
    render()
    {
        return(<div>
            <p><b>Total Questions:</b>{this.props.number}</p>
        </div>)
    }
}