// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { TranslationProvider } from "./context/TranslationContext";
import Dashboard from "./pages/Dashboard";
import PublicView from "./pages/PublicView";
import Header from "./layout/Header";

export default function App() {
  return (
    <TranslationProvider>
      <Router>
        <div className="bg-gray-900 min-h-screen text-white w-full">
          <Header />

          <main className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/view" element={<PublicView />} />
            </Routes>
          </main>
        </div>
      </Router>
    </TranslationProvider>
  );
}
