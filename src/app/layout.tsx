import type { Metadata } from "next";
import { nextAuthOptions } from "./api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth/next";
import AuthProvider from "@/providers/nextAuthProvider";
import { Inter } from "next/font/google";
import "./globals.css";

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
  const session = getServerSession(nextAuthOptions);
  if (!session) {
    return <div>not authorized</div>;
  }
  return (
    <AuthProvider session={session}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </AuthProvider>
  );
}
