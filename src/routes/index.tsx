import { createFileRoute } from "@tanstack/react-router";

const cursos = [
  { nr: "NR 01", nome: "Disposições Gerais e Gerenciamento de Riscos Ocupacionais" },
  { nr: "NR 05", nome: "CIPA — Comissão Interna de Prevenção de Acidentes e Assédio" },
  { nr: "NR 06", nome: "Equipamentos de Proteção Individual — EPI" },
  { nr: "NR 11", nome: "Transporte, Movimentação, Armazenagem e Manuseio de Materiais" },
  { nr: "NR 12", nome: "Segurança no Trabalho em Máquinas e Equipamentos" },
  { nr: "NR 17", nome: "Ergonomia" },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "IBRAST | Cursos de Segurança do Trabalho" },
      {
        name: "description",
        content: "Cursos online de Normas Regulamentadoras e Segurança do Trabalho.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex h-20 max-w-6xl items-center px-6">
          <a href="/" className="text-2xl font-extrabold tracking-widest text-blue-600">
            IBRAST
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-10 pt-16">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
          IBRAST
        </p>
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          Cursos de Segurança do Trabalho
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Capacitação online em Normas Regulamentadoras, de forma simples e objetiva.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-6 pb-20 sm:grid-cols-2 lg:grid-cols-3">
        {cursos.map((curso) => (
          <article
            key={curso.nr}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="flex h-36 items-center justify-center bg-blue-600 text-3xl font-extrabold text-white">
              {curso.nr}
            </div>

            <div className="p-6">
              <p className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
                {curso.nr}
              </p>
              <h2 className="mt-2 min-h-24 text-lg font-bold leading-7 text-slate-900">
                {curso.nome}
              </h2>

              <div className="mt-6 grid gap-2">
                <button
                  type="button"
                  className="h-11 rounded-lg border border-slate-300 bg-white px-4 font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Saiba mais
                </button>
                <button
                  type="button"
                  className="h-11 rounded-lg bg-blue-600 px-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  Comprar agora
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <footer className="border-t bg-white py-7 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} IBRAST — Instituto Brasileiro de Normas Regulamentadoras e Segurança do Trabalho.
      </footer>
    </div>
  );
}
