import Person from "./person";

export default function People({ data, onSelect, selectedFriend }) {
  return (
    <li>
      {data.map((p) => (
        <Person data={p} onSelect={onSelect} selectedFriend={selectedFriend} />
      ))}
    </li>
  );
}
