import { Context } from '@/contextValue';
import { useContext } from 'react';
import { formatUnits } from 'viem'; // функция для форматирования баланса
import { useBalance } from 'wagmi' // хук для получения баланса
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function Ballance() {
    const context = useContext(Context);
    if (!context) throw new Error('ContextProvider is missing');
    const { addressContext } = context;
    const { data } = useBalance({
        address: addressContext as `0x${string}`, // получаем баланс по адресу
    })

    if (!addressContext) return <></> // если адреса нет — ничего не показываем
    // result.data?.formatted  - depricated поэтому используем formatUnits
    const balance = data ? formatUnits(data.value, data.decimals) : '0'; // форматируем баланс

    return (
        <Card>
            <CardHeader>
                <CardTitle>Ballance</CardTitle>
            </CardHeader>
            <CardContent>
                {balance} {data?.symbol}  {/* // показываем баланс и валюту */}
            </CardContent>
        </Card>

    )
}