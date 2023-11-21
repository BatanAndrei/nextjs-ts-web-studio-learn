import { PropsWithChildren } from "react";
import Head from "next/head";
import TheFooter from '@/components/TheFooter';
import TheHeader from '@/components/TheHeader';
import style from './layout.module.css';
import 'normalize.css/normalize.css'; //убирает все стандартные стили браузера // npm i normalize.css


    export default function Layout({ children }: PropsWithChildren) {
        return (
            <>
                <Head>
                    <title>Web Studio</title>
                    <meta name="description" content="SkillFactory Next.js project" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className={style.container}>
                    <TheHeader />
                    <main className={style.main}>{children}</main>
                    <TheFooter />
                </div>
            </>
        );
    }
