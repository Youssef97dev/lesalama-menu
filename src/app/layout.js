import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Menu Boho House",
  description: "a home away from home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
