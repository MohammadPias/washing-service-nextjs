import React from 'react';
import ContentLayout from '../../../components/layout/ContentLayout';
import DashboardLayout from "../../../components/layout/DashboardLayout";
import { UserMenus } from '../../../utils/helper';

const AllUsers = () => {
    return (
        <DashboardLayout title="User">
            <ContentLayout items={UserMenus}>
                <h3 className="text-center">All Users</h3>
            </ContentLayout>
        </DashboardLayout>
    );
};

export default AllUsers;

AllUsers.getLayout = function pageLayout(page) {
    return (
        <>
            {page}
        </>
    )
}