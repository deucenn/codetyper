import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import UserTypings from "./UserTypings";

const codeInput = {
  name: "defer.js",
  code: `
    function defer(func, ...args) {
      if (typeof func !== 'function') {
        throw new TypeError('Expected a function')
      }
      return setTimeout(func, 1, ...args)
    }`,
  language: "javascript",
};

const Code = () => {
  return (
    <div className="p-4 rounded-2xl w-2/3 h-96 justify-center">
      <h2 className="text-xl italic text-slate-300 mb-5">{codeInput.name}</h2>
      <div className="text-2xl text-slate-400">
        <SyntaxHighlighter
          useInlineStyles={false}
          language={codeInput.language}
          lineProps={true}
          customStyle={{ textAlign: "left", position:"absolute", zIndex: 0 }}
        >
          {codeInput.code.trim()}
        </SyntaxHighlighter>
        <UserTypings className="absolute z-50"/>
      </div>
    </div>
  );
};

export default Code;
