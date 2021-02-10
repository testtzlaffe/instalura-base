import React from "react";
import { Logo } from "../../../theme/Logo";
import { MenuWrapper } from "./styles/MenuWrapper";

export default function Menu() {
  const links = [
    {
      texto: "Home",
      url: "/",
    },
    {
      texto: "Perguntas frequentes",
      url: "/faq",
    },
    {
      texto: "Sobre",
      url: "/sobre",
    },
  ];
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link) => (
          <a href={link.url}>{link.texto}</a>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <button>Entrar</button>
        <button>Cadastrar</button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
