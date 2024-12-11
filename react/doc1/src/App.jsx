const person = {
  name: "Hedy Lamarr",
  imageURL: "https://i.imgur.com/yXOvdOSs.jpg",
  height: 90,
  width: 90,
};

export default function App() {
  return (
    <>
      <h1>{person.name}</h1>
      <img
        src={person.imageURL}
        alt={person.name}
        style={{
          width: person.width,
          height: person.height,
        }}
      />
    </>
  );
}
