export default function Home() {
  console.log('Hello bro');

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      Hello
      <FetchAlbums />
      <footer>Footer</footer>
    </div>
  );
}

async function FetchAlbums() {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums');
  if (!response.ok) throw new Error('Faild to fetch data');

  const albums = await response.json();

  return (
    <div>
      How many Albums: <strong>{albums.length}</strong>
    </div>
  );
}
