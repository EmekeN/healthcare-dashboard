import React, { Component } from "react";
import Card from "./Card";
import "./Table.scss";

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const providerIDs = this.props.activeProviders;
        // const
        return (
            <div className="Table">
                {providerIDs.length === 0 && (
                    <div className="table-empty">
                        <p>Search for providers to view more information...</p>
                    </div>
                )}

                {providerIDs.length > 0 &&
                    providerIDs.map((id) => {
                        return (
                            <Card
                                key={id}
                                id={id}
                                handleDeleteProvider={
                                    this.props.handleDeleteProvider
                                }
                            />
                        );
                    })}
            </div>
        );
    }
}
