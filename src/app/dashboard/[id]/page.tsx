async function getDogItem({ id }: { id: string }) {
  const res = await fetch(`${process.env.API_URL}/dogs/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data!');
  }

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const dog = await getDogItem({ id: params.id });

  return (
    <p>{dog.name}</p>
  )
}
