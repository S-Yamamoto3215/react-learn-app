import Link from 'next/link';

export default function Home() {
  const linkItems = [
    { href: '/todo', label: 'Simple ToDo' },
  ];
  return (
    <main>
      <h1>My App List</h1>
      <ul>
        {linkItems.map((linkItem) => {
          return (
            <li key={linkItem.href}>
              <Link href={linkItem.href}>
                <p>{linkItem.label}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  )
}
