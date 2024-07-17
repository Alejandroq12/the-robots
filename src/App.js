import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

const App = () => {
  return (
    <>
      <h1>The Robots</h1>
      <SearchBox />
      <CardList robots={robots} />
    </>
  );
}

export default App;