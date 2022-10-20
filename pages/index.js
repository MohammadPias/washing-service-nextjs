import About from "../components/about/About";
import Category from "../components/category/Category";
import CompletedWork from "../components/completedWork/CompletedWork";
import Contact from "../components/contact/Contact";
import FeedBack from "../components/feedBack/FeedBack";
import Banner from "../components/Header/Banner";
import Newsletter from "../components/newsletter/Newsletter";

export default function Home() {
  return (
    <div className="dark:bg-slate-900">
      <Banner />
      <Category />
      <About />
      <CompletedWork />
      <Newsletter />
      <FeedBack />
      <Contact />
    </div>

  )
}