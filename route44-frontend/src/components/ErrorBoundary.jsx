import { Component } from "react";

/**
 * ErrorBoundary Component
 * Catches errors in child components and displays fallback UI
 * Best practice for production React apps
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-surface px-6">
          <div className="max-w-md text-center">
            <span className="material-symbols-outlined text-error text-[64px] mb-6 block">
              error_outline
            </span>
            <h1 className="font-headline-lg text-headline-lg text-on-surface mb-4">
              Oops! Something went wrong
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              {this.state.error?.message || "An unexpected error occurred"}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-4 bg-primary text-on-primary font-label-md hover:brightness-110 transition-all"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
