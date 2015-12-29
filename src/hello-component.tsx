import * as React from "react";
import * as CSSModules from "react-css-modules";
var styles: any = require("./hello-component.css");

interface Props {
    sayHelloTo: string;
}
class HelloComponent extends React.Component<Props, any> {
    render() {
        return <div className={styles.hello}>Hello, {this.props.sayHelloTo}!</div>;
    }
}

//export default CSSModules(HelloComponent, styles)
export default HelloComponent;
