import type { Metadata } from "next";
import Head from "next/head";
import Nav from './ui/nav'
import Footer from './ui/footer'
import "./index.scss";
import "./ui/sun.scss";
import './globals.css';

export const metadata: Metadata = {
  title: "Bringer Of Joy ~ART 🎭 | HEALING 💚 | MAGIC 🧙🏿‍♂️~",
  description: "~ART 🎭 | HEALING 💚 | MAGIC 🧙🏿‍♂️~",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://code.jquery.com/jquery-3.7.1.min.js"
          integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
          crossOrigin="anonymous"
          async
        ></script>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" async></script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className="">
        {/* <InstallBootstrap /> */}
        {<Nav />}
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
