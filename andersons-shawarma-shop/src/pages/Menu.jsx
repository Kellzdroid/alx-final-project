import React from "react";
import Menupage from "../components/MenuSections/Menudisplay";
import DownloadAppMenu from "../components/MenuSections/DownloadAppMenu";
import FooterMenu from "../components/MenuSections/FooterMenu";

const Menu = () => {
  return (
    <div>
      <Menupage />
      <DownloadAppMenu />
      <FooterMenu />
    </div>
  );
};

export default Menu;
