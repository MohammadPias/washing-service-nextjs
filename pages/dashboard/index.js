import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import BookingOverview from './bookings';


const Dashboard = () => {
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