'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { handleNext as handleNextAction } from './action';

export default function OrderPage() {
  const [status, setStatus] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleApply = () => {
    startTransition(() => {
      if (Number(price) < 0) {
        router.push('/example/order/unauthorized');
      } else {
        setError('Price is valid, no redirect triggered.');
      }
    });
  };

  const handleNext = (status: string) => {
    startTransition(() => {
      handleNextAction(status).catch((err) => {
        setError(err.message);
      });
    });
  };

  return (
    <div>
      <h2>Order Page</h2>
      <div>
        <label>Status: </label>
        <input value={status} onChange={(e) => setStatus(e.target.value)} />
      </div>
      <div>
        <label>Price: </label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button onClick={handleApply} disabled={isPending}>
        Apply
      </button>
      <button onClick={() => handleNext(status)} disabled={isPending}>
        Next
      </button>
      {isPending && <p>Redirecting...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
