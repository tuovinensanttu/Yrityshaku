import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search(term) {

        this.props.onSearch(this.state.term);

    }

    handleTermChange(event) {
        let date = event.target.value;
        let newDate = date.split(".").reverse().join("-");
        this.setState({term: newDate});

    }

    render() {
        return (
            <div className="SearchBar">
                <input placeholder="dd.mm.yyyy" onChange={this.handleTermChange}/>
                <a onClick={this.search}>HAKU</a>
            </div>
        );
    }
}

export default SearchBar;