// all code snippets are form lodash/lodash link: https://github.com/lodash/lodash/tree/2da024c3b4f9947a48517639de7560457cd4ec6c

const codeSnippets = [
  {
    name: "defer.js",
    code: `
      function defer(func, ...args) {
        if (typeof func !== 'function') {
          throw new TypeError('Expected a function')
        }
        return setTimeout(func, 1, ...args)
      }`,
    language: "javascript",
  },
  {
    name: "takeRight.js",
    code: `
      function takeRight(array, n=1) {
        const length = array == null ? 0 : array.length
        if (!length) {
          return []
        }
        n = length - n
        return slice(array, n < 0 ? 0 : n, length)
        }
      }`,
    language: "javascript",
  },
  {
    name: "attempt.js",
    code: `
      function attempt(func, ...args) {
        try {
          return func(...args)
        } catch (e) {
          return isError(e) ? e : new Error(e)
        }
      }`,
    language: "javascript",
  }
];

export default codeSnippets;
