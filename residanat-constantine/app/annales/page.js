import prisma from '../../lib/prisma';

async function getAnnales() {
  const annales = await prisma.annale.findMany({
    orderBy: {
      annee: 'desc',
    },
  });
  return annales;
}

export default async function AnnalesPage() {
  const annales = await getAnnales();

  return (
    <main className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Annales du Concours</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {annales.map((annale) => (
            <li key={annale.id} className="p-4 flex justify-between items-center hover:bg-gray-50">
              <span className="font-medium text-gray-800">{annale.titre} - {annale.annee}</span>
              <a 
                href={annale.urlPDF} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2"
              >
                Télécharger
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
