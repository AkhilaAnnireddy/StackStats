import React, {Component} from "react";
import Searchbar from '../Pages/Landingpage/Landingpage'
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Landingpage from "../Pages/Landingpage/Landingpage";

class Header extends Component{
    render(){
        return(
            <header>
			<div >
				<nav className='navbar navbar-expand-md navbar-dark bg-dark'>
					<Link className='navbar-brand text-white logo' to='/'>
                        DevStacks
					</Link>
                    <div className='navbar-extras'>
                    <div className='searchbar-container'>
                        <form className='example' onSubmit={e => e.preventDefault()}>
                        <h1>Dev-Stacks</h1>
                        <input
                            type='text'
                            size='45'
                            placeholder='Find Stackoverflow users...'
                            onChange={this.handleSearch.bind(this)}
                            value={this.state.username} />
                            <button
                            type='submit'
                            onClick={this.handleGoClick.bind(this)}>
                            <i class="fas fa-search"></i>
                        </button>
                        </form>
                    </div>
                    </div>

                    </nav>
			</div>
		</header>
	);
    }
}
export default Header;
