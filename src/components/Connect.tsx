import { useConnect, useAccount, useDisconnect } from "wagmi"; // хуки для подключения кошелька
import { injected } from 'wagmi/connectors' // коннектор для браузерных кошельков
import { Button } from "./ui/button";
import { useContext, useEffect } from "react";
import { Context } from '@/contextValue'; // глобальный контекст для адреса

export default function Connect() {

  const context = useContext(Context); // получаем контекст
  if (!context) throw new Error('ContextProvider is missing');
  const { setAddressContext } = context; // функция для сохранения адреса
  const { connect } = useConnect(); // функция для подключения
  const { address, isConnected } = useAccount(); // адрес и статус подключения
  const { disconnect } = useDisconnect(); // функция для отключения

  useEffect(() => {
    setAddressContext(address ?? ''); // сохраняем адрес в контекст при изменении статуса
  }, [isConnected])
  return (
    <>
      {isConnected ? (
        <Button onClick={() => disconnect()}>Disconnect</Button> // кнопка отключения
      ) : (
        <Button onClick={() => connect({ connector: injected() })}>Connect</Button> // кнопка подключения
      )}
    </>
  )
}