import React from "react";
// import imageLink from "../utils/util1";

export function getUrl(person, size = "s") {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

function Avatar({ person, size }) {
  return (
    <img src={getUrl(person)} alt={person.name} width={size} height={size} />
  );
}

const Third = () => {
  return (
    <div>
      <Avatar
        size={80}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
      />
      <Avatar
        size={50}
        person={{
          name: "Lin Lanying",
          imageId: "1bX5QH6",
        }}
      />
    </div>
  );
};

export default Third;
