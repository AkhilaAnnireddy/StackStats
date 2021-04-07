import React from 'react';
import axios from 'axios';
import {ProfileData} from '../Profiledata/ProfileData.js';
import Header from '../../Header/Header'

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
    // getdata2 = (userid) =>{
    //     axios.get(`https://api.stackexchange.com/2.2/users/${this.state.userid}/questions?order=desc&sort=activity&site=stackoverflow`).then((response)=>{
    //         this.setState(
    //             {   data2: response.data.items[0]
    //             }
    //         )
    //     }).catch((error)=>{
    //             console.log(error)
    //     })
    // };

    profiledata = ()=>{
        const image= this.state.data.profile_image
        let badges={...this.state.data.badge_counts}
        let employeestatus = (this.state.data.is_employee === true) ? "employee": "student";
        return (
           <div>
           
            <ProfileData
                userid={this.state.userid}
                displayname={this.state.data.display_name}
                link= { this.state.data.link }
                profileimage={image}
                last_seen={this.state.data.last_access_date}
                reputation={this.state.data.reputation}
                employee_status={employeestatus}
                location={this.state.data.location}
                bronze={badges.bronze}
                silver={badges.silver}
                gold={badges.gold}
            />
            </div>
        )
    }

    render()
    {
       // this.getdata2()
       // console.log(this.state.data2)
        return(
            <div>
                <Header username={this.state.data.display_name} />
                {this.profiledata()}
            </div>
        )
    }
}

