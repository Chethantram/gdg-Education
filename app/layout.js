import {Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const roboto = Roboto({
  weight:['400','500','700','900'],
  subsets: ["latin"],
});

export const metadata = {
  title: "OpenLearnX",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.className}`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >

        {children}
          </ThemeProvider>
        
      </body>
    </html>
  );
}
