import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/admin/")({
  component: AdminIndex,
});

function AdminIndex() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("hg_admin_auth") === "true";
    if (isAuth) {
      navigate({ to: "/admin/dashboard" });
    } else {
      navigate({ to: "/admin/login" });
    }
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0E382C] text-white">
      <div className="text-center font-display text-lg animate-pulse">
        Loading Admin Portal...
      </div>
    </div>
  );
}
