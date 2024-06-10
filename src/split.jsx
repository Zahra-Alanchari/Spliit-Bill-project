import { useState } from "react";
import Button from "./btn";

export default function Splitt({ select, onSplit }) {
  const [bill, setBill] = useState("");
  const [paid, setPaid] = useState("");
  const painByFriend = bill ? bill - paid : "";
  const [whoPaying, setWhoPaying] = useState("user");
  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paid) return;
    onSplit(whoPaying === "user" ? painByFriend : -painByFriend);
  }

  return (
    <div className="bill">
      <form onSubmit={handleSubmit}>
        <h2>SPLIT A BILL WITH {select.name}</h2>
        <label> Bill value</label>
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
        <br />
        <label>your expense</label>
        <input
          type="text"
          value={paid}
          onChange={(e) =>
            setPaid(
              Number(e.target.value) > bill ? paid : Number(e.target.value)
            )
          }
        />
        <br />
        <label>{select.name} expense</label>
        <input type="text" disabled value={painByFriend} />
        <br />
        <label>who is paying the bill?</label>
        <select
          value={whoPaying}
          onChange={(e) => setWhoPaying(e.target.value)}
        >
          <option value="user">you</option>
          <option value="friend">{select.name}</option>
        </select>
        <br />
        <Button>split bill</Button>
      </form>
    </div>
  );
}
