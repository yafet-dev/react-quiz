import { children, useEffect } from "react";

function Footer({ children }) {
  useEffect(function () {
    setInterval(function () {}, 1000);
  }, []);
  return <footer>{children}</footer>;
}

export default Footer;
