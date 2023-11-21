"use client";

import style from './TheHeader.module.css';
import Link from "next/link";
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation'


export default function TheHeader ()  {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <header className={style.positionLink}>
            <Link href="/" className={clsx(style.logo, {[style.disabled]: pathname === "/"})}>WEBSTUDIO</Link>
            <Link href="/" className={clsx(style.home, {[style.disabled]: pathname === "/"})}>Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
        </header>
    )
}