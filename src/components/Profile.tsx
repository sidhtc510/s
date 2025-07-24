import { useContext } from 'react';
import { Context } from '@/contextValue';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function Profile() {
  const context = useContext(Context);
  if (!context) throw new Error('ContextProvider is missing');
  const { addressContext } = context;

  if (!addressContext) return <></>

  return (
    <Card>
      <CardHeader>
        <CardTitle>Wallet Address</CardTitle>
      </CardHeader>
      <CardContent>
        {addressContext}  {/* // показываем адрес кошелька */}
      </CardContent>
    </Card>
  )
}