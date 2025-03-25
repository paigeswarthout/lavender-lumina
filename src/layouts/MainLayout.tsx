
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SplashCursor } from "@/components/ui/splash-cursor";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <SplashCursor 
        COLOR_UPDATE_SPEED={5}
        DENSITY_DISSIPATION={2.8}
        CURL={20}
        SPLAT_RADIUS={0.3}
        BACK_COLOR={{ r: 0.6, g: 0.5, b: 1.0 }}
      />
      <Navbar />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
