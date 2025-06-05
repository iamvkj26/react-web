const withLoading = (WrappedComponent) => {
    return function WithLoadingComponent({ isLoading, ...props }) {
        if (isLoading) {
            return <p className="card-text">Loading...</p>;
        };
        return <WrappedComponent {...props} />;
    };
};

export default withLoading;