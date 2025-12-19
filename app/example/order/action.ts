'use server';

import { redirect } from 'next/navigation';

export async function handleNext(status: string) {
  const normalized = status.trim().toLowerCase();

  if (normalized === 'active') {
    redirect('/example/order/success');
  } else if (normalized === 'inactive') {
    redirect('/example/order/failure');
  } else {
    throw new Error('Invalid status. Must be "active" or "inactive".');
  }
}
