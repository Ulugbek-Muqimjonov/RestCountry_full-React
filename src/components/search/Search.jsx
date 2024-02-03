import Select from "../sellect/Select"
import "./search.css"
function Search({setSearch,setSelct}) {
  return (
    <div className="hero__serach-wrap">
      <input onChange={(evt) => setSearch(evt.target.value.trim())} className="hero__search-inp" type="search" name="serched_country" placeholder="Search for a country…" aria-label="enter your searched country name"/>
      <Select setSelct={setSelct}/>
    </div>
  )
}

export default Search