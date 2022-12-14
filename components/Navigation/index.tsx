import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Navigation() {
  const router = useRouter();

  let resolvedPath = router.pathname.slice(1);
  
  if (resolvedPath != 'global' && resolvedPath != 'lend' && resolvedPath != 'borrow') {
    resolvedPath = 'global';
  }

  return (
    <div className="basis-1/2	text-align-center">
      <select
        id="location"
        name="location"
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm text-center"
        value={resolvedPath}
        onChange={(event) => router.push(event.target.value)}
      >
        <option value="global">Global</option>
        <option value="lend">Lend</option>
        <option value="borrow">Borrow</option>
      </select>
    </div>
  )
}
