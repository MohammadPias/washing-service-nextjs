import Head from "next/head";
import { useSelector } from "react-redux";
import { bgDarkStyle, bgLightStyle, CheckTheme } from '../../utils/helper';
import EditUserModel from "../ModelShow/EditUserModel";

const Layout = ({ title, description, children }) => {
    const { modal } = useSelector(state => state.user)
    const darkMode = CheckTheme();


    return (
        <div>
            <Head>
                <title>{title ? title + " - Pressure Washing Services" : "Washing Services"}</title>
                <meta name="description" content={description} />
                <link rel="shortcut icon" href="/favicon.svg" />
            </Head >
            <div style={darkMode === "dark" ? bgDarkStyle : bgLightStyle}>
                {
                    modal?.isModalOpen &&
                    <EditUserModel user={modal?.payload} />
                }
                {children}
            </div>
        </div>
    );
};

export default Layout;