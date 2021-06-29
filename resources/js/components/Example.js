import React from 'react';
import ReactDOM from 'react-dom';
import useState from 'react';

const testData = [
    {name: "Bryan Fernando", avatar_url: "https://avatars.githubusercontent.com/u/47802477?v=4"},
    {name: "Henry Alvarado", avatar_url: "https://avatars.githubusercontent.com/u/67518799?v=4"},
    {name: "Daniel Rivas ", avatar_url: "https://avatars.githubusercontent.com/u/52222377?v=4"},
    {name: "Anthony Santillan", avatar_url: "https://avatars.githubusercontent.com/u/58825544?v=4"},

];

const CardList = (props) => (
	<div>
  	{props.profiles.map(profile => <Card {...profile}/>)}
	</div>
);

function Card (props){
  	const profile =props;
  	return (
    	<div className="github-profile">
    	  <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    	</div>
    );
  }


function Form (props){
  	return (
    	<form action="">
    	  <input type="text" placeholder="GitHub username"/>
        <button>Add card</button>
    	</form>
    );
  }

  class App extends React.Component {
    state = {
      profiles: testData,
    };
    
    render() {
      return (
        <div>
          <div className="header">{this.props.title}</div>
          <Form />
          <CardList profiles={this.state.profiles} />
        </div>
      );
    }	
  }
  
export default App;

if (document.getElementById('example')) {
    ReactDOM.render(<App/>, document.getElementById('example'));
}

