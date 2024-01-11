import { Light as SyntaxHighlighter } from "react-syntax-highlighter";

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
    <div className="bg-slate-800 p-4 rounded-2xl w-2/3 h-96 justify-center">
      <h2 className="bg-slate-800 text-xl italic text-slate-400 mb-5">
        {codeInput.name}
      </h2>
      <div className="bg-slate-800 text-2xl text-slate-200">
        <SyntaxHighlighter
          useInlineStyles={false}
          language={codeInput.language}
          className="bg-slate-800"
          lineProps={true}
          customStyle={{ textAlign: "left", background: "#1F2937" }}
        >
          {codeInput.code.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Code;
