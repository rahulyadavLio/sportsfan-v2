import { Toaster } from "@/components/ui/sonner";

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Global providers wrapper.
 * Add ThemeProvider, QueryClientProvider, AuthProvider, etc. here.
 */
export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      {children}
      <Toaster position="top-center" richColors />
    </>
  );
}
