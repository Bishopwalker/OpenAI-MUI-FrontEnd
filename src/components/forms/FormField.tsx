import * as React from "react";
import {Grid, TextField} from "@mui/material";

type FormFieldProps = {
    id: string,
    label: string,
    disabled?: boolean,
    required?: boolean,
    readonly ?: boolean,
    includeLabel?: boolean,
    placeholder?: string,
    type?: string,
    meta:{
        error: string,
        touched: boolean,
        valid: boolean,
        warning: string,
    }

}
const FormField = ({id,label,disabled,required,readonly,includeLabel,placeholder,type,meta }:FormFieldProps) => {


    return (
        <div className={`mb-3`}>
             <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        id={id}
                        label={label}
                        disabled={disabled}
                        required={required}
                        placeholder={placeholder}
                        type={type}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
            </Grid>
        </div>
    )
}
export default FormField