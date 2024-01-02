import { MenuContainerLayout } from '@/layouts/MenuContainerLayout/MenuContainerLayout';
import HomeCard from '@/components/HomeCard';
import { ReactElement } from 'react';
import { Toolbar } from '@mui/material';
import dynamic from 'next/dynamic';

// call from another service
const FeatureCard = dynamic(
    // @ts-ignore
    // eslint-disable-next-line
    () => import('FeatureRegister/FeatureCard'),
    { ssr: false }
    )

// @ts-ignore

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