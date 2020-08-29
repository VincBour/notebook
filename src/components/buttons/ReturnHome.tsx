import * as React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const ReturnHome = () => {
    return (
        <Button variant='outlined' style={{margin:'8px'}}><Link to='/'style={{textDecoration:'none' }}>Return Home</Link></Button>
    )
}

export default ReturnHome;