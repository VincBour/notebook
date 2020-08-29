import * as React from 'react';
import { TextField, MenuItem } from '@material-ui/core';

export interface ISelectProps {
    data: ICategory[];
    label: string;
}

export interface ICategory {
    value: string;
    label: string;
}

export const Select: React.FC<ISelectProps> = ({ data, label }) => {
    const [currency, setCurrency] = React.useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    }
    return (
        <TextField 
            select
            label={label}
            value={currency}
            onChange={handleChange}
            variant="outlined"
        >
            {data.map((option: ICategory) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    )
}

export default Select;