import { Component } from 'react';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oppps. That is not good! Our super devs will work have to fix this error soon</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;