import React from 'react';
import Search from './Search'
import CardList from './Card'
import Switch from 'react-router-dom'

class App extends React.Component {
  state = {
    profiles: [],
  };
  viewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [profileData],
    }));
  };
	render() {
  	return (    
      <div>
        <Switch>
  <Route exact path='/' component={App}/>
  <Route path='/search' component={Search}/>
</Switch>
      <Search onSubmit={this.viewProfile} />
      <div>
        <h1>Meet the Developers at GitHub</h1><br/>
      </div>
      <CardList profiles={this.state.profiles} />
      
    </div>
    );
  }	
}


export default App;
