import React, { Component } from "react";

import { AppointmentPicker } from "react-appointment-picker";
import {AppointmentContainer} from "../../styles/appointments";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";


type Props = {
    addedAppointment: { day: number; number: number; time: number; id: number };
}
const AppointmentPickerEl = () => {

    const [loading, setLoading] = React.useState(false);
    const [continuousLoading, setContinuousLoading] = React.useState(false);

    const addAppointmentCallback=(addedAppointment: { day: number; number: number; time: number; id: number }) => {
        setLoading(true);
        (async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.table(`Added appointment: ${JSON.stringify(addedAppointment)}`);

            setLoading(false);
        })();
    }

    const removeAppointmentCallback=(removedAppointment: { day: number; number: number; time: number; id: number },removeCb:Function) => {
        setLoading(true);
        (async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.table(`Removed appointment: ${JSON.stringify(removedAppointment)}`);
           // removeCb(removedAppointment);
            setLoading(false);
        })();
    }


        const days = [
            [
                { id: 9, number: 1, periods: 4 },
                { id: 10, number: 2, periods: 4 },
                { id: 11, number: 3, isReserved: true, periods: 4 },
                { id: 12, number: "4", periods: 4 }
            ],
            [
                { id: 9, number: 1, periods: 4 },
                { id: 10, number: 2, periods: 4 },
                { id: 11, number: 3, isReserved: true, periods: 4 },
                { id: 12, number: "4", periods: 4 }
            ],
            [
                { id: 9, number: 1, periods: 4 },
                { id: 10, number: 2, periods: 4 },
                { id: 11, number: 3, isReserved: true, periods: 4 },
                { id: 12, number: "4", periods: 4 }
            ],
            [
                { id: 13, number: 1, periods: 4 },
                { id: 14, number: 2, periods: 4 },
                { id: 15, number: 3, isReserved: true, periods: 4 },
                { id: 16, number: "4", periods: 4 }
            ],
            [
                { id: 9, number: 1, periods: 4 },
                { id: 10, number: 2, periods: 4 },
                { id: 11, number: 3, isReserved: true, periods: 4 },
                { id: 12, number: "4", periods: 4 }
            ],
            [
                { id: 21, number: 1, isReserved: true, periods: 4 },
                { id: 22, number: 2, isReserved: true, periods: 4 },
                { id: 23, number: "3", isReserved: true, periods: 4 },
                { id: 24, number: "4", isReserved: true, periods: 4 }
            ]
        ];


    return (
            <AppointmentContainer>
                <h1>Appointment Picker</h1>
                <AppointmentPicker
                     /* @ts-ignore}*/
                    addAppointmentCallback={addAppointmentCallback}
                    /* @ts-ignore}*/
                    removeAppointmentCallback={removeAppointmentCallback}
                    initialDay={new Date("2021-02-01")}
                    days={days}
                    maxReservableAppointments={3}
                    alpha
                    visible
                    selectedByDefault
                    loading={loading}
                />
                <Link to={'/'}>
                    <Button variant={'contained'}>
                        Return To Landing
                    </Button>
                </Link>
            </AppointmentContainer>
        );
    }
export default AppointmentPickerEl;
