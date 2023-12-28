import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

type Props = {
    children?: React.ReactNode;
    [key: string]: any;
};

const AppMenuBar = ({ children, ...rest }: Props) => {
    return (
        <AppBar position="fixed" sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography>
                <Button color="inherit">test</Button>
            </Toolbar>
        </AppBar>
    );
};

export default AppMenuBar;
