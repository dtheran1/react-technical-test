# react-technical-test

Inicializando un proyecto de React desde de cero, sin empaquetador.

npm create vite@latest
prueba-tecnica
vanilla
js


cd prueba tecnica
npm install @vitejs/plugin-react -E  //Instalamos este plugin para poder crear el punto de entrada con la app 
// la -E es para instalar la version exacta

abrimos el proyecto en code 

Tenemos que instalar las dependencias de react y react dom
npm install react react-dom -E

y pasamos a configurar el vite
creamos un archivo vite.config.js
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})

luego vemos que nuestro primer archivo que esta cargando el html es el main.js
lo modificamos creando el punto de entrada de react

import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('app'))

root.render(
  <>
    <h1>Hola</h1>
  </>
)


!!! IMPORTANTE !!! 
al arrancar nuestra aplicacion veremos un problema que no puede renderizar el jsx que tenemos en en el render!

Es facil solucionarlo solo debemos cambiar el tipo de archivo main.js por main.jsx

y recuerda cambiarlo en el index.html y listo asi tendremos corriendo nuestra app


!!! otra cosa importante es instalarnos el linter podemos implementar el standard
npm install standard -D // -D dependencia de desarrollo
luego nos vamos al package y agregamos estas lineas en el json 
"eslintConfig": {
    "extends":"./node_modules/standard/eslintrc.json"
  }
}
