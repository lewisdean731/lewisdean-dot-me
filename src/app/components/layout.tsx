import React from "react";
import Header from "./header";
import Footer from "./footer";

type LayoutProps = {
  children: React.ReactNode,
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="bg-blue4 font-mono flex min-h-screen flex-col justify-between p-6">
      <div>
        <Header />
        {children}
      </div>
      <Footer />
    </main>
  )
}

export default Layout;