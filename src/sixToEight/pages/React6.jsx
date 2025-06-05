import { Component } from "react";

export class React6 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    };

    increment = () => this.setState({ count: this.state.count + 1 });
    decrement = () => this.setState({ count: this.state.count - 1 });

    render() {
        return (
            <>
                <h5 className="card-title">This is 6th Question</h5>
                <p className="card-text">Count: {this.state.count}</p>
                <button type="button" className="btn btn-outline-light m-2" onClick={this.increment}>Increment</button>
                <button type="button" className="btn btn-outline-light m-2" onClick={this.decrement}>Decrement</button>
                <hr />
            </>
        );
    };
};

export default React6;