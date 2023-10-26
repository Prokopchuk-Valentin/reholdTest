import React from 'react';
import { createRoot } from 'react-dom/client';
import './app/styles/index.scss';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { bsc } from 'wagmi/chains';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import ThemeProvider from './app/providers/themeProvider/ui/ThemeProvider';
import App from './app/App';

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [bsc],
    [
        jsonRpcProvider({
            rpc: () => ({
                http: 'https://bsc-dataseed.binance.org',
            }),
        }),
        publicProvider(),
    ],
);

const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
    connectors: [
        new MetaMaskConnector({
            chains,
            options: {
                shimDisconnect: true,
                UNSTABLE_shimOnConnectSelectAccount: true,
            },
        }),
        new WalletConnectConnector({
            chains,
            options: {
                projectId: '8be093c7ce0f2468dcada37d44270c05',
                showQrModal: true,
            },
        }),
    ],
});

const root = createRoot(document.getElementById('root'));

root.render(
    <ThemeProvider>
        <WagmiConfig config={config}>
            <App />
        </WagmiConfig>
    </ThemeProvider>,
);
