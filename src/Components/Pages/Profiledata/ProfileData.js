import {React, Component} from 'react';
import './profiledata.css';


export class ProfileData extends Component{
    render()
    {
        return(
            <div>
         
            <div className='profile'>
                <img alt='profileimage' src= {this.props.profileimage} />
                <div className='content'>
                    <div className='info-1'>
                        <div className='name'>
                            <p><b>{this.props.displayname}</b></p> 
                        </div>
                        <div className='id'>
                            <p><b>Userid :</b> {this.props.userid}</p>
                            <p><b>Status :</b>{this.props.employee_status}</p>
                            <p><b>Location :</b>{this.props.location}</p>
                            {/* <p><b>Last Seen :</b>{this.props.last_seen}</p> */}
                            <a href={this.props.link}>Profile link</a>
                        </div>
                    </div>
                    <div className='info-2'>
                        <p><b>Reputation :</b>{this.props.reputation}</p>
                        <ul><b>Badges</b>
                        <li>Bronze :{this.props.bronze}</li> 
                        <li>Silver :{this.props.silver}</li>
                        <li>Gold:{this.props.gold}</li> 
                        </ul>
                    </div>  
                </div>
            </div>
            </div>
        )
    }
}