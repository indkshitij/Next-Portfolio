import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import StoreProveider from "./StoreProveider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CursorWrapper from "@/components/CursorWrapper";

export const metadata: Metadata = {
  title: "Kshitij",
  description: "Kshitij's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="cursor-none">
        <SpeedInsights />
        <StoreProveider>
          <CursorWrapper>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Toaster position="top-center" />
              {children}
            </ThemeProvider>
          </CursorWrapper>
        </StoreProveider>
      </body>
    </html>
  );
}
