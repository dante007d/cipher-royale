// /client/src/components/ErrorBoundary.jsx
import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('💥 [React Error Boundary] Caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 bg-slate-900 text-red-500 flex flex-col items-center justify-center p-8 text-center z-[9999]">
          <h1 className="text-4xl font-bold mb-4">UI Crashed</h1>
          <p className="mb-8 text-slate-300">A rendering error occurred. The game engine may still be running.</p>
          <button 
            className="px-6 py-3 bg-red-600 text-white rounded hover:bg-red-500 font-bold tracking-wider"
            onClick={() => window.location.reload()}
          >
            RELOAD GAME
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
