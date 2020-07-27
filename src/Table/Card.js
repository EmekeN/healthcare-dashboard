import React, { Component } from "react";
import API from "./../API";
import "./Card.scss";

export default class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            doctorInfo: {
                doctor_id: this.props.id,
                first_name: "",
                last_name: "",
                dob: "",
                degree: "",
            },
            doctorTasks: [],
            expandDetails: false,
        };
        this.handleExpandDetails = this.handleExpandDetails.bind(this);
        this.galileoAPI = new API();
    }

    async componentDidMount() {
        try {
            let doctors = await this.galileoAPI.getDoctorById(this.props.id);
            let doctorTask = await this.galileoAPI.getTasksForDoctorById(
                this.props.id
            );
            this.setState({ doctorInfo: doctors[0] });
            this.setState({ doctorTasks: doctorTask });
        } catch (e) {
            console.log(e);
        }
    }

    handleExpandDetails = (e) => {
        this.setState({ expandDetails: !this.state.expandDetails });
    };

    render() {
        const doctor = this.state.doctorInfo;
        const doctorTasks = this.state.doctorTasks
            ? this.state.doctorTasks.sort(
                  (taskA, taskB) => taskA.priority - taskB.priority
              )
            : [];
        const expandDetails = this.state.expandDetails;
        return (
            <div className="Card">
                {doctor.first_name !== "" && (
                    <div className="card-container">
                        {!expandDetails && (
                            <div className="card-front">
                                <div className="card-img">
                                    <p>{`${doctor.first_name[0]}${doctor.last_name[0]}`}</p>
                                </div>
                                <div className="card-details">
                                    <p>{`${doctor.first_name} ${doctor.last_name}`}</p>
                                    {doctor.degree === "MD" && (
                                        <p>Medical Doctor</p>
                                    )}
                                    {doctor.degree === "GP" && (
                                        <p>General Practioner</p>
                                    )}
                                </div>
                                <div>
                                    <button onClick={this.handleExpandDetails}>
                                        View Tasks
                                    </button>
                                </div>
                            </div>
                        )}

                        {expandDetails && (
                            <div className="card-back">
                                <p>{`${doctor.first_name} ${doctor.last_name}`}</p>
                                <div className="task-list">
                                    {doctorTasks.length === 0 && (
                                        <p>Provider has no tasks...</p>
                                    )}
                                    {doctorTasks.length > 0 &&
                                        doctorTasks.map((task) => {
                                            return (
                                                <div
                                                    key={task.task_id}
                                                    className="task"
                                                >
                                                    {`Task: ${task.task_id} with Priority: ${task.priority} `}
                                                </div>
                                            );
                                        })}
                                </div>

                                <button onClick={this.handleExpandDetails}>
                                    View Doctor
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
}
