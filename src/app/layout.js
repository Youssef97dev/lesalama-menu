import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Menu Le salama Marrakech",
  description: "Rooftop & Sky Bar",
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
