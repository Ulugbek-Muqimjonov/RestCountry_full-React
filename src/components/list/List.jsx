import "./list.css"
import Card from '../card/Card';
function List({country}) {
  return (
    <ul className="hero__list"> 
       {country.map(item => <Card key={item.name.common}  name={item.name.common} flag={item.flags.svg}  population={item.population}  capital={item.capital} region={item.region} />)}
    </ul>
  )
}

export default List