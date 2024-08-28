import React, { Component } from 'react';
import ErrorFallback from './components/ErrorFallback.jsx';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Unhandled error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <ErrorFallback error={{ message: "Что-то пошло не так!" }} resetErrorBoundary={() => this.setState({ hasError: false })} />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
