import * as React from "react";
import { render } from "react-dom";

import HelloComponent from "./hello-component";

render(
    <HelloComponent sayHelloTo="World"/>,
    document.getElementById("app"));
    