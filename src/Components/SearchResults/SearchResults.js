import React from 'react';
import './SearchResults.css';

class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <table>
                    <thead>
                        <tr>
                            <th><a onClick={() => this.props.sortBy('id')}>Y-Tunnus</a></th>
                            <th><a onClick={() => this.props.sortBy('name')}>Yrityksen nimi</a></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           this.props.companies.map(company => (
                                <tr key={company.id}>
                                    <td>{company.id}</td>
                                    <td>{company.name}</td>
                                </tr>
                           ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default SearchResults;