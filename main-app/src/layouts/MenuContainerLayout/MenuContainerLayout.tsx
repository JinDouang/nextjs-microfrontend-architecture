import React from 'react';

import AppMenuBar from '@/components/AppMenuBar';
import AppSideBar from '@/components/AppSideBar';
import { Box, Toolbar } from '@mui/material';

type Props = {
  children?: React.ReactNode;
};

export const MenuContainerLayout = ({children}:Props) => {
  
    return (
      <Box sx={{ display: 'flex' }}>
        <AppMenuBar />
        <AppSideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            {children}
        </Box>
      </Box>
    )
}