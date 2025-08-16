import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";

const ShowVocabulary = () => {
  const users = useLoaderData();
  return (
    <div className="text-center mx-auto">
      <h2 className="text-2xl font-serif ">Vocabulary List</h2>
      <ul className="grid grid-cols-2 gap-3 p-4">
        {users.map((user, index) => (
          <li key={index} className="border-2 border-gray-300 rounded-lg  transition duration-200 p-4 text-center ">
            <div className=" text-2xl w-full h-[45px] flex justify-around  text-inline  ">
              <h2>{user.word}</h2>
              <div>{user.meaning}</div>
            </div>
          </li>
        ))}
      </ul>
      <NavLink
        to={"/vocabulary"}
        className="text-2xl text-center hover:bg-blue-700 transition duration-300 w-[550px] font-serif bg-emerald-900 rounded-lg mt-4 h-auto"
      >
        Add Vocabulary
      </NavLink>
    </div>
  );
};

export default ShowVocabulary;
