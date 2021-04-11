import React from 'react';
import axios from 'axios';
import './searchlist.css';
import { Link } from "react-router-dom";
import { Search } from './Search.js';
import Header from '../../Header/Header';

export class SearchList extends React.Component{

    state = {
        inname : this.props.location.state.inname,
        result :'',
    }
    handleChange=(user1)=>
    {
        this.setState({inname:user1})
    }
    componentDidMount = () =>
    {
        this.getdata()
    }
    componentDidUpdate=(prevProps,prevState)=>
    {
        if(prevState.inname!==this.state.inname && prevProps.username!==prevState.inname)
        {
            this.getdata()
        }
    }
    
    getdata = () =>{
        axios.get(`https://api.stackexchange.com/2.2/users?order=desc&sort=reputation&inname=${this.state.inname}&site=stackoverflow`).then((response)=>{
            this.setState(
                {   
                    result : response.data.items,  
                }
            )
        }).catch((error)=>{
                console.log(error)
        })
        
    };

    getprofilelist = () =>{
        const {result} = this.state;
        if(Object.keys(result).length && result.length){
            return(
                <div>
                    {result.map((result, index)=>{
                        return(
                            <Link
                                key={"profile" + index}
                                to={"/profile/"+result.user_id}
                            >
                            <Search inname={result.display_name } image={result.profile_image} link={result.link} userid={result.user_id}/>
                            </Link>
                        )
                    })}
                </div>
            )
        }

    }

    render(){   
            console.log(this.state.result)
        return(
            <div>
                <Header username={this.state.username} handleChange={this.handleChange.bind(this)}/>
                {this.getprofilelist()}
            </div>
        )
    }
}