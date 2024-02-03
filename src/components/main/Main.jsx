import { useEffect, useRef, useState } from "react";
import List from "../list/List";
import Search from "../search/Search";
import "./main.css";
function Main() {
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState("");
  const [selct, setSelct] = useState("");
  const fetching = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCountry([...data]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (search) {
      fetching(`https://restcountries.com/v3.1/name/${search}`);
      return;
    } else if (selct) {
      if (selct === "all") {
        fetching("https://restcountries.com/v3.1/all");
        return;
      }
      fetching(`https://restcountries.com/v3.1/region/${selct}`);
      return;
    } else {
      fetching("https://restcountries.com/v3.1/all");
    }
  }, [search, selct]);
  return (
    <main className="site-main">
      <section className="site-main__hero hero">
        <div className="container">
          <div className="hero__wrap">
            <Search setSearch={setSearch} setSelct={setSelct} />
            <List country={country} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
