import style from './TheHeader.module.css';
import Link from "next/link";

export default function TheHeader ()  {
    return (
        <header className={style.positionLink}>
            <Link href="/" className={style.logo}>WEBSTUDIO</Link>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
        </header>
    )
}