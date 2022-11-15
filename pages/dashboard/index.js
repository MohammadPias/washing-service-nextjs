import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import BookingOverview from './admin/bookings';


const Dashboard = () => {
    const router = useRouter();
    const { info } = useSelector(state => state.user);


    useEffect(() => {
        if (!info) {
            router.push("/signin?redirect=/dashboard")
        }
    }, [])
    // console.log(info, "info")
    return <BookingOverview />;
};

export default Dashboard;

Dashboard.getLayout = function pageLayout(page) {
    return (
        <>
            {page}
        </>
    )
}