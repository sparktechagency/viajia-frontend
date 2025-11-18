import Footer from "@/components/shared/footer/Footer";
import NavServer from "@/components/shared/navbar/NavServer";
import React from "react";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative">
      <NavServer /> 
      <section>{children}</section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
