import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
// import scarabLogo from './scarab-logo.png';

function MenuItems() {
  const { pathname } = useLocation();
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);
  const loggedIn = (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "17px",
        fontWeight: "500",
        width: "100%",
        justifyContent: "center",
      }}
      defaultSelectedKeys={[pathname]}
    >
      <Menu.Item key="/erc20balance">
        <NavLink to="/erc20balance"> Balances</NavLink>
      </Menu.Item>
      <Menu.Item key="/nftBalance">
        <NavLink to="/nftBalance"> NFTs</NavLink>
      </Menu.Item>
    </Menu>
  );
  const notLoggedIn = <p>Show Other stuff</p>;

  return <div>{isAuthenticated ? loggedIn : notLoggedIn}</div>;
}

export default MenuItems;
