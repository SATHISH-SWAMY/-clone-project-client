import {Box, Typography} from '@mui/material'
import { useRouteError } from 'react-router-dom'


const ErrorComponent = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <Box style={{ marginLeft:250 }}>
        <Typography>there was an error loading in this page</Typography>
        </Box>
    )
}

export default ErrorComponent