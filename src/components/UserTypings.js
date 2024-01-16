import { useState } from "react";

const UserTypings = () => {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="flex-none">
      <div className="text-2xl text-slate-200">
        <textarea
          rows="10" // Adjust the number of rows as needed
          cols="100" // Adjust the number of columns as needed
          value={userInput}
          onChange={handleInputChange}
          placeholder=""
          className="resize-none w-full h-96 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default UserTypings;

