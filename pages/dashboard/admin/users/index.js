import React, { useState } from 'react';
import ContentLayout from '../../../../components/layout/ContentLayout';
import DashboardLayout from "../../../../components/layout/DashboardLayout";
import Table from '../../../../components/table/Table';
import db from "../../../../utils/db"
import User from '../../../../models/UserModel';
import FilterHeader from '../../../../components/header/FilterHeader';
import { GetUsersMenu, instance } from '../../../../utils/helper';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AllUsers = ({ data }) => {
    const [filterUser, setFilterUser] = useState("All User")
    const [perPageUser, setPerPageUser] = useState(5)
    const [page, setPage] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [role, setRole] = useState("");

    const { users, usersCount } = data;
    const { info } = useSelector(state => state.user)


    const totalPage = Math.ceil(parseInt(usersCount) / parseInt(perPageUser))
    const isDisablePrev = page <= 0 ? true : false;
    const isDisableNext = page >= totalPage - 1 ? true : false;
    const router = useRouter();


    useEffect(() => {
        if (!info) {
            router?.push("/signin?redirect=/dashboard/admin/users")
        }
    }, [])

    return (
        <DashboardLayout
            title="User"
            page={page}
            perPageUser={perPageUser}
            setSearchText={setSearchText}
        >
            <ContentLayout
                items={GetUsersMenu(page, perPageUser)} >
                <div>
                    <div className='flex  justify-between'>
                        <FilterHeader
                            setPage={setPage}
                            page={page}
                            title={filterUser}
                            setFilterUser={setFilterUser}
                            setPerPageUser={setPerPageUser}
                            perPageUser={perPageUser}
                            searchText={searchText}
                            role={role}
                            setRole={setRole}
                        />
                        <div>
                            {
                                !isDisablePrev &&
                                <Link href={`/dashboard/admin/users?page=${page - 1}&limit=${perPageUser}&role=${role}&search=${searchText}`}>
                                    <a >
                                        <button
                                            disabled={isDisablePrev}
                                            onClick={() => setPage(prev => prev - 1)}
                                            className="btn h-14 bg-slate-100 dark:bg-secondary text-secondary dark:text-white hover:text-white shadow-sm">«</button>
                                    </a>
                                </Link>
                            }

                            <button className="btn h-14 bg-slate-100 dark:bg-secondary text-secondary dark:text-white hover:text-white shadow-sm">Page {page + 1}</button>


                            {
                                !isDisableNext &&
                                <Link href={`/dashboard/admin/users?page=${page + 1}&limit=${perPageUser}&role=${role}&search=${searchText}`}>
                                    <a >
                                        <button
                                            disabled={isDisableNext}
                                            onClick={() => setPage(prev => prev + 1)}
                                            className="btn h-14 bg-slate-100 dark:bg-secondary text-secondary dark:text-white hover:text-white shadow-sm">»</button>
                                    </a>
                                </Link>
                            }
                        </div>
                    </div>
                    <div className='my-6 pb-24'>
                        <Table
                            users={users}
                            usersCount={usersCount}
                        />
                    </div>
                </div>
            </ContentLayout>
        </DashboardLayout>
    );
};

export async function getServerSideProps(context) {
    const { page, limit, role, search } = context.query;
    const pageInt = parseInt(page)
    const limitInt = parseInt(limit)


    await db.connect();
    let users = null;
    const usersCount = await User.countDocuments();

    if (role) {
        users = await User.find({ role: role }).skip(pageInt * limitInt).limit(limitInt).lean()
    } else if (search) {
        let regex = new RegExp(search, 'i');

        users = await User.find({ $and: [{ $or: [{ name: regex }, { email: regex }] }] }).skip(pageInt * limitInt).limit(limitInt).lean()
    }
    else {
        users = await User.find({}).skip(pageInt * limitInt).limit(limitInt).lean()
    }
    await db.disconnect();
    console.log(search, 'from server')

    return {
        props: {
            data: {
                users: users.map(db.convertDocToObj) || null,  // users.map(db.convertDocToObj)
                usersCount,
            },
        }
    }
}

export default AllUsers;

AllUsers.getLayout = function pageLayout(page) {
    return (
        <>
            {page}
        </>
    )
}