"use client";

import style from './TheHeader.module.css';
import Link from "next/link";
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation'


export default function TheHeader ()  {
    const pathname = usePathname()
    
    return (
        <header className={style.positionLink}>
            <Link href="/" className={clsx(style.logo, {[style.disabled]: pathname === "/"})}>WEBSTUDIO</Link>
            <Link href="/" className={clsx(style.home, {[style.disabled]: pathname === "/"})}>Главная</Link>
            <Link href="/blog">О компании</Link>
            <Link href="/contacts">Контакты</Link>
        </header>
    )
}