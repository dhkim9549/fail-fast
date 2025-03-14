import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "FAIL FAST",
  description: "fail fast",
};

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={notoSansKR.className}>
      <body className="">
        <div className="fixed top-0 z-50 w-full bg-slate-800 text-slate-100 text-center p-1">
          FAIL FAST
        </div>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
