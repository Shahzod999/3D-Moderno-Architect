import Link from "next/link";
import React from "react";

const Users = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/dashboard/users/1">1</Link>
        </li>
        <li>
          <Link href="/dashboard/users/2">2</Link>
        </li>
        <li>
          <Link href="/dashboard/users/3">3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Users;
