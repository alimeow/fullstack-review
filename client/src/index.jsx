import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  //what's this, lifecycle update?  ???
  componentDidMount() {
    //if refresh -> setState to 25 repos
    //GET to repo endpoint
    display25();
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    axios.post('/repos', {
      //key:value used in server
      data: {username: term};

    })
    //if succesful, aka fetched data from db?
    .then(function(res) {
      //what to do after we get res:

    })
    //if error:
    .catch(function(err) {
      console.log(err);
      res.send(err.message)  // right?
    }))
  }

  //some method to display top 25 repos:
  display25() {
    axios.get('/repos', )

  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));