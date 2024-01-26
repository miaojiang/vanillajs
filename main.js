import { setupWalletSelector } from "@near-wallet-selector/core";
import { setupModal } from "@near-wallet-selector/modal-ui-js";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { setupHereWallet } from "@near-wallet-selector/here-wallet";
import { setupWalletConnect} from "@near-wallet-selector/wallet-connect";

const walletConnect = await setupWalletConnect({
    projectId: "9bf4d2879d593845ad1ee5fb7d9688d3",
    metadata: {
      name: "minimalist-example",
      description: "",
      url: "http://localhost",
      icons: ["https://avatars.githubusercontent.com/u/37784886"],
    }
});

const selector = await setupWalletSelector({
  network: "testnet",
  modules: [walletConnect, setupMyNearWallet(), setupHereWallet()],
});

const modal = setupModal(selector, {
  contractId: "",
});

window.selector = selector;
window.modal = modal;

document.getElementById('open-walletselector-button').addEventListener('click', () => modal.show());

