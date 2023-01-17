##
### HABITS
##

### Pré-Requisitos.

React.js, React Native, Node.js, JavaScript, TypeScript, Tailwind CSS.

**Node.js**
- Site: https://nodejs.org/en/

**React.js**
- Site: https://pt-br.reactjs.org/

**Next.js**
- Site: https://nextjs.org/

**TypeScript**
- Site: https://www.typescriptlang.org/

**React Native**
- Site: https://reactnative.dev/

**Tailwind CSS**
- Site: https://tailwindcss.com/


### Ferramentas do programador.

**Visual Studio Code**
- Site: https://code.visualstudio.com/download
- Extensão
    - `Prisma`
    - `PostCSS Language Support`
    - `Tailwind CSS IntelliSense`

**Expo**
- Site: https://expo.dev/

**Expo Go**
- Site: https://expo.dev/client

**Android Studio**
- Site: https://developer.android.com/studio

**Postman**
- Site: https://www.postman.com/downloads/

**Insomnia**
- Site: https://insomnia.rest/download

**Hoppscotch**
- Site: https://hoppscotch.io/



### Figma
- Figma do projeto: https://www.figma.com/community/file/1195326661124171197


##
### BACK-END
##


- Criação do projeto
- Setup TypeScript
- Criando a primeira rota
- Configurando o Prisma
- Configurando o CORS

**Criação do projeto**

- Criar a pasta `server`
- Acessar a pasta `server`

**Fundamentos do NodeJS**

- Node Permite Executar JavaScript Fora do Ambiente do Browser
```js
/*soma.js*/
//Exemplo Node(V8)
var a = 1;
var b = 2;

console.log(a + b);
```

- Executa o codigo no terminal
```
node soma.js
```

**Criando o projeto com node.js**

- Comando para criar o arquivo `package.json`
```
npm init -y
```

**Fastify**

- Framework fastify(`node_modules` `packahe-lock.json`) Dependências
```
npm install fastify
```

- Criar a pasta `src` na raiz do projeto
- Criar o arquivo `server.ts` dentro da pasta `src`
- TypeScript -> JavaScript
- TypeScript -> Tipagem estática

- Instalando o TypeScript, como um depêndencia de Desenvolvimento
```
npm install typescript -D
```

- Criar o arquivo `tsconfig.json`
```
npx tsc --init
```

- Alterar trecho de código no arquivo `tsconfig.json`
```json
    /* Language and Environment */
    "target": "es2020",   
```

- tsx 
```
npm i tsx -D
```
    - Executar
        npx tsx src/server.ts
    
- Alterar trecho de código no arquivo `package.json`
```json
  "scripts": {
    "dev": "tsx src/server.ts"
  },
```








##
### FRONT-END
##


- Fundamentos do React
- Criação do projeto
- Componentes e propriedades
- Configurando o Tailwind CSS


##
### MOBILE
##

- Expo
- Expo GO








