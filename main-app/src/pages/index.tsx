import { MenuContainerLayout } from '@/layouts/MenuContainerLayout/MenuContainerLayout';
import HomeCard from '@/components/HomeCard';
import { ReactElement } from 'react';
import { Toolbar } from '@mui/material';
import dynamic from 'next/dynamic';

// call from another service
const FeatureCard = dynamic(() => import('FeatureRegister/FeatureCard'))

export default function Home() {
    return (
        <>
        <HomeCard/>
        <Toolbar />
        <FeatureCard/>
        </>
    );
}

Home.getLayout = function getLayout(page: ReactElement): ReactElement {
    return (
        <MenuContainerLayout>
            {page}
        </MenuContainerLayout>
    )
}