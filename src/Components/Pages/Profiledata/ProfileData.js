import {React, Component} from 'react';
import './profiledata.css';

export class ProfileData extends Component{
    render()
    {
        return(
            <div className='profile'>
                <img alt='profileimage' src= {this.props.profileimage} />
                <div className='content'>
                    <div className='info-1'>
                        <div className='name'>
                            <p><b>{this.props.displayname}</b></p> 
                        </div>
                        <div className='id'>
                            <p><b>Userid :</b> {this.props.userid}</p>
                            <p><b>Reputation :</b> {this.props.reputation}</p>
                            <a href={this.props.link}>Profile link</a>
                        </div>
                    </div>
                    <div className='info-2'>
                        <p>{this.props.employeestatus}</p>
                    </div>  
                </div>
            </div>
        )
    }
}