import Link from "next/link";
import React from "react";

const FooterLogo = () => {
  return (
    <>
      <Link href={'/'}>
        <img src={'/assets/logo/logo_3.png'} width={160} />
      </Link>
    </>
  );
};

export default FooterLogo;
