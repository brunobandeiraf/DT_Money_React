# DT_Money_React

## Create Project
npm create vite@latest

## Install Dependences
npm i

## Styled Components
- npm i styled-components
- npm i @types/styled-components -D

## Icons Library 
- npm i phosphor-react

## Accessibility Library and Styled
- https://www.radix-ui.com/
- Conteúdo primitivo, sem estilização
- npm install @radix-ui/react-dialog
- npm install @radix-ui/react-radio-group

## Json Server Simulate
- https://github.com/typicode/json-server
- npm i json-server -D

### Runner Json Server
- npx json-server server.json -p 3333
- npx json-server server.json -p 3333 -w
- npx json-server server.json -p 3333 -w -d 500
- npm run dev:server

## Observar Porta
- lsof -i :3333

## DAta atual no navegador em js
new Date().toISOString()