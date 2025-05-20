#!/bin/bash
# Generar parser y lexer desde Usuarios.g4
antlr4 -Dlanguage=JavaScript Usuarios.g4 -o parser
echo "Generado parser en carpeta /parser"