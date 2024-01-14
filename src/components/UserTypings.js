import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { useState } from "react";

const UserTypings = () => {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div>
      <div className="text-2xl text-slate-200">
        <SyntaxHighlighter
          useInlineStyles={false}
          lineProps={true}
          customStyle={{ textAlign: "left" }}
        >
        </SyntaxHighlighter>
        <textarea
            rows="10" // Adjust the number of rows as needed
            cols="50" // Adjust the number of columns as needed
            value={userInput}
            onChange={handleInputChange}
            placeholder="function defer(func, ...args)"
            className="resize-none w-2/3 h-96"
          />
      </div>
    </div>
  );
};

export default UserTypings;
