export interface ErrorBoundaryState {
  hasError?: boolean;
  error?: any;
}

export interface ErrorBoundaryProps {
  fallback: any;
}
