import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { BrowserProvider } from "ethers";

function App() {
  const { address, chainId, isConnected } = useWeb3ModalAccount();

  const { walletProvider } = useWeb3ModalProvider();

  async function handleSignMessage() {
    const provider = new BrowserProvider(walletProvider!);
    const signer = await provider.getSigner();
    const signature = await signer?.signMessage("Hello Web3Modal Coinbase");
    console.log(signature);
  }
  return (
    <>
      <w3m-button />
      <w3m-network-button />
      <p>Connection Status: {isConnected ? "Connected" : "Disconnected"}</p>
      <p>Wallet Address: {address}</p>
      <p>Chain ID: {chainId}</p>
      <button onClick={handleSignMessage}>Sign Message</button>
    </>
  );
}

export default App;
