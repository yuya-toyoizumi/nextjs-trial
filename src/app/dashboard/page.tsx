import Link from 'next/link';

async function getDogList() {
  const res = await fetch(`${process.env.API_URL}/dogs`);

  if (!res.ok) {
    throw new Error('Failed to fetch data!');
  }

  return res.json();
}

export default async function Page() {
  const dogList = await getDogList();
  
  return (
    <>
      <h1>Hello, Dashboard Page!</h1>
      <ul>
        {dogList.map((dog) => {
          return (
            <li key={dog.id}>
              <Link href={`/dashboard/${dog.id}`}>{dog.name}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
