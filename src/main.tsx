import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

// 1. Get projectId
const projectId = import.meta.env.VITE_PUBLIC_PROJECT_ID;

if (!projectId) {
  throw new Error("Project ID is required");
}

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

// 3. Create a metadata object
const metadata = {
  name: "Web3Modal Coinbase",
  description: "Web3Modal implementation with Coinbase",
  url: "https://walletconnect.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886?s=200&v=4"],
};

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,
  enableCoinbase: true,

  /* Optional
   *   enableEIP6963: true, // true by default
   *   enableInjected: true, // true by default
   *   enableCoinbase: true, // true by default
   *   rpcUrl: '...', // used for  Coinbase SDK
   *   defaultChainId: 1, // used for  Coinbase SDK
   */
});

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
