import React from "react";
import LayoutRecoil from "./layout.recoil";

export const metadata = {
  title: "front pre-course",
  description: "todolist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutRecoil>{children}</LayoutRecoil>
      </body>
    </html>
  );
}
