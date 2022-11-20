import { useState } from "react";
import { useDispatch } from "react-redux";
import { modalOpen } from "../../features/userSlice";

const Table = ({ users }) => {
    const [menu, setMenu] = useState("");
    const [showMenu, setShowMenu] = useState(false)

    const dispatch = useDispatch()

    const userEmails = users?.map(user => user.email)

    let userEmail = ""
    const handleMenuOpen = (user) => {
        for (const email of userEmails) {
            if (email === user?.email) {
                userEmail = email;
                setShowMenu((prev) => !prev)
                console.log(email, user.email)
            }
        }
        /* const { email } = user;
        setMenu(email)

        if (user.email === menu) {
            setShowMenu((prev) => !prev)
        } */
    }


    if (users?.length <= 0) return (
        <div className="h-14  px-3 bg-slate-100 dark:bg-secondary rounded-md flex items-center justify-center shadow-sm border border-slate-200 dark:border-slate-700 "><h3>Users not found!</h3></div>
    );
    return (
        <div className="w-full mt-3">

            {/* Put this part before </body> tag */}
            <table className="table w-full table-normal">
                <thead>
                    <tr>
                        <th className="bg-white dark:bg-secondary dark:border-slate-600">Name</th>
                        <th className="bg-white dark:bg-secondary dark:border-slate-600">Email</th>
                        <th className="bg-white dark:bg-secondary dark:border-slate-600">Role</th>
                        <th className="bg-white dark:bg-secondary dark:border-slate-600">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {users &&
                        users?.map(user => (
                            <tr key={user._id} className="border-none">
                                <td className="bg-white dark:bg-secondary-light dark:border-slate-600">
                                    <div className="flex items-center space-x-3 ">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-semibold">{user.name}</div>
                                            {/* <div className="text-sm opacity-50">United States</div> */}
                                        </div>
                                    </div>
                                </td>
                                <td className="bg-white dark:bg-secondary-light dark:border-slate-600">
                                    {user.email}
                                </td>
                                <td className="bg-white dark:bg-secondary-light dark:border-slate-600">
                                    <span className="badge badge-ghost bg-primary border-none text-white font-medium badge-sm">{user.role}</span>
                                </td>
                                <th className="relative bg-white dark:bg-secondary-light dark:border-slate-600 text-center">

                                    {/* <div className="w-8 h-8 rounded-full hover:bg-red-100">
                                        </div> */}
                                    <i
                                        className="fa-solid fa-ellipsis-vertical cursor-pointer"
                                        onClick={() => {
                                            handleMenuOpen(user)
                                        }}
                                    ></i>
                                    <ul className={`absolute bg-white shadow-xl text-secondary dark:text-white dark:bg-secondary  menu menu-compact lg:menu-normal  w-56 p-2 rounded-lg ${menu === user?.email && showMenu ? "top-1/2 right-1/2" : "hidden"} font-normal z-40`}>
                                        <li onClick={() => dispatch(modalOpen(user))} >
                                            <label>Edit</label>
                                        </li>
                                        {console.log(userEmail, user.email, "from")}
                                        <li><label>Delete</label></li>
                                    </ul>
                                </th>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;