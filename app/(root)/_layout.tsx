import SplashScreen from "@/components/SplashScreen";
import { Redirect, Slot } from "expo-router";
import { useEffect, useState } from "react";

export default function AppLayout() {
  const [loading, setLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
      setIsLogged(true);
    }, 5000);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  if (!isLogged) {
    return <Redirect href="/auth" />;
  }

  return <Slot />;
}
