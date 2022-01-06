import Head from "next/head";
import Accueil from "./accueil";

export default function Home({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <Accueil />
    </Head>
  );
}
