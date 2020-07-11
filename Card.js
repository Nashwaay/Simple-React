import React from 'react';
import work from './assets/place.svg';
import loc from './assets/public.svg';
import followers from './assets/group.svg';
import twitter from './assets/twitter.png';

const CardList = (props) => (
	<div>
  	{props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
	</div>
);

class Card extends React.Component {
	render() {
  	const profile = this.props;
  	return (
    	<div className="section github-profile">
        <div className="left-col">
    	  <img src={profile.avatar_url} />
        </div>
        <div className="right-col">
          <div className="main-heading name">{profile.name}</div>
          <h3 className="sub-heading">{profile.bio}</h3>
          <div>
            <div className="left-col"><img src={loc} /><br/>{profile.location}</div>
            <div className="right-col"><img src={work} /><br/>{profile.company}</div>
          </div>
          <div className="spacing"></div>
          <div>
            <div className="left-col"><img src={followers} /><br/>{profile.followers}</div>
            <div className="right-col"><img src={twitter} style={{width:"24px"},{ height:"24px"}}/><br/>{profile.twitter_username}</div>
          </div>
        </div>
    	</div>
    );
  }
}

export default CardList;
