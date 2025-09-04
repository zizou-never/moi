export default function HomePage() {
  return (
    <main className="container mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        Préparez votre Concours de Résidanat à Constantine
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Toutes les ressources, cours et annales dont vous avez besoin pour réussir.
      </p>
      <div className="space-x-4">
        <a href="/cours" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700">
          Explorer les Cours
        </a>
        <a href="/annales" className="bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-300">
          Voir les Annales
        </a>
      </div>
    </main>
  );
}
