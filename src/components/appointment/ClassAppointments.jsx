import React, { Component } from "react";

import { AppointmentPicker } from "react-appointment-picker";
import {AppointmentContainer} from "../../styles/appointments/index";
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";

export default class ClassAppointments extends Component {
    state = {
        loading: false,
        continuousLoading: false
    };

    addAppointmentCallback = ({
                                  addedAppointment: { day, number, time, id },
                                  addCb
                              }) => {
        this.setState(
            {
                loading: true
            },
            async () => {
                await new Promise((resolve) => setTimeout(resolve, 2000));
                console.log(
                    `Added appointment ${number}, day ${day}, time ${time}, id ${id}`
                );
                addCb(day, number, time, id);
                this.setState({ loading: false });
            }
        );
    };

    removeAppointmentCallback = ({ day, number, time, id }, removeCb) => {
        this.setState(
            {
                loading: true
            },
            async () => {
                await new Promise((resolve) => setTimeout(resolve, 2000));
                console.log(
                    `Removed appointment ${number}, day ${day}, time ${time}, id ${id}`
                );
                removeCb(day, number);
                this.setState({ loading: false });
            }
        );
    };

    render() {
        const days = [
            [
                { id: 1, number: 2, periods: 24 },

            ],
            [
                { id: 2, number: 1, periods: 24 },
            ],
            [
                { id: 3, number: "1", periods: 24 },
            ],
            [
                { id: 4, number: 1, periods: 24 },

            ],
            [
                { id: 5, number: 1, periods: 24 },
            ],
            [
                { id: 6, number: 1, periods: 24 },
            ],
            [
                { id: 7, number: 1, periods: 24 },
                ]
        ];
        const days1 = [
            [
                { id: 1, number: 1, isSelected: true, periods: 2 },
                { id: 2, number: 2 },
                null,
                { id: 3, number: '3', isReserved: true },
                { id: 4, number: '4' },
                null,
                { id: 5, number: 5 },
                { id: 6, number: 6 }
            ],
            [
                { id: 7, number: 1,  periods: 3 },
                { id: 8, number: 2, isReserved: true },
                null,
                { id: 9, number: '3', isReserved: true },
                { id: 10, number: '4' },
                null,
                { id: 11, number: 5 },
                { id: 12, number: 6 }
            ],
            [
                { id: 13, number: 1 },
                { id: 14, number: 2 },
                null,
                { id: 15, number: 3, isReserved: true },
                { id: 16, number: '4' },
                null,
                { id: 17, number: 5 },
                { id: 18, number: 6 }
            ],
            [
                { id: 19, number: 1 },
                { id: 20, number: 2 },
                null,
                { id: 21, number: 3 },
                { id: 22, number: '4' },
                null,
                { id: 23, number: 5 },
                { id: 24, number: 6 }
            ],
            [
                { id: 25, number: 1, isReserved: true },
                { id: 26, number: 2 },
                null,
                { id: 27, number: '3', isReserved: true },
                { id: 28, number: '4' },
                null,
                { id: 29, number: 5 },
                { id: 30, number: 6, isReserved: true }
            ]
        ];
        const { loading, continuousLoading } = this.state;
        return (
            <AppointmentContainer>
                <h1>Rent a Dumpster</h1>
                <Typography variant="h4" component="h6" gutterBottom>
                    Select a date and time to schedule your dumpster rental.
                </Typography>
              <Link to={'/'}>
                  <Typography variant="h6" component="h6" gutterBottom>
                      Return Home
                  </Typography>
              </Link>
                <AppointmentPicker
                    addAppointmentCallback={this.addAppointmentCallback}
                    removeAppointmentCallback={this.removeAppointmentCallback}
                    initialDay={new Date("2021-02-01")}
                    days={days}
                    maxReservableAppointments={3}
                    alpha
                    visible
                    selectedByDefault
                    loading={loading}
                />
            </AppointmentContainer>
        );
    }
}