import CakeContainer from "./CakeContainer";
import Header from "./Header";
import Search from "./Search";
import {cakes} from "../data/cakesData";
import {useState} from 'react';

function App() {
  const [search, setSearch] = useState("");
  const [cakeList, setCakeList] = useState(cakes);

  const handleSearch = (e) => {
    // console.log(e.target.value)
    setSearch(e.target.value) // can't use search state value beacuse of asynchronous nature
    setCakeList(cakes.filter(cake => cake.flavor.includes(e.target.value)));
  }

  return (
    <div className="App">
      <Header bakery={"Flatiron-bakes"} slogan={"live love code bake repeat"}/>
      <Search search={search} handleSearch={handleSearch}/>
      <CakeContainer cakeList={cakeList}/>

    </div>
  );
}

export default App;
