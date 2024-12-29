import React from "react";
import brotherImage from "../assets/brother.jpg";

export default function Fourth() {
  return (
    <main>
      <div className="bg-blue-200 rounded-lg p-6">
        <img
          src={brotherImage}
          alt="Hero"
          className="h-20 w-25 rounded-full mx-auto md:mx-0"
        />
        <div className="text-center md:text-left">
          <h2 className="text-lg">Abinash Neupane</h2>
          <p className="text-purple-500">Customer Support</p>
          <p className="text-gray-600">abinash@gmail.com</p>
          <p className="text-gray-600">9862681874</p>
        </div>
      </div>
    </main>
  );
}
