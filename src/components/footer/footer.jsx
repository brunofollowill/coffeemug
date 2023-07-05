import React from "react";
import "../footer/footer.css";
import Logo from "../../img/logo.png"


export default function footer() {
  return (
    <div className="footer-container">
    <img src={Logo} alt="logo"/>
      <p>Todos os direitos reservados</p>
    </div>
  );
}
