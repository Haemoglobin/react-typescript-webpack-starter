import * as React from "react"; 

interface Props {
    sayHelloTo: string;
}
export default class HelloComponent extends React.Component<Props, any> {
    render() {
        return <div>Hello, {this.props.sayHelloTo}!</div>;
    }
} 