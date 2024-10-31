import Link from "next/link";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Root Layout</h1>
      <ul>
        <li>
          <Link href="/dashboard/users">users</Link>
        </li>
        <li>
          <Link href="/dashboard/analytics">analytics</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default Layout;
