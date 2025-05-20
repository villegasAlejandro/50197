const antrl4 = require("antlr4");
const fs = require("fs");

const UsuariosLexer = require("./parser/UsuariosLexer").UsuariosLexer;
const UsuariosParser = require("./parser/UsuariosParser").UsuariosParser;

const input = fs.readFileSync("input.txt", "utf8");
const chars = new antrl4.InputStream(input);
const lexer = new UsuariosLexer(chars);
const tokens = new antrl4.CommonTokenStream(lexer);
const parser = new UsuariosParser(tokens);

parser.buildParserTrees = true;
const tree = parser.programa();

class Visitor extends UsuariosParser.Visitor {
    visitPrograma(ctx){
        return ctx.usuario().map(U => this.visitPrograma(u)).join('\n');
    }

    visitUsuario(ctx) {
        const nombre = ctx.IDENTIFICADOR().getText();
        const atributos = ctx.atributo().map(a => this.visit(a)).join(',\n ');
        return `const ${nombre} = {\n ${atributos}\n};`;
    }

    visitValor(ctx){
        if (ctx.NUMERO()) return ctx.NUMERO().getText();
        if (ctx.CADENA()) return ctx.CADENA().getText();
        if (ctx.BOOLEANO()) return ctx.BOOLEANO().getText() === "verdadero"? "true" : "false";
    }
}
const visitor = new Visitor();
const result = visitor.visit(tree);

console.log("Código JavaScript generado:\n");
console.log(result);
eval(result);   // Ejecuta el código generado