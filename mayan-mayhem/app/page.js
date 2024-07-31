"use client"
import * as React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default function App() {
  const title = 'Welcome to the new blog.';
  const likes = 50;
  return (
      <main className="app flex min-h-screen flex-col items-center justify-between p-24 gap-6">
        <Navbar />
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </main>
  );
}
