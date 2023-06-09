import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString("en-US", { month: "long" });

  return (
    <footer className="bg-primary fixed-bottom py-3 footer">
      <div className="container d-flex justify-content-start">
        <p className="m-0 p-0 text-light">
          &copy; {currentMonth} {currentYear} BIT By Radmila Ivankovic
        </p>
      </div>
    </footer>
  );
};

export default Footer;
