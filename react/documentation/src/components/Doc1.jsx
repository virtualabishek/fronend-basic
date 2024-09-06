export default function Doc1() {
  const user = {
    name: "XYZ Thaxaina",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };
  return (
    <>
      <button>I am a button </button>
      <hr />
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        alt={user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: "20px",
        }}
      />
    </>
  );
}
