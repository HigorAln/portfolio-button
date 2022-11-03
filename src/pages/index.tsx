import Head from "next/head";
import React, { useEffect } from "react";
import { Main } from "../components/Main";
import { Navigation } from "../components/Navigation";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/router";

export type ActuallyProps = "" | "Projects" | "Experience" | "About";

export default function Home() {
  const [actually, setActually] = React.useState<ActuallyProps>("");
  const [backToPortfolio, setBackToPortfolio] = React.useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.query.b) {
      if (router.query.b === "portfolio") {
        setBackToPortfolio(true);
      }
    }
  }, [router]);

  function handleBack() {
    console.log("entro");
    router.back();
  }

  return (
    <>
      <Head>
        <title>Portfolio - Higor </title>
      </Head>
      <div className="h-auto min-h-screen pt-[60px] pb-[30px] flex justify-center">
        {backToPortfolio && (
          <button onClick={handleBack}>
            <BsArrowLeft
              size={24}
              className="absolute left-[20px] sm:left-[40px] top-[20px] sm:top-[40px] text-style-g-ed"
            />
          </button>
        )}
        <div className="max-w-3xl w-full flex flex-col items-center">
          <Navigation handleChange={setActually} />

          <Main actually={actually} />
        </div>
      </div>
    </>
  );
}
