import React, {Component} from "react";
import '../Header/Header.css';
import { withRouter,Link} from 'react-router-dom';
import logo from '../../Images/logo.webp';

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
        this.props.handleChange(this.state.username)
    }

  
    render(){
        return(
            <header>
			<div >
				<nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <a class="navbar-brand" href="/" style={{ color:"white"}}>
                    <img src={logo} width="30" height="30" class="d-inline-block align-top" />
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
                    <div>
                    <Link to={"./AboutUs"}>
                        <button id='about' type='submit'>About Us</button>
                        </Link>
                    </div>
                    
                    </nav>
                
			</div>
		</header>
	);
    }
}
export default withRouter(Header);
