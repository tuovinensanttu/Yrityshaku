import React from 'react';
import Company from '../Company/Company';
import './CompanyList.css';

class CompanyList extends React.Component {
    render() {
        return (
            <div className="CompanyList">
                {this.props.companies.map(company => <Company key={company.id} company={company} />)}
            </div>
        );
    }
}

export default CompanyList;