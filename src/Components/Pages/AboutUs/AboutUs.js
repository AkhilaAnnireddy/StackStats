import React, { Component } from 'react';
import AboutUsCard from './AboutUsCard.js' ;
import './AboutUs.css';
import Header from '../../Header/Header';
import Akhila from '../../../Images/Akhila.jpeg';
import Anusha from '../../../Images/Anusha.jpeg';
import Dinesh from '../../../Images/Dinesh.jpeg';
import Chandana from '../../../Images/Chandana.jpeg';
import Supraja from '../../../Images/Supraja.jpeg';

class AboutUs extends Component{
    state= {
        userid:this.props.match.params.user_id,
        data:[],
        qdata:[],
        adata:[],
        anstagdata: [],
        questagdata:[],
        
    }    
    handleChange(user1)
    {
        this.props.history.push({pathname:'/searchlist',state:{inname: user1}});
    }
    render (){
        return(
        <div>
            <div>
                <Header username={this.state.username} handleChange={this.handleChange.bind(this)}/>
            </div>
            <div className='card'>
                <AboutUsCard img={Akhila} name="Akhila Annireddy" github="https://github.com/AkhilaAnnireddy" linkedin="https://www.linkedin.com/in/akhila-annireddy-900632198"/>
                <AboutUsCard img={Anusha} name="Anusha Nagula" github="https://github.com/anushanagula" linkedin="https://www.linkedin.com/in/anusha-nagula-7281b2192"/>
                <AboutUsCard img={Dinesh} name="Dinesh Pandikona" github="https://github.com/Tesla-Atoz" linkedin=""/>
                <AboutUsCard img={Chandana} name="Ravi Chandana Golla" github="https://github.com/chandana-0904" linkedin="https://www.linkedin.com/in/ravi-chandana-golla-0904"/>
                <AboutUsCard img={Supraja} name="Supraja Alleni" github="https://github.com/SuprajaAlleni" linkedin="https://www.linkedin.com/in/supraja-alleni-90358016a"/>
            
            </div>
        </div>
    )
    }
}
export default AboutUs