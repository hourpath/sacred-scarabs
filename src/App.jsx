import React from "react";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
// import TokenPrice from "components/TokenPrice";
import { Layout } from "antd";
import "antd/dist/antd.css";
// import NativeBalance from "components/NativeBalance";
import "./style.css";
import Drawer from "components/Drawer/Drawer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

/* const styles = {
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#3c6580",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "right",
    fontSize: "15px",
    fontWeight: "600",
  },
  layout: {
    height: "100%",
    overflow: "auto",
    background: "#3c6580",
    paddingBottom: "0px",
    marginBottom: "0px",
  },
};
*/

const App = () => {
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "PT Serif serif",
        textTransform: "none",
      },
    },
  });

  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Drawer></Drawer>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
