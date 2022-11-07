import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import bcrypt from 'bcryptjs';
import axios from 'axios';
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { decode } from "jsonwebtoken";

export const getBgBanner = (url) => {
    return {
        backgroundImage: `url(${url.src})`,
        width: "100%",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: "no-repeat",
        objectFit: 'cover',

    }
}

export const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export const bgLightStyle = {
    backgroundColor: "rgb(255, 255, 255)",
    backgroundImage: "radial-gradient(at 100% 0%, rgb(252, 231, 243) 0, transparent 60%), radial-gradient(at 0% 100%, rgb(203, 213, 225) 0, transparent 60%)",
    color: "#0f182a",
}
export const bgDarkStyle = {
    backgroundColor: "rgb(15, 24, 42)",
    backgroundImage: "radial-gradient(at 100% 0%, rgb(20, 46, 89) 0, transparent 60%), radial-gradient(at 0% 100%, rgb(20, 46, 89) 0, transparent 60%)",
    color: "#ffffff",
};

export const CheckTheme = () => {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return currentTheme;
}


export const BookingMenus = [
    { name: "Booking Overview", url: "/dashboard/bookings", avatar: <i className="text-primary fa-solid fa-eye"></i> },
    { name: "Pending Bookings", url: "/dashboard/bookings/pending", avatar: <i className="text-primary fa-solid fa-receipt"></i> },
    { name: "Completed Bookings", url: "/dashboard/bookings/completed", avatar: <i className="text-primary fa-solid fa-circle-check"></i> },
    { name: "Cancel Bookings", url: "/dashboard/bookings/cancel", avatar: <i className="text-primary fa-solid fa-rectangle-xmark"></i> },
    { name: "Revenue", url: "/dashboard/bookings/revenue", avatar: <i className="text-primary fa-solid fa-sack-dollar"></i> },
]

export const UserMenus = [
    { name: "Users Overview", url: "/dashboard/users", avatar: <i className="text-primary fa-solid fa-eye"></i> },

    { name: "All Users", url: "/dashboard/users/all", avatar: <i class="fa-solid fa-user-group"></i> },

    { name: "Our Team", url: "/dashboard/users/team", avatar: <i class="fa-solid fa-people-group"></i> },

    { name: "Admins", url: "/dashboard/users/admins", avatar: <i class="fa-solid fa-user-gear"></i> },

    { name: "Add Users", url: "/dashboard/users/add", avatar: <i class="fa-solid fa-user-plus"></i> },
]

export const encryptPassword = (pass) => {
    bcrypt.hashSync(pass, 12, (err, hash) => {
        if (!err) {
            console.log(hash)
            return hash;
        } else {
            console.log(err)
        }
    });

    /* try {
        const makeHash = await bcrypt.hash(pass, 12);
        const hashPass = await makeHash.data
        return hashPass;
    } catch (err) {
        console.log(err)
    } */
}

export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
    headers: Cookies.get("token") ? Cookies.get("token") : null,
})


export const decodeToken = () => {
    const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
    const decoded = jwt_decode(user.token);
    delete decoded.token;
    const date = Math.floor(new Date() / 1000)
    // console.log(date, decoded.exp)
    if (date > decoded?.exp) {
        Cookies.remove("user")
        return null;
    }
    return decoded;
}