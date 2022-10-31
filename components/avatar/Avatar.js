import Link from 'next/link';
import React from 'react';
import SwitchTheme from '../../helper/switchTheme';

const Avatar = ({ menus }) => {
    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="m-1">
                <div className="avatar">
                    <div className="w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
            </label>
            <ul tabIndex={0} className="dropdown-content p-2 shadow-lg rounded-lg w-52 bg-white dark:bg-secondary-light">
                {
                    menus &&
                    menus.map(item =>
                        <li key={item.name} className={`avatar-link  hover:bg-red-50 dark:hover:bg-secondary rounded-md px-3 flex ${item.icon === "themeIcon" && 'justify-between'}`}>
                            <Link href={item.link}><a>{item.name}</a></Link>
                            {item.icon === "themeIcon" &&
                                <div><SwitchTheme /></div>

                            }
                            {console.log(item.icon)}
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default Avatar;