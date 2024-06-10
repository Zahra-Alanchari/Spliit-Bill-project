import Button from "./btn";

export default function Person({ data, onSelect, selectedFriend }) {
  const isSelected = selectedFriend?.id === data.id;
  return (
    <div className={isSelected ? " list selected" : "list"}>
      <div>
        <img className="pic" src={data.image} alt={data.name} />
      </div>
      <div className="name">
        <h3>{data.name}</h3>
        <p className={data.balance < 0 ? `red` : `green`}>
          {data.balance < 0
            ? `you owe ${data.name} ${Math.abs(data.balance)}$`
            : `${data.name} owes you ${data.balance}$`}
        </p>
      </div>
      <Button onClick={() => onSelect(data)}>
        {isSelected ? " close" : "select"}
      </Button>
    </div>
  );
}
