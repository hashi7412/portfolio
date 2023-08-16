'use client'

import RouterLink from "next/link";
import { useRouter } from "next/navigation";
import Logo from "../Logo";

export const Navbar = () => {
  const {  } = useRouter();
  return (
    <header>
      <RouterLink href={route === "/" ? "/#intro" : "/"}>
        <a>
          <Logo />
        </a>
      </RouterLink>
    </header>
  )
}
