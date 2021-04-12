import {React, Component} from 'react';

import './QuestionsData.css';


export class QuestionsData extends Component{
    render()
    {
        return(<div>
            <h6>Total Questions:{this.props.number}</h6>
        </div>)
    }
}