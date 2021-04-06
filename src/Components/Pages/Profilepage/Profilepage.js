import React from 'react';
import axios from 'axios';
import {ProfileData} from '../Profiledata/ProfileData.js';
import Header from '../../Header/Header'

export class ProfilePage extends React.Component{
    
    state= {
        username:this.props.location.state.username,
        data:[],
        userid:null
    }    
    handleChange=(user1)=>
    {
        this.setState({username:user1})
    }
    componentDidMount = () =>
    {
        console.log(this.state.username)
        this.getdata()
    }
    componentDidUpdate=(prevState,prevProps)=>
    {
        this.getdata()
    }
    getdata = (username) =>{
        axios.get(`https://api.stackexchange.com/2.2/users?order=desc&sort=reputation&inname=${this.state.username}&site=stackoverflow`).then((response)=>{
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
        // const { badges }=this.state.data.badge_counts
        // Object.keys(badges).map((key, index) => ( 
        //             console.log({badges[key]})
        //   ))
        return (
           <div>
            <ProfileData
                userid={this.state.userid}
                displayname={this.state.data.display_name}
                link= { this.state.data.link }
                profileimage={image}
                reputation={this.state.data.reputation}
                employeestatus={this.state.data.is_employee}
            />
            </div>
        )
    }

    render()
    {
        
        console.log(this.state.data)
        console.log(this.state.data.badge_counts)
        return(
            <div>
                <Header username={this.state.username} handleChange={this.handleChange.bind(this)}/>
                {this.profiledata()}
            </div>
        )
    }
}

