import React from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, AlertTriangle } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
          <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Ops! Algo deu errado.
            </h1>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Não se preocupe, foi apenas um erro temporário. Tente recarregar a página.
            </p>

            {/* Dev details only visible if needed/in dev */}
            {import.meta.env.DEV && this.state.error && (
              <div className="text-left bg-gray-100 dark:bg-gray-950 p-4 rounded-lg mb-6 overflow-auto max-h-40 text-xs font-mono">
                <p className="text-red-500 font-bold mb-1">{this.state.error.toString()}</p>
                <pre>{this.state.errorInfo.componentStack}</pre>
              </div>
            )}

            <Button 
              onClick={() => window.location.reload()} 
              className="w-full bg-primary hover:bg-primary/90 gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Recarregar Página
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;