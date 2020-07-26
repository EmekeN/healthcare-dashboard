import React, { Component} from 'react';
import API from './../API';
import './Table.scss';

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            tableProviders: [],

        }
        this.galileoAPI = new API();
    }

    //Call API for each
    // componentDidMount() {

    // }

    componentDidUpdate(prevProps) {
        //Use providers prop to add to table
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps);
    //     if(this.props.activeProviders !== nextProps.activeProviders) {
    //         console.log(nextProps)
    //     }


    // }

    render() {
        // const providers = this.props.activeProviders;
        return(
            <div className="Table">
                <div className="empty-table">
                    <p>Search for providers to view more information...</p>
                </div>
            </div>
        )
    }
}