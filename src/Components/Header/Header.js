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

            
					<div className=" navbar-extras">
                        <Landingpage/>
                    </div>
                    </nav>
			</div>
		</header>
	);
    }
}
export default Header;