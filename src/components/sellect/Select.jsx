import { regions } from "../../constants";

function Select({ setSelct }) {
  return (
    <select
      className="hero__countries-category"
      name="countries__category"
      selected
      defaultValue="Filter by Region"
      onChange={(evt) => setSelct(evt.target.value)}
    >
      <option className="hero__countries-category-opiton" disabled hidden>
        Filter by Region
      </option>
      <option className="hero__countries-category-opiton" value="all">
        All
      </option>

      {regions.map((item) => (
        <option
          key={item}
          className="hero__countries-category-opiton"
          value={item.toLowerCase()}
        >
          {item}
        </option>
      ))}
    </select>
  );
}

export default Select;
