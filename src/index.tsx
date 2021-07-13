import { render } from "react-dom";
import App from "./components/app/app";

const root = document.querySelector("#root");
const app = <App />

render(app, root)
