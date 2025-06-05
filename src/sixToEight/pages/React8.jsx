import { Component } from "react";

class React8 extends Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 };
    };

    componentDidMount = () => console.log("componentDidMount");
    componentDidUpdate = () => console.log("componentDidUpdate");
    componentWillUnmount = () => console.log("componentWillUnmount");

    handleIncrement = () => this.setState((prevState) => ({ count: prevState.count + 1 }));

    render() {
        return (
            <>
                <h5 className="card-title">This is 8th Question</h5>
                <p className="card-text">Count: {this.state.count}</p>
                <button type="button" className="btn btn-outline-light" onClick={this.handleIncrement}>Increment</button>
            </>
        );
    };
};

export default React8;