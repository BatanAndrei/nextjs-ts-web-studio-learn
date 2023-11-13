import { PropsWithChildren } from "react";
import Head from "next/head";


    export default function Layout({ children }: PropsWithChildren) {
      return (
          <>
              <Head>
                  <title>Web Studio</title>
                  <meta name="description" content="SkillFactory Next.js project" />
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                  <link rel="icon" href="/favicon.ico" />
              </Head>
              <div>
                  <header>
                      <div>Logo</div>
                      <div>Nav</div>
                  </header>
                  <main>{children}</main>
                  <footer>&copy; 2023 Web studio</footer>
              </div>
          </>
        );
    }
