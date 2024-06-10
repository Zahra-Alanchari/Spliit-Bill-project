import { useState } from "react";
import Button from "./btn";

export default function NewFriend({ onAddNewFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;
    const id = crypto.randomUUID;
    const newfriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddNewFriend(newfriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="add" onSubmit={handleSubmit}>
      <label>👭 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>🌄Image url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <Button>Add</Button>
    </form>
  );
}
