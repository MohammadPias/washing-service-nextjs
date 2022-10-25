import About from "../components/about/About";
import Category from "../components/category/Category";
import CompletedWork from "../components/completedWork/CompletedWork";
import Contact from "../components/contact/Contact";
import FeedBack from "../components/feedBack/FeedBack";
import Banner from "../components/Header/Banner";
import Layout from "../components/layout/Layout";
import Newsletter from "../components/newsletter/Newsletter";
import { bgDarkStyle, bgLightStyle } from "../helper/helper";

export default function Home() {
  const dark = false;
  return (
    <Layout>
      <div style={dark ? bgDarkStyle : bgLightStyle}>
        <Banner />
        <Category />
        <About />
        <CompletedWork />
        {/* <FeedBack /> */}
        <Newsletter />
        <Contact />
      </div>
    </Layout>

  )
}