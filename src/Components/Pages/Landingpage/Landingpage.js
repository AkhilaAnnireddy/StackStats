import React, { Component } from 'react'
import  {withRouter} from 'react-router-dom';
import './Landingpage.css'
class LandingPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: ''
    }
  }

  handleSearch (e) {
    this.setState({ username: e.target.value })
  }

  handleGoClick = (e) =>{
      e.preventDefault()
      this.props.history.push({pathname:'/profile',state:{username: this.state.username}});
  }

  render () {
    return (
      <div className='searchbar-container centered'>
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
    )
  }
}

export default withRouter(LandingPage);