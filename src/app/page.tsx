"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 px-6 py-20">
      <section className="text-center max-w-3xl animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
          home<span className="text-black">.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
          Bem-vindo ao meu portfólio! Aqui você encontra informações sobre mim, meus projetos e como entrar em contato.
        </p>

        <nav className="flex flex-wrap justify-center gap-6">
          <Link
            href="about"
            className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition-colors text-base font-medium"
          >
            Sobre
          </Link>
          <Link
            href="skills"
            className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition-colors text-base font-medium"
          >
            Skills
          </Link>
          <Link
            href="projects"
            className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition-colors text-base font-medium"
          >
            Projetos
          </Link>
        </nav>
      </section>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-in-out both;
        }
      `}</style>
    </main>
  );
}
