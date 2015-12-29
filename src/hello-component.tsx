import * as React from "react";
// import * as CSSModules from "react-css-modules";
var styles: any = require("./hello-component.scss");

interface Props {
    sayHelloTo: string;
}
class HelloComponent extends React.Component<Props, any> {
    render() {
        return <div className={styles.hello}>Hello, {this.props.sayHelloTo}!</div>;
    }
}

// Not able to get react-css-modules working with typescript https://github.com/Microsoft/TypeScript/issues/2784
//export default CSSModules(HelloComponent, styles)
export default HelloComponent;