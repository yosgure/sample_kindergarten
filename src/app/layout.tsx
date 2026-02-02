import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "こどものいえ ひだまり幼稚園",
  description: "藤沢市のモンテッソーリ教育を取り入れた幼稚園。子どもの「やりたい」を見守り、自ら学ぶ力を育てます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Zen+Kaku+Gothic+New:wght@400;500&family=Zen+Maru+Gothic:wght@400;500&family=Yusei+Magic&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-bg text-text antialiased">
        {children}
      </body>
    </html>
  );
}
