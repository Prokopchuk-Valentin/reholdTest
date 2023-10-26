import React, { FunctionComponent } from 'react';
import { Connector, useConnect } from 'wagmi';
import { classNames } from 'shared/helpers/lib';
import { Button } from 'shared/ui/Button';
import cls from './WalletConnections.module.scss';

interface WalletConnectionsProps {
    className?: string,
    onClose?: () => void,
}

export const WalletConnections: FunctionComponent<WalletConnectionsProps> = (props) => {
    const { className, onClose } = props;
    const {
        connect, connectors, isLoading, pendingConnector,
    } = useConnect();

    const connectWallet = (connector: Connector) => {
        connect({ connector });
        onClose();
    };
    return (
        <div className={classNames(cls.WalletConnections, {}, [className])}>
            {connectors.map((connector) => (
                <Button
                    disabled={!connector.ready}
                    key={connector.id}
                    onClick={() => connectWallet(connector)}
                >
                    {connector.name}
                    {isLoading
                    && pendingConnector?.id === connector.id
                    && ' (connecting)'}
                </Button>
            ))}
        </div>
    );
};
