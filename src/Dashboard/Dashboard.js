import  React, { Component } from 'react';
import './Dashboard.scss'
import SearchBar from './../Search/SearchBar';
import Table from '../Table/Table';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
                activeProviders: [],


            };
    }

    handleSubmitProvider = (id) => {
        console.log(id);
        const list = this.state.activeProviders;
        list.push(id);
        this.setState({activeProviders: list});
    }



    render() {
        const providers = this.state.activeProviders;
        return (
            <div className="Dashboard">
                <div className="header">
                    <h1>
                    Dashboard
                    </h1>  
                    <SearchBar onSubmitProvider={this.handleSubmitProvider}/>
                </div>
                <Table activeProviders={providers}/>
            </div>
          );
    }
}

export default Dashboard;