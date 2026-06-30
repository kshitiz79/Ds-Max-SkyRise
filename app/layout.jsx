import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";
import "./globals.css";

export const metadata = {
  title: "Sky Ora",
  description: "Sky Ora Builders",
  icons: {
    icon: "/favicon.png",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}