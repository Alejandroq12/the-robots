import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

const App = () => {
  return (
    <div className="tc">
      <h1>The Robots</h1>
      <SearchBox />
      <CardList robots={robots} />
    </div>
  );
};

export default App;
