function Hello(personDetails) {
  return (
    <div>
      <h1>
        Hello:: {personDetails.name}!{personDetails.emoji}
        {personDetails.message} <br /> {personDetails.seatNumbers}
      </h1>
    </div>
  );
}
export default Hello;
