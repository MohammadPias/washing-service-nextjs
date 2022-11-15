import Link from "next/link";
import { useRouter } from "next/router";

const FilterHeader = ({
    setPage,
    page,
    title,
    setFilterUser,
    setPerPageUser,
    perPageUser,
    searchText,
    role,
    setRole,
}) => {
    const router = useRouter();

    const handleUserPerPage = (limit) => {
        setPerPageUser(limit)
        setPage(0)
        router.replace(`/dashboard/admin/users?page=${page || 0}&limit=${limit}&role=${role}&search=${searchText || ""}`)
    }

    const handleFilterRole = (role) => {
        setFilterUser(role);
        setPage(0)
        setPerPageUser(5)
        setRole(role)
        router.replace(`/dashboard/admin/users?page=${page || 0}&limit=${perPageUser || 5}&role=${role}&search=${searchText || ""}`)

    }

    return (
        <div className="h-14  px-3 bg-slate-100 dark:bg-secondary rounded-md flex items-center justify-between space-x-5 w-9/12 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="form-control  max-w-xs">
                <select

                    onChange={e => handleFilterRole(e.target.value)}
                    className=" py-1 px-3 focus:outline-none dark:bg-secondary-light rounded-md">
                    <option disabled selected hidden>Filter</option>
                    <option>Admin</option>
                    <option>Member</option>
                    <option>User</option>
                </select>
            </div>
            <h3>{title}</h3>
            <div className="form-control  max-w-xs">
                <select
                    onChange={e => handleUserPerPage(e.target.value)}
                    className=" py-1 px-3 focus:outline-none  dark:bg-secondary-light rounded-md">
                    <option disabled selected hidden>Per Page Users</option>
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                </select>
            </div>

        </div>
    );
};

export default FilterHeader;