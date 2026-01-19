import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const DebugFallback = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4 font-sans">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-sm w-full text-center border border-green-200 dark:border-green-900">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">System Operational</h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          The React environment is loading correctly. If you see this, the routing fallback is active.
        </p>
        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
          <p className="text-xs text-gray-400">Hostinger Horizons Debug Mode</p>
        </div>
      </div>
    </div>
  );
};

export default DebugFallback;