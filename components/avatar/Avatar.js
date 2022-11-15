import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../features/userSlice';

const Avatar = ({ menus, url }) => {
    const dispatch = useDispatch();
    const { info } = useSelector(state => state.user)
    const router = useRouter()


    const handleClick = (name) => {
        if (name === "Log Out") {
            dispatch(signOut())
            router.push("/signin")
            Cookies.remove("user");
        }
    }
    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="m-1">
                <div className="avatar">
                    <div className="w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        {
                            !info?.avatar ?
                                <img src="https://placeimg.com/192/192/people" alt="avater" />
                                :
                                <img src={info?.avatar} alt="avater" />

                        }
                    </div>
                </div>
            </label>
            <ul tabIndex={0} className="dropdown-content p-2 shadow-lg rounded-lg w-52 bg-white dark:bg-secondary-light">
                {
                    menus &&
                    menus.map(item =>
                        <li

                            key={item.name}
                            className={`avatar-link  hover:bg-red-50 dark:hover:bg-secondary rounded-md px-3 flex ${item.icon === "themeIcon" && 'justify-between'}`}
                            onClick={() => handleClick(item.name)}
                        >

                            <Link href={item.link}><a>{item.name}</a></Link>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default Avatar;