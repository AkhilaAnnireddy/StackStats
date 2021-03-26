import React from 'react';
import axios from 'axios';
import {ProfileData} from '../Profiledata/ProfileData.js';

export class ProfilePage extends React.Component{

    

    state= {
        data:[],
        userid:null
    }

    componentDidMount = () =>
    {
        this.getdata()
    }

    getdata = (username) =>{
        axios.get(`https://api.stackexchange.com/2.2/users?order=desc&sort=reputation&inname=${this.props.location.state.username}&site=stackoverflow`).then((response)=>{
            this.setState(
                {   data: response.data.items[0],
                    userid: response.data.items[0].user_id
                }
            )
        }).catch((error)=>{
                console.log(error)
        })
    };

    profiledata = ()=>{
        const image= this.state.data.profile_image
        return (
            <ProfileData
                userid={this.state.userid}
                displayname={this.state.data.display_name}
                link= { this.state.data.link }
                profileimage={image}
                reputation={this.state.data.reputation}
                employeestatus={this.state.data.is_employee}
                // bronze={this.state.data.badge_counts.}
            />
        )
    }

    render()
    {
        console.log(this.state.data)
        return(
            <div>
                <h1>hello, {this.props.location.state.username}</h1>
                {this.profiledata()}
            </div>
        )
    }
}

