const antlr4 = require("antlr4");
const fs = require("fs");

const UsuariosLexer = require("./parser/UsuariosLexer").UsuariosLexer;
const input = fs.readFileSync("input.txt", "utf8");

const chars = new antlr4.InputStream(input);
const lexer = new UsuariosLexer(chars);

console.log(" Tabla de tokens:");
let token;
do {
  token = lexer.nextToken();
  if (token.type !== antlr4.Token.EOF) {
    console.log(`Token: ${lexer.symbolicNames[token.type]}, Lexema: '${token.text}'`);
  }
} while (token.type !== antlr4.Token.EOF);