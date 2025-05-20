// Generated from c:/Users/hanab/ssl-antlr-calculator/Usuarios.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import UsuariosListener from './UsuariosListener.js';
import UsuariosVisitor from './UsuariosVisitor.js';

const serializedATN = [4,1,12,35,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,5,0,
10,8,0,10,0,12,0,13,9,0,1,0,1,0,1,1,1,1,1,1,1,1,5,1,21,8,1,10,1,12,1,24,
9,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,0,0,4,0,2,4,6,0,1,1,0,6,8,32,
0,11,1,0,0,0,2,16,1,0,0,0,4,27,1,0,0,0,6,32,1,0,0,0,8,10,3,2,1,0,9,8,1,0,
0,0,10,13,1,0,0,0,11,9,1,0,0,0,11,12,1,0,0,0,12,14,1,0,0,0,13,11,1,0,0,0,
14,15,5,0,0,1,15,1,1,0,0,0,16,17,5,1,0,0,17,18,5,9,0,0,18,22,5,2,0,0,19,
21,3,4,2,0,20,19,1,0,0,0,21,24,1,0,0,0,22,20,1,0,0,0,22,23,1,0,0,0,23,25,
1,0,0,0,24,22,1,0,0,0,25,26,5,3,0,0,26,3,1,0,0,0,27,28,5,9,0,0,28,29,5,4,
0,0,29,30,3,6,3,0,30,31,5,5,0,0,31,5,1,0,0,0,32,33,7,0,0,0,33,7,1,0,0,0,
2,11,22];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class UsuariosParser extends antlr4.Parser {

    static grammarFileName = "Usuarios.g4";
    static literalNames = [ null, "'usuario'", "'{'", "'}'", "'='", "';'" ];
    static symbolicNames = [ null, null, null, null, null, null, "NUMERO", 
                             "CADENA", "BOOLEANO", "IDENTIFICADOR", "CARACTER", 
                             "WS", "ERROR" ];
    static ruleNames = [ "programa", "usuario", "atributo", "valor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = UsuariosParser.ruleNames;
        this.literalNames = UsuariosParser.literalNames;
        this.symbolicNames = UsuariosParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, UsuariosParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 8;
	            this.usuario();
	            this.state = 13;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 14;
	        this.match(UsuariosParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	usuario() {
	    let localctx = new UsuarioContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, UsuariosParser.RULE_usuario);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.match(UsuariosParser.T__0);
	        this.state = 17;
	        this.match(UsuariosParser.IDENTIFICADOR);
	        this.state = 18;
	        this.match(UsuariosParser.T__1);
	        this.state = 22;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 19;
	            this.atributo();
	            this.state = 24;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 25;
	        this.match(UsuariosParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atributo() {
	    let localctx = new AtributoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, UsuariosParser.RULE_atributo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.match(UsuariosParser.IDENTIFICADOR);
	        this.state = 28;
	        this.match(UsuariosParser.T__3);
	        this.state = 29;
	        this.valor();
	        this.state = 30;
	        this.match(UsuariosParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, UsuariosParser.RULE_valor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 448) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

UsuariosParser.EOF = antlr4.Token.EOF;
UsuariosParser.T__0 = 1;
UsuariosParser.T__1 = 2;
UsuariosParser.T__2 = 3;
UsuariosParser.T__3 = 4;
UsuariosParser.T__4 = 5;
UsuariosParser.NUMERO = 6;
UsuariosParser.CADENA = 7;
UsuariosParser.BOOLEANO = 8;
UsuariosParser.IDENTIFICADOR = 9;
UsuariosParser.CARACTER = 10;
UsuariosParser.WS = 11;
UsuariosParser.ERROR = 12;

UsuariosParser.RULE_programa = 0;
UsuariosParser.RULE_usuario = 1;
UsuariosParser.RULE_atributo = 2;
UsuariosParser.RULE_valor = 3;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UsuariosParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(UsuariosParser.EOF, 0);
	};

	usuario = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UsuarioContext);
	    } else {
	        return this.getTypedRuleContext(UsuarioContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof UsuariosListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UsuariosListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof UsuariosVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UsuarioContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UsuariosParser.RULE_usuario;
    }

	IDENTIFICADOR() {
	    return this.getToken(UsuariosParser.IDENTIFICADOR, 0);
	};

	atributo = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AtributoContext);
	    } else {
	        return this.getTypedRuleContext(AtributoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof UsuariosListener ) {
	        listener.enterUsuario(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UsuariosListener ) {
	        listener.exitUsuario(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof UsuariosVisitor ) {
	        return visitor.visitUsuario(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AtributoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UsuariosParser.RULE_atributo;
    }

	IDENTIFICADOR() {
	    return this.getToken(UsuariosParser.IDENTIFICADOR, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof UsuariosListener ) {
	        listener.enterAtributo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UsuariosListener ) {
	        listener.exitAtributo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof UsuariosVisitor ) {
	        return visitor.visitAtributo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UsuariosParser.RULE_valor;
    }

	NUMERO() {
	    return this.getToken(UsuariosParser.NUMERO, 0);
	};

	CADENA() {
	    return this.getToken(UsuariosParser.CADENA, 0);
	};

	BOOLEANO() {
	    return this.getToken(UsuariosParser.BOOLEANO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof UsuariosListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UsuariosListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof UsuariosVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




UsuariosParser.ProgramaContext = ProgramaContext; 
UsuariosParser.UsuarioContext = UsuarioContext; 
UsuariosParser.AtributoContext = AtributoContext; 
UsuariosParser.ValorContext = ValorContext; 
