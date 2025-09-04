import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Résidanat Constantine
        </Link>
        <div className="flex space-x-4">
          <Link href="/cours" className="text-gray-600 hover:text-blue-500">
            Cours
          </Link>
          <Link href="/annales" className="text-gray-600 hover:text-blue-500">
            Annales
          </Link>
        </div>
      </nav>
    </header>
  );
}
