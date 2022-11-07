import React from 'react';
import ContentLayout from '../../../components/layout/ContentLayout';
import DashboardLayout from "../../../components/layout/DashboardLayout";
import { UserMenus } from '../../../utils/helper';

const UserOverview = () => {
    return (
        <DashboardLayout title="User">
            <ContentLayout items={UserMenus}>
                <h1 className="text-center">User Overview</h1>
            </ContentLayout>
        </DashboardLayout>
    );
};

export default UserOverview;

UserOverview.getLayout = function pageLayout(page) {
    return (
        <>
            {page}
        </>
    )
}