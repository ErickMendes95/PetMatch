import { Navbar } from "@components";
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "./AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PetMatch",
  description: "O lugar para você adotar uma nova vida",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthContextProvider>
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
    </AuthContextProvider>
  );
}
