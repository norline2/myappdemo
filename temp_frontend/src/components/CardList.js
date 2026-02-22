import { useEffect, useState } from "react";
import axios from "axios";

export default function CardList({ refreshKey }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/cards")
      .then(res => setCards(res.data))
      .catch(err => console.error(err));
  }, [refreshKey]); // Refresh wenn eine neue Karte hinzugefügt wird

  return (
    <div>
      <h2>Alle Visitenkarten</h2>
      {cards.length === 0 ? <p>Keine Karten vorhanden</p> : (
        <ul>
          {cards.map(card => (
            <li key={card.id}>{card.name} - {card.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
