import React from "react";
import FooterColumn from "./FooterColumn";
import Newsletter from "./Newsletter";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-gray-300">
      <div className="container max-w-[1440px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <FooterColumn
            title="CATEGORIES"
            links={[
              { label: "Furniture", href: "#furniture" },
              { label: "Jewelry", href: "#jewelry" },
              { label: "Fine Art", href: "#" },
              { label: "Fashion", href: "#fashion" },
              { label: "Creators", href: "#contact" },
              { label: "Questions & Answers", href: "#contact" },
            ]}
          />

          <FooterColumn
            title="TRADE"
            links={[
              { label: "Trade Program", href: "#" },
              { label: "Seller Application", href: "#" },
              { label: "Seller Login", href: "#" },
              { label: "Seller Directory", href: "#" },
            ]}
          />

          <FooterColumn
            title="OUR COMPANY"
            links={[
              { label: "About Us", href: "#about-us" },
              { label: "Press", href: "#press" },
              { label: "Careers", href: "#" },
              { label: "Investors", href: "#investors" },
              { label: "Reviews", href: "#contact" },
            ]}
          />

          <FooterColumn
            title="CUSTOMER SUPPORT"
            links={[
              { label: "Get Help", href: "#" },
              { label: "Visit Support Center", href: "#" },
              { label: "1stDibs Promise", href: "#" },
            ]}
          />

          <Newsletter />
        </div>

        {/* Bottom section */}
        <FooterBottom  />
      </div>
    </footer>
  );
};

export default Footer;
