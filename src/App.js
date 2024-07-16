import CardList from "./CardList";
import { robots } from "./robots";

const App = () => {
  return (
    <>
      <h1>The Robots</h1>
      <CardList robots={robots} />
    </>
  );
}

export default App;