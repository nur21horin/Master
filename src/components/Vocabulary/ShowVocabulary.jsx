import React from "react";
import { useLoaderData } from "react-router-dom";

const ShowVocabulary = () => {
  const users = useLoaderData();
  return (
    <div>
      <h2>Vocabulary List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>{user.word}</strong> : {user.meaning}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowVocabulary;
