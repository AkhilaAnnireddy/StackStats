import React, { Component } from 'react';
import  {withRouter} from 'react-router-dom';
import './Landingpage.css';
import Footer from '../../Footer/Footer';

class LandingPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inname: ''
    }
  }

  handleSearch (e) {
    this.setState({ inname: e.target.value })
  }

  handleGoClick = (e) =>{
      e.preventDefault()
      this.props.history.push({pathname:'/searchlist',state:{inname: this.state.inname}});
  }

  render () {
    return (
      
        <div className='searchbar-container centered bg'>
          <form className='example' onSubmit={e => e.preventDefault()}>
            {/* <a class="button button2" href="https://github.com/AkhilaAnnireddy/Devstacks"><img className="gitimg" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"></img></a> */}
            <h1>StackStats</h1>
          <div className='buttonIn container1 centered'> 
          <input
            type='text'
            size='45'
            placeholder=' Find Stackoverflow users...'
            onChange={this.handleSearch.bind(this)}
            value={this.state.inname} 
           
            />
             <button className="btn-without-border"
            type='submit'
            onClick={this.handleGoClick.bind(this)}>
            <i className="fas fa-search"></i>
            </button>
          </div>
          <Footer/>
          </form>
        </div>
    )
  }
}

export default withRouter(LandingPage);