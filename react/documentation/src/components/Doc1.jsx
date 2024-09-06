export default function Doc1() {
  const user = {
    name: "XYZ Thaxaina",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];
  const listItems = products.map((product) => {
    return <li key={product.id}>{product.title}</li>;
  });
  // List rendering with boolean values
  const students = [
    { name: "Abishek", id: 1, paidFee: true },
    { name: "Abinash", id: 2, paidFee: false },
    { name: "Bhagawati", id: 3, paidFee: true },
    { name: "Ram", id: 4, paidFee: false },
  ];
  const single = students.map((student) => {
    return (
      <li
        key={student.id}
        style={{
          color: student.paidFee ? "green" : "red",
        }}
      >
        {student.name}
      </li>
    );
  });
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
      <hr />
      {/* <div>{isLoggedIn ? <Home /> : <Signup />}</div> */}
      <div>
        <ul>{listItems}</ul>
      </div>
      <hr />
      {/* Paid fee -> green, no paid -> red */}
      <div>
        <ol>{single}</ol>
      </div>
    </>
  );
}
