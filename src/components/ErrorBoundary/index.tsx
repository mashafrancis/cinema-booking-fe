import * as React from 'react';

// components
import PageNotFound from '@components/PageNotFound';

// interfaces
import { ErrorBoundaryState } from '@components/ErrorBoundary/interfaces';

export class ErrorBoundary extends React.Component<ErrorBoundaryState> {
  state = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <PageNotFound />;
    }

    // when there's not an error, render children untouched
    return this.props.children;
  }
}

export default ErrorBoundary;
