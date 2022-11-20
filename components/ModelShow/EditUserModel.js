import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { modalClose } from '../../features/userSlice';
import userImage from "../../images/pin.png"
const EditUserModel = ({ user }) => {

    const dispatch = useDispatch()

    return (
        <div className='w-screen min-h-screen fixed z-50 overflow-y-auto bg-zinc-200 opacity-95 flex justify-center items-center'>
            <div className='min-h-min min-w-min bg-white rounded-lg p-3 border-4 border-red-300 text-md font-bold'>

                <div
                    onClick={() => dispatch(modalClose())}
                    className='h-7 w-7 cursor-pointer ml-auto rounded-full border border-primary flex justify-center items-center'>
                    X
                </div>

                {/* Title=============== */}

                <div className='px-10'>
                    <h3 className='text-center font-bold text-primary'>Set User Role</h3>
                </div>

                {/* Body=============== */}
                <div className='px-5 mt-3'>
                    <div className='h-16 w-16 rounded-full mx-auto'>
                        <Image src={user?.avatar ? user?.avatar : userImage} alt='User Image' />
                    </div>

                    <div className="form-control w-full max-w-xs mt-3">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" defaultValue={user?.name} readOnly className="input input-bordered w-full max-w-xs" />

                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text" defaultValue={user?.email} readOnly className="input input-bordered w-full max-w-xs" />

                        <label className="label">
                            <span className="label-text">Role</span>
                        </label>
                        <select className="select select-bordered">
                            <option disabled selected>SelectRole</option>
                            <option>User</option>
                            <option>Admin</option>
                            <option>Team-Member</option>
                        </select>

                        <button className='btn btn-primary my-6'>Save Change</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditUserModel;