import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <p>Not found</p>
      <Link href='/'>Return to home</Link>
    </>
  )
}

