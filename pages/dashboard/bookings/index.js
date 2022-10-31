import React from 'react';
import DashboardLayout from "../../../components/layout/DashboardLayout"
import ContentLayout from "../../../components/layout/ContentLayout"
import DataChart from '../../../components/dataChart/DataChart';
import SimpleCard from '../../../components/card/SimpleCard';
import { BookingMenus } from '../../../helper/helper';


const items = [
    { name: "Total Booking", url: "", icon: "" },
    { name: "Today's Bookings", url: "", icon: "" },
    { name: "Today Completed", url: "", icon: "" },
];


const BookingOverview = () => {
    return (
        <DashboardLayout title="Booking Overview">
            <ContentLayout items={BookingMenus} >

                <div className='grid grid-cols-1 lg:grid-cols-12 gap-3'>
                    <div className='lg:col-span-8 bg-white dark:bg-secondary rounded-md p-3 shadow-sm border border-slate-200 dark:border-slate-700'>
                        <DataChart />
                    </div>
                    <div className="lg:col-span-4 flex flex-col justify-between">
                        {
                            items?.map(item =>
                                <SimpleCard
                                    key={item.name}
                                    item={item}
                                />
                            )
                        }
                    </div>
                </div>

            </ContentLayout>
        </DashboardLayout>
    );
};

export default BookingOverview;

BookingOverview.getLayout = function pageLayout(page) {
    return (<>{page}</>)
}