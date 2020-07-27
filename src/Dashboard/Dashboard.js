import React, { Component } from "react";
import "./Dashboard.scss";
import SearchBar from "./../Search/SearchBar";
import Table from "../Table/Table";
import API from "./../API";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeProviders: new Set(),
        };
        this.galileoAPI = new API();
    }

    handleSubmitProvider = (newProviderID) => {
        const providerList = this.state.activeProviders;

        if (!providerList.has(newProviderID)) {
            providerList.add(newProviderID);
            this.setState({ activeProviders: providerList });
        }
    };

    handleDeleteProvider = (newProviderID) => {
        const providerList = this.state.activeProviders;
        providerList.delete(newProviderID);
        this.setState({ activeProviders: providerList });
    };

    render() {
        const activeProviders = Array.from(this.state.activeProviders);
        return (
            <div className="Dashboard">
                <div className="header">
                    <h1>Dashboard</h1>
                    <SearchBar onSubmitProvider={this.handleSubmitProvider} />
                </div>
                <Table
                    activeProviders={activeProviders}
                    handleDeleteProviders={this.handleDeleteProvider}
                />
            </div>
        );
    }
}

export default Dashboard;
