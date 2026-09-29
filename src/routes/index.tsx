import { createFileRoute } from "@tanstack/react-router";

const cursos = [
  ["NR 01", "Disposições Gerais e Gerenciamento de Riscos Ocupacionais"],
  ["NR 05", "CIPA — Comissão Interna de Prevenção de Acidentes e Assédio"],
  ["NR 06", "Equipamentos de Proteção Individual — EPI"],
  ["NR 11", "Transporte, Movimentação, Armazenagem e Manuseio de Materiais"],
  ["NR 12", "Segurança no Trabalho em Máquinas e Equipamentos"],
  ["NR 17", "Ergonomia"],
];

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f7fa",
        color: "#172033",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <header style={{ background: "#ffffff", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "22px 24px" }}>
          <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: 3, color: "#1769e0" }}>
            IBRAST
          </div>
        </div>
      </header>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "55px 24px 35px" }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: "#1769e0" }}>
          CURSOS ONLINE
        </div>
        <h1 style={{ margin: "10px 0 12px", fontSize: 42, lineHeight: 1.1 }}>
          Segurança do Trabalho
        </h1>
        <p style={{ margin: 0, color: "#667085", fontSize: 18 }}>
          Cursos de Normas Regulamentadoras de forma simples e objetiva.
        </p>
      </section>

      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px 70px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
        }}
      >
        {cursos.map(([nr, nome]) => (
          <article
            key={nr}
            style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: "#1769e0",
                color: "#ffffff",
                padding: "28px 24px",
                fontSize: 30,
                fontWeight: 800,
              }}
            >
              {nr}
            </div>
            <div style={{ padding: 24 }}>
              <h2 style={{ margin: 0, minHeight: 76, fontSize: 18, lineHeight: 1.45 }}>
                {nome}
              </h2>
              <div style={{ display: "grid", gap: 10, marginTop: 24 }}>
                <button
                  type="button"
                  style={{
                    height: 44,
                    border: "1px solid #d0d5dd",
                    borderRadius: 8,
                    background: "#ffffff",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Saiba mais
                </button>
                <button
                  type="button"
                  style={{
                    height: 44,
                    border: 0,
                    borderRadius: 8,
                    background: "#1769e0",
                    color: "#ffffff",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Comprar agora
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <footer
        style={{
          borderTop: "1px solid #e5e7eb",
          background: "#ffffff",
          padding: "25px 24px",
          textAlign: "center",
          color: "#667085",
          fontSize: 14,
        }}
      >
        © {new Date().getFullYear()} IBRAST
      </footer>
    </main>
  );
}
