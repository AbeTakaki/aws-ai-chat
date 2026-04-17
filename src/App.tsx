import { RouterProvider } from "react-router";
import { router } from "./routes";
import "./index.css";

export default function APP() {
  return <RouterProvider router={router} />;
}
