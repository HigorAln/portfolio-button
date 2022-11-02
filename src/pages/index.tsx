import Head from "next/head";
import { Navigation } from "../components/Navigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Higor </title>
      </Head>
      <div className="w-screen h-auto min-h-screen p-[80px] flex justify-center">
        <div className="max-w-3xl w-full flex flex-col items-center">
          <Navigation />
        </div>
      </div>
    </>
  );
}
