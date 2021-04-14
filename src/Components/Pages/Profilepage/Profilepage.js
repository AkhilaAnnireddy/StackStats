import React from 'react';
import axios from 'axios';
import './profilepage.css';
import {ProfileData} from '../Profiledata/ProfileData.js';
import {QuestionsData} from '../QuestionsData/QuestionsData.js';
import {AnswersData} from '../AnswersData/AnswersData.js';
import Header from '../../Header/Header';
import AnswersChart from '../Charts/AnswersChart.js';
import QuestionsChart from '../Charts/QuestionsChart';

export class ProfilePage extends React.Component
{
    
    state= {
        userid:this.props.match.params.user_id,
        data:[],
        qdata:[],
        adata:[],
    }    
    handleChange(user1)
    {
        this.props.history.push({pathname:'/searchlist',state:{inname: user1}});
    }
    componentDidMount = () =>
    {
        this.getdata()
        this.getdata2()
        this.getdata3()
    }
    getdata = () =>{
        axios.get(`https://api.stackexchange.com/2.2/users/${this.state.userid}?order=desc&sort=reputation&site=stackoverflow&filter=!40k8cc.1QzANrEHsr`).then((response)=>{
            this.setState(
                {   data: response.data.items[0],
                }
            )
        }).catch((error)=>{
                console.log(error)
        })
    };
    getdata2=()=>{
        if(this.state.userid)
        {
            axios.get(`https://api.stackexchange.com/2.2/users/${this.state.userid}/questions?order=desc&sort=activity&site=stackoverflow&filter=!--1nZx2S8rdl`).then((response)=>{
              //this.setState({qdata:response.data.items})
             //console.log(response.data)
             this.setState(
                 {
                    qdata:response.data.items,
                 }
             )
        
                } ).catch((error)=>{
                    console.log(error)
            });
               
            } 
    }
    getdata3=()=>
    {
        if(this.state.userid)
        {
        axios.get(`https://api.stackexchange.com/2.2/users/${this.state.userid}/answers?order=desc&sort=activity&site=stackoverflow&filter=!--1nZx2S8rdl`).then((response)=>{
            //this.setState( {   answers: response.data})
            //console.log(response.data)
            this.setState(
                {
                    adata:response.data.items,
                }
            )
        }).catch((error)=>{
                console.log(error)
        })
    }
    }

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
                upvote={this.state.data.up_vote_count}
                downvote={this.state.data.down_vote_count}
                bronze={badges.bronze}
                silver={badges.silver}
                gold={badges.gold}
            />
            </div>
        )
    };
    questionsdata = () =>{
        return (
                <div>
                    <QuestionsData 
                        question={this.state.qdata}
                        number={this.state.data.question_count}
                    />
                </div>
            )};
    answersdata = () =>{
        return (
            <div>
                <AnswersData ans={this.state.adata}
                number={this.state.data.answer_count}
                />
            </div>
        )};
    render()
    {
        return(
            <div>
                <Header username={this.state.username} handleChange={this.handleChange.bind(this)}/>
                <div className='container'>
                {this.profiledata()}
                
                <div className="row ">
                    <div className="col-md-6">
                   <h6> My Recent Questions</h6>
                {this.questionsdata()}
                </div>
                <div className="col-md-6">
               <h6> My Recent Answers</h6>
                {this.answersdata()}
                </div>
                
                </div>
                <div className='charts'>
                <div className="que_chart">
                <p>Top Question Tags</p>
                <QuestionsChart />
                 </div>
                <div className='ans_chart'> 
                <p>Top Answer Tags</p>
                <AnswersChart />
    
                </div>
                </div>
                </div>
                </div>
           
        )
    } 
}