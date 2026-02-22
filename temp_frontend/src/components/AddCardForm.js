import { useState } from "react";
import axios from "axios";

export default function AddCardForm({ onCardAdded }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/cards", { name, email })
      .then(res => {
        onCardAdded(); // signalisiert CardList zum Neuladen
        setName("");
        setEmail("");
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Neue Visitenkarte hinzufügen</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <button type="submit">Hinzufügen</button>
    </form>
  );
}
