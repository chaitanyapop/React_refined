import React from "react";

interface ErrorBoundaryState {
  errorFlag: boolean;
}

export default class ErrorBoundary extends React.Component<
  any,
  ErrorBoundaryState
> {
  constructor(props: any) {
    console.log("these are props", props);
    super(props);
    this.state = {
      errorFlag: false,
    };
  }
  static getDerivedStateFromError(error: any) {
    return { errorFlag: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(this.state.errorFlag);
    console.error("the error is", error);
  }

  render() {
    if (this.state.errorFlag) {
      // Add your error UI here
      return <div>Something went wrong.</div>;
    }
    // Add your normal rendering logic here
    return this.props.children;
  }
}
