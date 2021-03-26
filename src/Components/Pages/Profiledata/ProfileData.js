import {React, Component} from 'react';

export class ProfileData extends Component{
    render()
    {
        return(
            <div>
                <h1>profile info</h1>
                <p>{this.props.displayname}</p>
                <p>{this.props.userid}</p>
                <a href={this.props.link}>Profile link</a>
                <br/>
                <img alt='profileimage' src= {this.props.profileimage} />
                <p>{this.props.reputation}</p>
                <p>{this.props.employeestatus}</p>
            </div>
        )
    }
}