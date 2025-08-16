import React from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center py-16 bg-[#F8F1E9]">
          <h2 className="text-4xl font-extrabold text-black mb-4">Something Went Wrong</h2>
          <p className="text-gray-700 mb-6">Please try again later or contact support.</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
            aria-label="Reload page"
          >
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;