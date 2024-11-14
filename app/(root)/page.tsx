export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <h1>Hello</h1>
    </div>
  );
}

// export async function MyComponent() {
//   const response = await fetch('https://jasonplaceholder.typicode.com/albums');
//   const data = await response.json();

//   return (
//     <div>
//       <h1>My Prefetch Data from server side Rendering</h1>
//       {data.map((item: any) => (
//         <div key={item.key}>{item.title}</div>
//       ))}
//     </div>
//   );
// }
