import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class Search extends React.Component {
	state = { userName: '' };
	handleSubmit = async (event) => {
  	event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(resp.data);
    this.setState({ userName: '' });
  };
	render() {
  	return (
      <div className="section">
        
        <div className="left-col left">
        <Link to='/'><h2>GitProfile</h2></Link>
        </div>
        <div className="right-col">
    	<form onSubmit={this.handleSubmit}>
    	  <input
          type="text" 
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub Username" 
          required 
        />
        <button className="button">View Profile</button>
    	</form>
      </div>
      </div>

    );
  }
}

export default Search;