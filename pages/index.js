import Category from "../components/category/Category";
import Banner from "../components/Header/Banner";

export default function Home() {
  return (
    <div className="dark:bg-slate-900">
      <Banner />
      <Category />
    </div>

  )
}