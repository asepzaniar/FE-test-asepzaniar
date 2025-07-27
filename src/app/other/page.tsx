async function getJoke() {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Gagal mengambil data");

  return res.json();
}

export default async function otherJokes() {
  const joke = await getJoke();

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <section className="mt-24 max-w-xl mx-auto text-center bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-teal-600 mb-4 font-ubuntu">Jokes Today</h2>
        <p className="text-lg font-semibold text-gray-800 mb-2 font-ubuntu">{joke.setup}</p>
        <p className="text-gray-600 italic font-ubuntu">{joke.punchline}</p>
      </section>
    </main>
  );
}
