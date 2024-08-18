export default function Fruit({ name, price, emoji }) {
  return (
    <div>
      {emoji} {name} - ${price} {emoji}
    </div>
  );
}
