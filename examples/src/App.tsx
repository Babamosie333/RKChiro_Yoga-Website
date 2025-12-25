import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import routes from './routes';
import Navigation from './components/common/Navigation';
import { ToastProvider } from './hooks/useToast';
import { AuthProvider, RequireAuth } from 'miaoda-auth-react';
import { supabase } from './db/supabase';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider client={supabase}>
        <RequireAuth whiteList={['/login']}>
          <ToastProvider>
            <div className="flex flex-col min-h-screen bg-gray-50">
              <main className="flex-grow">
                <Routes>
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      element={route.element}
                    />
                  ))}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
              <Navigation />
            </div>
          </ToastProvider>
        </RequireAuth>
      </AuthProvider>
    </Router>
  );
};

export default App;