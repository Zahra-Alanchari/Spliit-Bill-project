import { useState } from "react";
import Button from "./btn";
import People from "./people";
import NewFriend from "./newfriend";
import Splitt from "./split";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [data, setData] = useState(initialFriends);

  const [showAddFriend, setShowAddFriend] = useState(false);

  const [select, setSelect] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(newData) {
    setData((data) => [...data, newData]);
    setShowAddFriend(false);
  }

  function handleSelect(data) {
    setSelect((cur) => (cur?.id === data.id ? null : data));
    setShowAddFriend(false);
  }

  function handleSplit(value) {
    console.log(value);
    setData((data) =>
      data.map((p) =>
        p.id === select.id ? { ...p, balance: p.balance + value } : p
      )
    );
    setSelect(null);
  }

  return (
    <div>
      <People data={data} onSelect={handleSelect} selectedFriend={select} />
      {showAddFriend && <NewFriend onAddNewFriend={handleAddFriend} />}
      <Button onClick={handleShowAddFriend}>
        {showAddFriend ? "close" : "Add new friend"}
      </Button>
      {select && (
        <Splitt key={select.id} select={select} onSplit={handleSplit} />
      )}
    </div>
  );
}
