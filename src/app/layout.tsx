import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import ScrollToTopButton from "@/component/common/ScrollToTopButton";
import { cookieToInitialState } from 'wagmi'
// import { headers } from 'next/headers'
import Web3ModalProvider from '@/context'
import { config } from '@/config'

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config);
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer autoClose={3000} style={{ right: "0px" }} />
        <Web3ModalProvider initialState={initialState}>
          {children}
        </Web3ModalProvider>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
