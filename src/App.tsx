import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { appRoutes } from "@/routes";

const router = createBrowserRouter(appRoutes);

function RouteFallback() {
  return (
    <div className="min-h-screen bg-zinc-950 text-neutral-50 flex items-center justify-center">
      <div className="text-[#9f9fa9] text-sm">Loading screen…</div>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
