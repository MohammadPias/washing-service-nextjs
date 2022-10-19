import About from "../components/about/About";
import Category from "../components/category/Category";
import CompletedWork from "../components/completedWork/CompletedWork";
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
    </div>

  )
}