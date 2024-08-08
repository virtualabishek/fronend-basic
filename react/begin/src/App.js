// Rendering Lists

const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
]

export function RenderingList() {
  const listItems = people.map(people => <li>{people}</li>);
  return <ul>{listItems}</ul>;
}

export default function App() {
  return (
  <>
  <RenderingList />
  </>
  );
}