import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router} from "react-router-dom";


const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router >, rootElement);
