import { Outlet } from "react-router";

/**
 * RootLayout — the shell layout wrapping all pages.
 * Add global navigation, sidebars, or modals here.
 */
export default function RootLayout() {
  return (
    <div className="h-screen bg-background text-foreground">
      <Outlet />
    </div>
  );
}
