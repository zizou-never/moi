import prisma from '../../../lib/prisma';

async function getCoursParSujet(slug) {
  const sujetAvecCours = await prisma.sujet.findUnique({
    where: { slug },
    include: {
      cours: {
        orderBy: {
          titre: 'asc',
        },
      },
    },
  });
  return sujetAvecCours;
}

export default async function SujetDetailPage({ params }) {
  const sujet = await getCoursParSujet(params.slug);

  if (!sujet) {
    return <div>Sujet non trouvé</div>;
  }

  return (
    <main className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{sujet.nom}</h1>
      <div className="space-y-4">
        {sujet.cours.map((cours) => (
          <div key={cours.id} className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">{cours.titre}</h3>
            {/* Ici vous afficherez le contenu du cours */}
          </div>
        ))}
        {sujet.cours.length === 0 && <p>Aucun cours disponible pour cette matière pour le moment.</p>}
      </div>
    </main>
  );
}
