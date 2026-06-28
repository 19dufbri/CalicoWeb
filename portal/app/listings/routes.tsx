import { ListingsPage } from ".";
import type { Route } from "./+types/listings";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Listings" },
    { name: "description", content: "Current Listings" },
  ];
}

export default function Listings() {
  return <ListingsPage />;
}
