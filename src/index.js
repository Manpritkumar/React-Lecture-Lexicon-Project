import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
//import App from "./e2_function-component/App";
import NameList from "./ex4_props/NameList";
import App from "./ex4_props/App";
import Counter from "./ex5_state/Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));

const names = ["Manprit kumar", "Agam Athi", "Kanvi Athi"];

//root.render(<NameList listOfNames={names} />);
root.render(<Counter />);
