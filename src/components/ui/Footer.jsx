import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="absolute bottom-0 left-0 w-full bg-background border-t py-2 text-center text-muted-foreground">
        © {new Date().getFullYear()} ResuVerse. All rights reserved.
      </footer>
    </>
  );
};

export default Footer;
