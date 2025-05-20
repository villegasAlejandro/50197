const antlr4 = require('antlr4');
const fs = require('fs');

// Importar clases generadas por ANTLR
const UsuariosLexer = require('./UsuariosLexer').UsuariosLexer;
const UsuariosParser = require('./UsuariosParser').UsuariosParser;
const UsuariosListener = require('./UsuariosListener').UsuariosListener;

const input = fs.readFileSync('input.txt', 'utf-8');

// ========== 1. Análisis Léxico y Sintáctico con manejo de errores ==========
const chars = new antlr4.InputStream(input);
const lexer = new UsuariosLexer(chars);

lexer.removeErrorListeners();
lexer.addErrorListener({
  syntaxError(recognizer, offendingSymbol, line, column, msg) {
    console.error(`Error léxico en línea ${line}, columna ${column}: ${msg}`);
  }
});

const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new UsuariosParser(tokens);

parser.removeErrorListeners();
parser.addErrorListener({
  syntaxError(recognizer, offendingSymbol, line, column, msg) {
    console.error(`Error sintáctico en línea ${line}, columna ${column}: ${msg}`);
  }
});
parser.buildParseTree = true;
const tree = parser.programa();

console.log('\n Análisis léxico y sintáctico completado');

// ========== 2. Tabla de lexemas y tokens ==========
tokens.fill();
console.log('\n Tabla de Lexemas y Tokens:');
console.table(tokens.tokens.map(token => ({
  Lexema: token.text,
  Token: UsuariosLexer.symbolicNames[token.type],
  Línea: token.line
})).filter(row => row.Token !== 'EOF'));

// ========== 3. Árbol de análisis sintáctico ==========
console.log('\n Árbol de análisis sintáctico (concreto):');
console.log(tree.toStringTree(parser.ruleNames));

// ========== 4. Interpretación / Traducción a JavaScript ==========
class JSInterpreter extends UsuariosListener {
  constructor() {
    super();
    this.outputJS = '';
    this.currentUser = '';
  }

  enterUsuario(ctx) {
    this.currentUser = ctx.identificador().getText();
    this.outputJS += `const ${this.currentUser} = {\n`;
  }

  exitUsuario(ctx) {
    this.outputJS += `};\n\n`;
  }

  enterAtributo(ctx) {
    const key = ctx.identificador().getText();
    const valCtx = ctx.valor();
    let value = '';

    if (valCtx.numero()) {
      value = valCtx.numero().getText();
    } else if (valCtx.cadena()) {
      value = valCtx.cadena().getText(); // ya incluye comillas
    } else if (valCtx.booleano()) {
      value = valCtx.booleano().getText() === 'verdadero' ? 'true' : 'false';
    }

    this.outputJS += `  ${key}: ${value},\n`;
  }
}

const interpreter = new JSInterpreter();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(interpreter, tree);

console.log('\n Código JavaScript generado:');
console.log(interpreter.outputJS);

console.log('\n Ejecutando el código:\n');
eval(interpreter.outputJS);
console.log('Contenido del objeto interpretado:', eval(interpreter.currentUser));
