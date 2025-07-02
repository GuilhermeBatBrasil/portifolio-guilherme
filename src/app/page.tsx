"use client";
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute w-72 h-72 bg-blue-700 opacity-30 rounded-full blur-3xl animate-pulse -top-20 -left-20" />
        <div className="absolute w-96 h-96 bg-purple-700 opacity-20 rounded-full blur-3xl animate-pulse-slow -bottom-32 -right-32" />
        <div className="absolute w-40 h-40 bg-green-600 opacity-20 rounded-full blur-2xl animate-pulse-slow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <section className="mb-8 z-10" />
      <section className="text-center mb-8 z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg animate-fade-in">Bem-vindo ao meu portfólio!</h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto animate-fade-in delay-200">
          Aqui você encontra um pouco sobre mim, meus projetos e como me contatar.
        </p>
      </section>
      <nav className="flex flex-wrap gap-6 z-10 animate-fade-in delay-300">
        <Link href="/sobre" className="px-6 py-3 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-200 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400">Sobre</Link>
        <Link href="/projetos" className="px-6 py-3 bg-green-600 rounded-lg shadow-lg hover:bg-green-700 hover:scale-105 transition-all duration-200 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-green-400">Projetos</Link>
        <Link href="/contato" className="px-6 py-3 bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-200 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-purple-400">Contato</Link>
      </nav>
      <style jsx global>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease forwards;
        }
        .animate-fade-in.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-fade-in.delay-300 {
          animation-delay: 0.3s;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite;
        }
      `}</style>
    </main>
  );
}
