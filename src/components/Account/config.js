import Metamask from "./WalletIcons/metamaskWallet.png";
//import Coin98 from "./WalletIcons/Coin98.png";
import WalletConnect from "./WalletIcons/wallet-connect.svg";
// import MathWallet from "./WalletIcons/MathWallet.svg";
// import TokenPocket from "./WalletIcons/TokenPocket.svg";
// import SafePal from "./WalletIcons/SafePal.svg";
// import TrustWallet from "./WalletIcons/TrustWallet.png";

export const connectors = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: "injected",
    priority: 1,
    id: 1,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: "walletconnect",
    priority: 2,
    id: 2,
  },
  // {
  //   title: "Trust Wallet",
  //   icon: TrustWallet,
  //   connectorId: "injected",
  //   priority: 3,
  //   id: 3,
  // },
  // {
  //   title: "MathWallet",
  //   icon: MathWallet,
  //   connectorId: "injected",
  //   priority: 999,
  //   id: 4,
  // },
  // {
  //   title: "TokenPocket",
  //   icon: TokenPocket,
  //   connectorId: "injected",
  //   priority: 999,
  //   id: 5,
  // },
  // {
  //   title: "SafePal",
  //   icon: SafePal,
  //   connectorId: "injected",
  //   priority: 999,
  //   id: 6,
  // },
  // {
  //   title: "Coin98",
  //   icon: Coin98,
  //   connectorId: "injected",
  //   priority: 999,
  //   id: 7,
  // },
];
