import React from "react";
import Header from "./header";
import Footer from "./footer";

type LayoutProps = {
  children: React.ReactNode,
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="font-mono flex w-full min-h-screen flex-col justify-between sm:p-2 md:p-6">
      <div>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;