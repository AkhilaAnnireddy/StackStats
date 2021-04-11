import React from 'react';
import axios from 'axios';
import {ProfileData} from '../Profiledata/ProfileData.js';
import {QuestionsData} from '../QuestionsData/QuestionsData.js';
import Header from '../../Header/Header'

export class ProfilePage extends React.Component
{
    
    state= {
        userid:this.props.match.params.user_id,
        data:[],
        qdata:[]
    }    
    handleChange=(user1)=>
    {
        this.setState({username:user1})
    }
    componentDidMount = () =>
    {
        //console.log(this.state.username)
        this.getdata()
    }
    componentDidUpdate(){
        if(this.state.user_id)
        {
            if(!this.state.qdata ||this.state.qdata && this.state.qdata.id!== this.state.user_id){
            axios.get(`https://api.stackexchange.com/2.2/users/${this.state.user_id}/questions?order=desc&sort=activity&site=stackoverflow`).then((response)=>{
              //this.setState({qdata:response.data.items})
             console.log(response.data)
        
                } );
               
            } 
        } }
    getdata = () =>{
        axios.get(`https://api.stackexchange.com/2.2/users/${this.state.userid}?order=desc&sort=reputation&site=stackoverflow`).then((response)=>{
            this.setState(
                {   data: response.data.items[0],
                }
            )
        }).catch((error)=>{
                console.log(error)
        })
    };

    profiledata = ()=>{
        const image= this.state.data.profile_image
        let badges={...this.state.data.badge_counts}
        let employeestatus = (this.state.data.is_employee === true) ? "employee": "student";
        return (
           <div>
           
            <ProfileData
                userid={this.state.user_id}
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
    };
    // questionsdata = () =>{
    //     return (
    //             <div>
    //                 <QuestionsData 
    //                     number={this.state.qdata.length}
    //                 />
    //             </div>
    //         )};

    render()
    {
        return(
            <div>
                <Header username={this.state.username} handleChange={this.handleChange.bind(this)}/>
                {this.profiledata()}
                {/* if({this.state.qdata})
                {
                this.questionsdata()
                } */}
            </div>
           
        )
    } 
}
