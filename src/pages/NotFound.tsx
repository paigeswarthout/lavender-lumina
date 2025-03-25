
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import MainLayout from "@/layouts/MainLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <h1 className="text-9xl font-bold text-gradient mb-6">404</h1>
          <p className="text-2xl text-foreground mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Button asChild size="lg" className="rounded-full px-8">
            <a href="/">Return Home</a>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
