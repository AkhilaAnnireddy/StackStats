import React from 'react';
import axios from 'axios';
class Answer extends React.Component{
    state= {
        userid:this.props.userid,
        answers:[],
    }    
    componentDidMount = () =>
    {
        console.log(this.state.userid)
       // this.getanswers()
        //this.getdata2()
    }
    componentDidUpdate=(prevState,prevProps)=>
    {
        this.getanswers()
        //this.getdata2()
    }
    getanswers = (userid) =>{
        axios.get(`https://api.stackexchange.com//2.2/users/${this.state.userid}/answers?order=desc&sort=activity&site=stackoverflow`).then((response)=>{
            this.setState(
                {   answers: response.data.items[0],
                }
            )
        }).catch((error)=>{
                console.log(error)
        })
    };
    render()
    {
        return(
            <div>
                {this.props.answers}
            </div>
        )
    }
}
export default Answer;