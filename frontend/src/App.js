import React, { Component } from 'react';
import TwitterLogin from 'react-twitter-auth';
import axios from "axios";

class App extends Component {

  constructor() {
    super();

    this.state = { isAuthenticated: false, user: null, token: ''};
  }

  onSuccess = (response) => {
    const token = response.headers.get('x-auth-token');
    response.json().then(user => {
      if (token) {
        this.setState({isAuthenticated: true, user: user, token: token});
      }
    });
  };

  onFailed = (error) => {
    alert(error);
  };

  logout = () => {
    this.setState({isAuthenticated: false, token: '', user: null})
  };

  render() {
    let content = !!this.state.isAuthenticated ?
      (
        <PostForm user={this.state.user} 
          token={this.state.token} 
          logout={this.logout} />
      ) :
      (
        <TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
                      onFailure={this.onFailed} onSuccess={this.onSuccess}
                      requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"/>
      );

    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

class PostForm extends Component {
  constructor(props){
    super(props);

    this.state = { value: '' };
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log("Submitting to API", this.state.value);

    axios({
      method: 'post',
      headers: {'x-auth-token': this.props.token},
      url: 'http://localhost:4000/api/v1/tweets',
      data: {
        status: this.state.value
      }
    }).then((response) => {
      console.log("Response status: ", response.status);
    });
  }

  render(){
    console.log(this.props.user);
    return (<div>
          <p>Form</p>
          <div>
            <button onClick={this.props.logout} className="button" >
              Log out
            </button>
          </div>

            <form onSubmit={this.handleSubmit}>
              <label>
                Text:
                <input type="text" value={this.state.value} 
                  onChange={this.handleChange} />
              </label>
              <input type="submit" value="Tweet" />
            </form>

        </div>);
  }
}

export default App;
