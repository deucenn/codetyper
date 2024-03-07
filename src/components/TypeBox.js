import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import UserTypings from "./UserTypings";
import codeSnippets from "./codeSnippets";

// const codeInput = {
//   name: "defer.js",
//   code: `
//     function defer(func, ...args) {
//       if (typeof func !== 'function') {
//         throw new TypeError('Expected a function')
//       }
//       return setTimeout(func, 1, ...args)
//     }`,
//   language: "javascript",
// };

const Code = () => {
  return (
    <div className="relative p-4 rounded-2xl w-2/3 h-96">
      <h2 className="text-xl italic text-slate-300 mb-5">
        {codeSnippets[0].name}
      </h2>
      <div className="text-2xl text-slate-100 relative">
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-white opacity-50">
          <UserTypings />
        </div>
        <SyntaxHighlighter
          useInlineStyles={false}
          language={codeSnippets[0].language}
          lineProps={true}
          customStyle={{ textAlign: "left", zIndex: 0 }}
        >
          {codeSnippets[1].code.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Code;
