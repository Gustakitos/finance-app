import React from "react";
import SideNav from "./components/side-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-4 lg:col-span-1">
      <aside>
        <SideNav />
      </aside>
      <div className="col-span-4 lg:col-span-3">{children}</div>
    </div>
  );
}
