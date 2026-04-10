import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Users, Image, Bot, LayoutDashboard, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/admin", icon: LayoutDashboard, label: "Dashboard", end: true },
  { to: "/admin/team", icon: Users, label: "Integrantes" },
  { to: "/admin/gallery", icon: Image, label: "Galería" },
  { to: "/admin/robot", icon: Bot, label: "Robot" },
];

const AdminLayout = () => {
  const { signOut } = useAuth();

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card p-4 flex flex-col">
        <h1 className="text-lg font-bold text-primary mb-6">⚙️ Admin Calibots</h1>
        <nav className="flex-1 space-y-1">
          {links.map(({ to, icon: Icon, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`
              }
            >
              <Icon className="h-4 w-4" />
              {label}
            </NavLink>
          ))}
        </nav>
        <Button
          variant="ghost"
          className="justify-start gap-3 text-muted-foreground"
          onClick={() => signOut()}
        >
          <LogOut className="h-4 w-4" />
          Cerrar sesión
        </Button>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
