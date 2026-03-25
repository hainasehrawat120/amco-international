import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { Quality } from "./pages/Quality";
import { Export } from "./pages/Export";
import { Clients } from "./pages/Clients";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Gallery } from "./pages/Gallery";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "products", Component: Products },
      { path: "quality", Component: Quality },
      { path: "export", Component: Export },
      { path: "clients", Component: Clients },
      { path: "contact", Component: Contact },
      { path: "gallery", Component: Gallery },
      { path: "*", Component: NotFound },
    ],
  },
]);
