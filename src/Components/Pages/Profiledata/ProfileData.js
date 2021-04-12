import {React, Component} from 'react';
import './profiledata.css';


export class ProfileData extends Component{
    render()
    {
        return(
            <div>
         
            <div className='profile row'>
                    <div className='col-md-6 row'>
                    <div className='col-md-6'>
                        <img alt='profileimage' src= {this.props.profileimage} />
                        </div>
                        <div className='col-md-6'>
                            <p><b>{this.props.displayname}</b></p> 
                            <p><b>Userid :</b> {this.props.userid}</p>
                            <p><b>Status :</b>{this.props.employee_status}</p>
                            <p><b>Location :</b>{this.props.location}</p>
                            {/* <p><b>Last Seen :</b>{this.props.last_seen}</p> */}
                            <a href={this.props.link}>Profile link</a>
                    </div>
                     </div>
                    
                    <div>
                        <div className='row'>

                            <div className='col-md-4 val'><p><b>Reputation :</b>{this.props.reputation}</p></div>
                            <div className='col-md-4 val'><p><b>Up Votes:</b>{this.props.upvote}</p></div>
                            <div className='col-md-4 val'> <p><b>Down Votes:</b>{this.props.downvote}</p></div>
                        </div>
                            <div className='row'>
                            <div className='col-md-4 val'><p>Bronze :{this.props.bronze}</p></div> 
                            <div className='col-md-4 val'><p>Silver :{this.props.silver}</p></div>
                            <div className='col-md-4 val'><p>Gold:{this.props.gold}</p> </div>
                        </div>
                   
                    </div>
            </div>
            </div>
        )
    }
}