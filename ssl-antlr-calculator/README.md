ACLARACIONES RESPECTO A LA CARPETA: el nombre de la carpeta es el mismo que traia por defecto que traía la carpeta que modifiqué para ajustar a mi gramática, eso debido a que algunos de mis compañeros reportaron errores a la hora de subir sus versiones del analizador, por lo que preferi no arriesgarme (aparentemente es un error de Java). Vale la pena tener en cuenta ese detalle si los docentes consideran relevante los nombres de las carpetas en posteriores instancias .


REPSECTO AL ANALIZADOR: Habiendo dado por sentadas las pautas para la instalación y configuración de los programas necesarios para la actividad, las cuales se describen en el documento "Guía de Estudio Construcción de Analizador con ANTLR4 + JavaScript" (adjunto en la carpeta), se resume a continuación los programas usados:
	-VisualStudioCode
	-GIT (versión 2.49.0, para Windows 10 de 64 bits)
	-Java JDK versión 11
	-Extensión de ANTLR4 para Visual Studio Code
Para evitar posibles errores se recomienda no modificar directamente los archivos generados automáticamente (son los hallados en la carpeta \generated). En su lugar, es preferible modificar los archivos hallados en la carpeta principal \ssl-antlr-calculator, entre los que se incluyen versiones hijas del visitor y el listener, configuradas para éste proyecto.

Una aclaración imortante es que hay que tener cuidado a la hora de definir los atributos de los objetos Usuarios; dado que, según la forma en que está construido el analizador, toma como correcto el usar otras palabras para definir su nombre, edad y estado de actividad (por ejemplo; si en lugar de escribir <edad=23;> se escribe <ead=23;>, no se considera un error).
