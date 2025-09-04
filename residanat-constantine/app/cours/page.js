import Link from 'next/link';
import prisma from '../../lib/prisma';

async function getSujets() {
  const sujets = await prisma.sujet.findMany();
  return sujets;
}

export default async function CoursPage() {
  const sujets = await getSujets();

  return (
    <main className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Matières</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sujets.map((sujet) => (
          <Link
            key={sujet.id}
            href={`/cours/${sujet.slug}`}
            className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {sujet.nom}
            </h5>
          </Link>
        ))}
      </div>
    </main>
  );
}
