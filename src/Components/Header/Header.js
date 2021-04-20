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
				<nav className=' navbar navbar-expand-md navbar-dark bg-dark row'>
                    <div className="col-sm">
                <a class="navbar-brand" href="/" style={{ color:"white"}}>
                    <img src={logo} width="30" height="30" class="d-inline-block align-top" />
                    StackStats </a>
                    </div>
    
                    <div className=" col-sm-auto">
                    <Link to="/AboutUs">
                        <button id='about' type='submit'>About Us</button>
                    </Link>
                    </div>
                    <div className="col-sm-auto">
                    <ul className='navbar-nav'>
                    <div className='searchbar-container '>
                    <form className='searchbar form-inline' onSubmit={e => e.preventDefault()}>
                        <input 
                        type='text'
                        
                        placeholder='Search...'
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
                    </div>
                    </nav>

                
			</div>
		</header>
	);
    }
}
export default withRouter(Header);
