"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full flex justify-center px-5 md:px-10">
      <div className="max-w-7xl flex flex-col h-screen justify-center items-center text-center">
        <h2 className="text-red-500 font-medium">{error.stack}</h2>
        <h2 className="text-red-500 font-medium">{error.message}</h2>
        <button onClick={() => reset()}>Refresh</button>
      </div>
    </div>
  );
}
