import CardList from "./components/CardList";
import AddCardForm from "./components/AddCardForm";
import { useState } from "react";

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div style={{ margin: "20px" }}>
      <h1>Visitenkarten App</h1>
      <AddCardForm onCardAdded={() => setRefreshKey(old => old + 1)} />
      <CardList refreshKey={refreshKey} />
    </div>
  );
}

export default App;
