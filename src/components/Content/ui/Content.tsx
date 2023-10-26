import React, { FunctionComponent, useEffect, useState } from 'react';
import { classNames } from 'shared/helpers/lib';
import { useAccount, useNetwork } from 'wagmi';
import {
    createPublicClient, http, formatEther,
} from 'viem';
import { bsc } from 'viem/chains';
import { BscBEP20USDT } from '../../../ABI';
import cls from './Content.module.scss';
import 'viem/window';

interface ContentProps {
    className?: string,
}

export const Content: FunctionComponent = ({ className }: ContentProps) => {
    const { address, isConnected } = useAccount();
    const { chain } = useNetwork();
    const [balance, setBalance] = useState<string | null>(null);

    const pubLicClient = createPublicClient({
        chain: bsc,
        transport: http('https://bsc-dataseed.binance.org'),
    });
    console.log(address);

    useEffect(() => {
        if (isConnected) {
            const getTokenBalance = async () => {
                const tokenBalance = await pubLicClient.readContract({
                    address: '0x55d398326f99059fF775485246999027B3197955',
                    abi: BscBEP20USDT,
                    functionName: 'balanceOf',
                    args: [address],
                });
                setBalance(formatEther(tokenBalance));
            };
            getTokenBalance();
        }
    }, [isConnected]);

    return (
        <div className={classNames(cls.Content, {}, [className])}>
            {isConnected
                ? chain.id === 56
                    ? (
                        <div>
                            Your Adress is
                            {' '}
                            {address}
                            {' '}
                            Balance is
                            {' '}
                            {balance}
                            {' '}
                            USDT
                        </div>
                    )
                    : <div> Please Switch to Binance Smart Chain</div>
                : <div>Please connect wallet to see you balance</div>}
        </div>
    );
};
