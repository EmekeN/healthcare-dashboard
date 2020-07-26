import React, {Component} from 'react';
import './SearchResult.css';

export default class SearchResults extends Component {
    constructor(props){
        super(props)

        this.state = {
        }

    }

    render() {

        return(

            <div className="search-results" key={this.props.provider.doctor_id} onMouseDown={ (e) => this.props.handleProviderClick(this.props.provider.doctor_id, e)}>
                <div className="provider">
                    {`${this.props.provider.first_name} ${this.props.provider.last_name} ${this.props.provider.degree}`}
                </div>
             </div>
        )
    }


}
