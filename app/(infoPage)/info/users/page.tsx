import Link from "next/link";
import React from "react";

const Users = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/info/users/1">1</Link>
        </li>
        <li>
          <Link href="/info/users/2">2</Link>
        </li>
        <li>
          <Link href="/info/users/3">3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Users;
