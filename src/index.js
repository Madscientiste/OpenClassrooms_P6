import "./styles/main.scss";

import './core/JSXParser'

import App from "./app";

const app = new App()
const root = document.getElementById('root')
app.mount(root)


if (module.hot) module.hot.accept()
