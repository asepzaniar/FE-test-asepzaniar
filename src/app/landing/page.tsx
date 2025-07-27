export default function landingPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto relative">

        <section className="text-left md:text-left space-y-6 z-10">
          <h1 className="text-5xl font-bold  font-ubuntu text-[#658abd]">
            Selamat Datang di Website Asep Zaniar Zatnika!
          </h1>
          <p className="text-lg text-gray-700 font-ubuntu">
            Nama saya asep zaniar Zatnika, saya harap TMA bisa lebih baik lagi dari tahun - tahun sebelumnya, selalu meningkatkan performa dengan baik, 
            menjadi perusahaan yang terlihat solid dan berkejasama team, lebih makmur dan menghargai perbedaan.
          </p>
          <a
            href="/other"
            className="inline-block bg-[#658abd] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition font-ubuntu"
          >
            Jokes Today
          </a>
        </section>

        <div className="flex justify-center">
          <img
            src="/img/working.gif"
            alt="Working"
            className="w-full max-w-lg h-auto z-10"
          />
        </div>
      </div>
    </main>
  );
}
