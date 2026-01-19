import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import ErrorBoundary from '@/components/ErrorBoundary';
import DebugFallback from '@/components/DebugFallback';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('@/pages/HomePage'));
const PrivacyPolicy = React.lazy(() => import('@/pages/PrivacyPolicy'));
const Terms = React.lazy(() => import('@/pages/Terms'));

function App() {
  useEffect(() => {
    // Force dark mode globally
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-white">
          <Suspense fallback={<div className="h-screen w-full flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"/></div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
              <Route path="/termos" element={<Terms />} />
              <Route path="/debug" element={<DebugFallback />} />
              {/* Catch all - Redirect to Home or 404 */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
          <FloatingWhatsApp />
          <Toaster />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;