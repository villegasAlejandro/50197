import UsuariosLexer from './generated/UsuariosLexer.js';
import UsuariosParser from './generated/UsuariosParser.js';
import { getCustomVisitor } from './CustomUsuariosVisitor.js';
import { getCustomListener } from './CustomUsuariosListener.js';
    const CustomVisitor = await getCustomVisitor();
    const visitor = new CustomVisitor();
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import readline from "readline";
import fs from "fs";


async function main() {
  let input;

  try {
    input = fs.readFileSync("input.txt", "utf8");
  } catch (err) {
    input = await leerCadena();
    console.log("Entrada recibida desde consola:\n" + input);
  }

  const inputStream = CharStreams.fromString(input);
  const lexer = new UsuariosLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new UsuariosParser(tokenStream);

  parser.buildParseTrees = true;
  const tree = parser.programa();

  if (parser._syntaxErrors > 0) {
    console.error("\n Se encontraron errores de sintaxis.");
    return;
  }

  console.log("\n Entrada válida.");
  const cadena_tree = tree.toStringTree(parser.ruleNames);
  console.log("Árbol de derivación:");
  console.log(cadena_tree);

  // Crear instancia del listener dinámicamente
  const CustomListener = await getCustomListener();
  const listener = new CustomListener();
  ParseTreeWalker.DEFAULT.walk(listener, tree);

  // Crear instancia del visitor dinámicamente
  const CustomVisitor = await getCustomVisitor();
  const visitor = new CustomVisitor();
  const result = visitor.visit(tree);

  console.log("\nResultado del Visitor:\n" + result);
}

function leerCadena() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question("Ingrese una cadena: ", (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}


main();
