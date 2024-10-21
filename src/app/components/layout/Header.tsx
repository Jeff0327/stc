import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex font-ria">
      <Link href="/home">home</Link>
      <Link href="/about">about</Link>
      <Link href="/userinfo">내 정보</Link>
    </div>
  );
}

export default Header;
