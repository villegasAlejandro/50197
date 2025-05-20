export async function getCustomListener() {
const listenerModule = await import('./generated/UsuariosListener.js');
const UsuariosListener = listenerModule.default;

  return class CustomUsuariosListener extends UsuariosListener {
    constructor() {
      super();
      this.usuarios = [];
      this.currentUser = null;
    }

    enterUsuario(ctx) {
      const nombre = ctx.IDENTIFICADOR().getText();
      this.currentUser = { nombre, atributos: {} };
    }

    exitUsuario(ctx) {
      this.usuarios.push(this.currentUser);
      this.currentUser = null;
    }

    exitAtributo(ctx) {
      const key = ctx.IDENTIFICADOR().getText();
      const valCtx = ctx.valor();
      let value;

      if (valCtx.NUMERO()) value = parseInt(valCtx.NUMERO().getText(), 10);
      else if (valCtx.CADENA()) value = valCtx.CADENA().getText().slice(1, -1);
      else if (valCtx.BOOLEANO()) value = valCtx.BOOLEANO().getText() === "verdadero";

      this.currentUser.atributos[key] = value;
    }
  };
}
