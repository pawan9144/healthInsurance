import "./style/globals.css";
import "swiper/css";
import { Inter } from "next/font/google";
import CustomLayout from "./layout/CustomLayout";
import ContextProvider from "../context";
import AlertMessage from "../components/AlertMessage";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ContextProvider>
      <AlertMessage/>
        <CustomLayout>{children}</CustomLayout>
      </ContextProvider>
      </body>
    </html>
  );
}
