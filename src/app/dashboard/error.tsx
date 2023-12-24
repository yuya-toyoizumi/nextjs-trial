'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error,
  reset: () => void,
}) {
  return (
    <>
      <div>Dashboard Error.</div>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Tyr again!</button>
    </>
  );
}
