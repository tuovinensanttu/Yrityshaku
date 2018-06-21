import React from 'react';
import './Company.css';

class Company extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Company">
                <div className="Company-information">
                    
                     <p> {this.props.company.id} | {this.props.company.name}</p>
                           
                </div>
            </div>
        );
    }

}
export default Company;