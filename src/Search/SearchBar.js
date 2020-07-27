import React, { Component } from "react";
import API from "./../API";
import searchIcon from "./../assets/search-icon.svg";
import { debounce } from "lodash";
import SearchResults from "./SearchResult";
import "./SearchBar.scss";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchVal: "",
            searchResults: [],
            activeProviders: this.props.activeProviders,
        };
        this.handleDirectSearch = this.handleDirectSearch.bind(this);
        this.searchOnChange = this.searchOnChange.bind(this);
        this.searchDebounced = debounce((e) => {
            e.persist();
            this.handleDirectSearch(e);
        }).bind(this);
        this.handleCloseSearch = this.handleCloseSearch.bind(this);
        this.galileoAPI = new API();
    }

    searchOnChange = (e) => {
        e.persist();
        e.preventDefault();

        this.setState({
            searchVal: e.target.value,
        });

        if (e.target.value === "" && this.state.searchResults !== []) {
            this.setState({ searchResults: [] });
        }

        if (e.target.value !== "") {
            this.searchDebounced(e);
        }
    };

    handleDirectSearch = async (e) => {
        e.persist();
        e.preventDefault();

        if (this.state.searchVal === "") {
            this.setState({ searchResults: [] });
            return;
        }

        try {
            let doctors = await this.galileoAPI.getDoctors();
            var searchString = this.state.searchVal.toLowerCase();
            var list = this.galileoAPI.searchForDoctorByQuery(
                doctors,
                searchString
            );
            this.setState({ searchResults: list });
        } catch (e) {
            console.log(e);
        }
    };

    handleCloseSearch = (e) => {
        e.preventDefault();

        this.setState({ searchResults: [] });
    };

    handleProviderClick = (id, e) => {
        e.preventDefault();

        this.props.onSubmitProvider(id);
        this.setState({ searchResults: [] });
    };

    render() {
        return (
            <div className="SearchBar">
                <div className="search-bar-container">
                    <div>
                        <form
                            className="search-form"
                            onSubmit={this.handleDirectSearch}
                            onBlur={this.handleCloseSearch}
                        >
                            <div className="search-bar">
                                <input
                                    type="image"
                                    className="search-icon"
                                    src={searchIcon}
                                    onClick={this.handleDirectSearch}
                                    alt="Search for providers"
                                />
                                <input
                                    name="search"
                                    className="search-input"
                                    type="text"
                                    autoComplete="off"
                                    placeholder="Search providers..."
                                    value={this.state.searchVal}
                                    onChange={this.searchOnChange}
                                />
                            </div>

                            {this.state.searchResults.length > 0 && (
                                <div className="search-result-list">
                                    {this.state.searchResults.map(
                                        (provider) => {
                                            return (
                                                <SearchResults
                                                    key={provider.doctor_id}
                                                    provider={provider}
                                                    handleProviderClick={
                                                        this.handleProviderClick
                                                    }
                                                />
                                            );
                                        }
                                    )}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;
