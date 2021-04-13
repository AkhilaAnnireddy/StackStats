import {React, Component} from 'react';
import './profiledata.css';
import gold_b from '../../../Images/gold_badge.jpg';
import silver_b from '../../../Images/silver_badge.jpg';
import bronze_b from '../../../Images/bronze_badge.jpg';

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
                        <div className='col-md-6 disp'>
                            <p><b>{this.props.displayname}</b></p> 
                            <p><b>Id:</b> {this.props.userid}</p>
                            <p><i className="fas fa-graduation-cap"></i>{this.props.employee_status}</p>
                            <p><i className="fas fa-map-marker-alt"></i>{this.props.location}</p>
                            {/* <p><b>Last Seen :</b>{this.props.last_seen}</p> */}
                           <p><i class="fas fa-link"></i><a href={this.props.link}>Profile link</a></p>
                    </div>
                     </div>
                    
                    <div className="dt">
                        <div className='row'>

                            <div className='val'>
                                <p id='value'>{this.props.reputation}</p>
                                <p><b>Reputation </b></p>
                            </div>
                            <div className=' val'>
                                <p id='value'>{this.props.upvote}</p>
                                <p><b>Up Votes</b></p>
                                
                            </div>
                            <div className=' val'>
                                <p id='value'>{this.props.downvote}</p>
                                <p><b>Down Votes</b></p>
                                
                            </div>
                        </div>
                            <div className='row'>
                            <div className='vals'>
                                <p id='value'>{this.props.bronze}</p>
                                <p className='badge'><b>Bronze </b><img  src={bronze_b} /></p>
                            </div> 
                            <div className=' vals '>
                                <p id='value'>{this.props.silver}</p>
                                <p className='badge'><b>Silver</b><img  src={silver_b} /></p>
                            </div>
                            <div className=' vals'>
                                <p id='value'>{this.props.gold}</p>
                                <p className='badge'><b>Gold </b><img  src={gold_b}  /></p> 
                            </div>
                        </div>
                   
                    </div>
            </div>
            </div>
        )
    }
}