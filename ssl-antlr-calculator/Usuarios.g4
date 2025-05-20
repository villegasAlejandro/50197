grammar Usuarios;

// Reglas del parser
programa     : usuario* EOF ;
usuario      : 'usuario' IDENTIFICADOR '{' atributo* '}' ;
atributo     : IDENTIFICADOR '=' valor ';' ;
valor        : NUMERO | CADENA | BOOLEANO ;

NUMERO       : [0-9]+ ;
CADENA       : '"' CARACTER* '"' ;
BOOLEANO     : 'verdadero' | 'falso' ;

IDENTIFICADOR : [a-zA-Z] [a-zA-Z0-9]* ;
CARACTER      : [a-zA-Z0-9] ;

// Reglas del lexer
WS                : [ \t\r\n]+ -> skip ;
ERROR             : . ;