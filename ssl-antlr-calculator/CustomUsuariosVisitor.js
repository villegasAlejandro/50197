export async function getCustomVisitor() {
  const visitorModule = await import('./generated/UsuariosVisitor.js');
  const UsuariosVisitor = visitorModule.default; // ✔️ ACCESO CORRECTO A EXPORT DEFAULT

  return class CustomUsuariosVisitor extends UsuariosVisitor {
    visitPrograma(ctx) {
      return ctx.usuario().map(u => this.visit(u)).join("\n");
    }

    visitUsuario(ctx) {
      const nombre = ctx.IDENTIFICADOR().getText();
      const atributos = ctx.atributo().map(a => this.visit(a)).join(",\n  ");
      return `const ${nombre} = {\n  ${atributos}\n};`;
    }

    visitAtributo(ctx) {
      const key = ctx.IDENTIFICADOR().getText();
      const value = this.visit(ctx.valor());
      return `${key}: ${value}`;
    }

    visitValor(ctx) {
      if (ctx.NUMERO()) return ctx.NUMERO().getText();
      if (ctx.CADENA()) return ctx.CADENA().getText();
      if (ctx.BOOLEANO()) return ctx.BOOLEANO().getText() === "verdadero" ? "true" : "false";
    }
  };
}

