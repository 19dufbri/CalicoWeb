import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("home/routes.tsx"),
  route("/listings", "listings/routes.tsx"),
  route("/contact", "contact/routes.tsx"),
] satisfies RouteConfig;
