import * as React from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


export const Search: React.FC = () => {
    return (
        <TextField 
            variant='standard'
            label='Search'
            InputProps={{
                startAdornment: (
                    <InputAdornment position='start'>
                        <SearchIcon />
                    </InputAdornment>
                )
            }}
        />
    )
}

export default Search;