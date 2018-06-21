import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Prh from '../../util/Prh';
import './App.css';
import SearchResults from '../SearchResults/SearchResults';

class App extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.sortBy = this.sortBy.bind(this);

    this.state = {
      searchResults: [],
      direction: {
        name: 'asc',
      }
    }
    
  }



  sortBy(key) {
    let companiesPlace = this.state.searchResults;
    let sortOrder = this.state.direction[key];
    if (sortOrder === 'asc') {
    companiesPlace.sort(function(a, b) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
    })
  }    
    if (sortOrder === 'desc') {
        companiesPlace.sort(function(a, b) {
        if (a[key] > b[key]) return -1;
        if (a[key] < b[key]) return 1;
        return 0;
    })
  }


    this.setState({
      searchResults: companiesPlace,
      direction: {
        [key]: this.state.direction[key] === 'asc'
        ? 'desc'
        : 'asc'
      }
    })
    }
  


  search(term) {
    Prh.search(term).then(searchResults => this.setState({
      searchResults: searchResults
    }));
  }

  

  render() {
    return (
      <div> 
        <h1>Yrityshaku</h1> 
        <div className="App">
          <SearchBar
            onSearch = {this.search}
          />

          <div className="App-companylist">
            <SearchResults
            companies = {this.state.searchResults}
            sortBy = {this.sortBy}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
