import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import Layout from "@/components/Layout";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <main className="dark text-foreground bg-background">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </NextUIProvider>
  );
}
