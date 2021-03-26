import React, { Component } from 'react'
import  {withRouter} from 'react-router-dom';

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
      <div className='searchbar-container'>
        <form onSubmit={e => e.preventDefault()}>
          <input
            type='text'
            size='45'
            placeholder='Stackoverflow username'
            onChange={this.handleSearch.bind(this)}
            value={this.state.username} />
            <button
            type='submit'
            onClick={this.handleGoClick.bind(this)}>
            Search
          </button>
        </form>
      </div>
    )
  }
}

export default withRouter(LandingPage);