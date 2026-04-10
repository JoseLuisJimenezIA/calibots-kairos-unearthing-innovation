import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import ClickSpark from "@/components/ClickSpark";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Eager load only the landing page
import Index from "./pages/Index";

// Lazy load all other routes
const QuienesSomos = lazy(() => import("./pages/QuienesSomos"));
const ProyectoInnovador = lazy(() => import("./pages/ProyectoInnovador"));
const JuegoDelRobot = lazy(() => import("./pages/JuegoDelRobot"));
const Galeria = lazy(() => import("./pages/Galeria"));
const Contacto = lazy(() => import("./pages/Contacto"));
const ValorFIRST = lazy(() => import("./pages/ValorFIRST"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Admin pages
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const AdminTeam = lazy(() => import("./pages/admin/AdminTeam"));
const AdminGallery = lazy(() => import("./pages/admin/AdminGallery"));
const AdminRobot = lazy(() => import("./pages/admin/AdminRobot"));
const AdminLayout = lazy(() => import("./components/admin/AdminLayout"));
const ProtectedRoute = lazy(() => import("./components/admin/ProtectedRoute"));

// Lazy load heavy global WebGL effect
const SplashCursor = lazy(() => import("./components/SplashCursor"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
    <TooltipProvider>
      <ClickSpark sparkColor="#D4A017" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <Suspense fallback={null}>
        <SplashCursor />
      </Suspense>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/proyecto-innovador" element={<ProyectoInnovador />} />
            <Route path="/juego-del-robot" element={<JuegoDelRobot />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/valores/:slug" element={<ValorFIRST />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      </ClickSpark>
    </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
