import Head from "next/head";
import { bgDarkStyle, bgLightStyle, CheckTheme } from '../../utils/helper';

const Layout = ({ title, description, children }) => {
    const darkMode = CheckTheme();


    return (
        <div>
            <Head>
                <title>{title ? title + " - Pressure Washing Services" : "Washing Services"}</title>
                <meta name="description" content={description} />
                <link rel="shortcut icon" href="/favicon.svg" />
            </Head >
            <div style={darkMode === "dark" ? bgDarkStyle : bgLightStyle}>
                {children}
            </div>
        </div>
    );
};

export default Layout;