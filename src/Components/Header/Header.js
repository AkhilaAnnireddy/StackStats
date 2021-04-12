import React, {Component} from "react";
import Searchbar from '../Pages/Landingpage/Landingpage'
import { Link } from "react-router-dom";
import { withRouter} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Landingpage from "../Pages/Landingpage/Landingpage";

class Header extends Component{
    constructor(props)
    {
        super(props);
        this.handleGoClick=this.handleGoClick.bind(this)
        this.state={
            username:this.props.username
        }
    }
    handleSearch(e)
    {
        this.setState({username:e.target.value})
    }
    handleGoClick(e)
    {
        console.log(this.state.username)
        
        this.props.handleChange(this.state.username)
    }
    render(){
        return(
            <header>
			<div >
				<nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <a class="navbar-brand" href="#">
                    <img src='././Images.logo.webp' width="30" height="30" class="d-inline-block align-top" />
                    StackStats </a>
                    <ul className='navbar-nav ml-auto'>
                    <div className='searchbar-container justify-content-end'>
                    <form className='searchbar' onSubmit={e => e.preventDefault()}>
                        <input 
                        type='text'
                        size='45'
                        placeholder='Find Stackoverflow users...'
                        onChange={this.handleSearch.bind(this)}
                        value={this.state.username} />
                        <button 
                        type='submit'
                         onClick={this.handleGoClick}>
                        <i class="fas fa-search"></i>
                        </button>
                    </form>
                    </div>
                    </ul>
                    </nav>
                
			</div>
		</header>
	);
    }
}
export default withRouter(Header);
