import { Component } from "react";

export class React11 extends Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    };

    static getDerivedStateFromError = (error) => {
        return { hasError: true, error };
    };

    componentDidCatch = (error, info) => console.error("Error caught:", error, info);

    render() {
        if (this.state.hasError) {
            return <p className="card-text"><p>Something went wrong.</p></p>
        };
        return (
            <>
                <h5 className="card-title">This is 11th Question</h5>
                {this.props.children}
            </>
        );
    };
};

export default React11;