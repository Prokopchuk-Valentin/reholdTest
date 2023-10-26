import { classNames } from 'shared/helpers/lib';
import React, { useCallback, useState } from 'react';
import { Button, ThemeButtonEnum } from 'shared/ui/Button';
import {
    useAccount, useDisconnect, useNetwork, useSwitchNetwork,
} from 'wagmi';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Modal } from 'shared/ui/Modal';
import cls from './Navbar.module.scss';
import { WalletConnections } from '../../WalletConections';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const { isConnected } = useAccount();
    const { disconnect } = useDisconnect();
    const { chain } = useNetwork();
    const { switchNetwork } = useSwitchNetwork();

    const handleModal = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            {isConnected
                ? (
                    <>
                        {chain.id === 56 && (
                            <div className={cls.wallets}>
                                Connected to
                                {' '}
                                {chain.name}
                            </div>
                        )}
                        {chain.id !== 56 && (
                            <Button
                                className={cls.Links}
                                disabled={!switchNetwork}
                                onClick={() => switchNetwork(56)}
                                theme={ThemeButtonEnum.CLEAR_INVERTED}
                            >
                                Switch to Binance Smart Chain
                            </Button>
                        )}
                        <Button
                            theme={ThemeButtonEnum.CLEAR_INVERTED}
                            onClick={() => disconnect()}
                        >
                            Disconnect
                        </Button>
                    </>
                )
                : (
                    <Button
                        theme={ThemeButtonEnum.CLEAR_INVERTED}
                        className={cls.Links}
                        onClick={handleModal}
                    >
                        Connect Wallet
                    </Button>
                )}
            <Modal isOpen={isOpen} onClose={handleModal}>
                <WalletConnections onClose={handleModal} />
            </Modal>
            <ThemeSwitcher />
        </div>
    );
};
