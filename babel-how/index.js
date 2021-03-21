// const babelParser = require("@babel/parser");
// // 对所有语言来说，读入的就是一个字符串
// const code = `let square = (n) => {
//   return n * n;
// }`;

// let ast = babelParser.parse(code);
// console.log(ast);

const babelParser = require("@babel/parser");
const generate = require("@babel/generator");
// 解析成ATS
const astA = babelParser.parse("var a = 1;");
const astB = babelParser.parse("var b = 2;");
// 根据规则操作节点，操作对象
const ast = {
  type: "Program",
  body: [].concat(astA.program.body, astB.program.body)
};
// 生成JS
const { code } = generate.default(ast);
console.log(code);