import { createFileRoute } from "@tanstack/react-router";

const cursos: [string, string, string][] = [
  ["NR 05", "CIPA — Comissão Interna de Prevenção de Acidentes e Assédio", "https://i.postimg.cc/5N0N6626/NR-05-modelo.png"],
  ["NR 06", "Equipamentos de Proteção Individual — EPI", "https://i.postimg.cc/m2D2ttgc/NR-06.png"],
  ["NR 11", "Transporte, Movimentação, Armazenagem e Manuseio de Materiais", "https://i.postimg.cc/PrxrPP5p/NR-11.png"],
  ["NR 12", "Segurança no Trabalho em Máquinas e Equipamentos", "https://i.postimg.cc/Wb3bhh1q/NR-12.png"],
  ["NR 18", "Segurança e Saúde no Trabalho na Indústria da Construção", "https://i.postimg.cc/7Y6YffZT/NR-18.png"],
  ["NR 33", "Segurança e Saúde nos Trabalhos em Espaços Confinados", "https://i.postimg.cc/gkJknn2h/NR-33.png"],
  ["NR 35", "Trabalho em Altura", "https://i.postimg.cc/3JRJddxp/NR-35.png"],
];

const links: Record<string, string> = {
  "NR 05": "https://pay.kiwify.com.br/VxNl1UR",
  "NR 06": "https://pay.kiwify.com.br/2KvHXy6",
  "NR 11": "https://pay.kiwify.com.br/zNpAdIp",
  "NR 12": "https://pay.kiwify.com.br/3opi4yO",
  "NR 18": "https://pay.kiwify.com.br/8xi5vEm",
  "NR 33": "https://pay.kiwify.com.br/eYRPtlf",
  "NR 35": "https://pay.kiwify.com.br/985FE72",
};

const precos: Record<string, string> = {
  "NR 05": "R$ 79,90",
  "NR 06": "R$ 79,90",
  "NR 11": "R$ 79,90",
  "NR 12": "R$ 89,90",
  "NR 18": "R$ 79,90",
  "NR 33": "R$ 79,90",
  "NR 35": "R$ 79,90",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IBRAST | Cursos de Segurança do Trabalho" },
      {
        name: "description",
        content:
          "Cursos online de Normas Regulamentadoras (NRs) — capacitação em Segurança do Trabalho de forma simples e objetiva.",
      },
      {
        property: "og:title",
        content: "IBRAST | Cursos de Segurança do Trabalho",
      },
      {
        property: "og:description",
        content:
          "Cursos online de Normas Regulamentadoras (NRs) — capacitação em Segurança do Trabalho de forma simples e objetiva.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
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
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "18px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
          <a href="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
            <img src="/logo-ibrast.svg" alt="IBRAST" style={{ width: 170, height: 44, objectFit: "contain" }} />
          </a>
          <a href="https://dashboard.kiwify.com/courses" target="_blank" rel="noreferrer" style={{ height: 42, padding: "0 20px", border: "1px solid #1769e0", borderRadius: 8, background: "#ffffff", color: "#1769e0", fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
            Área do Aluno
          </a>
        </div>
      </header>

      <section
        style={{
          maxWidth: 1100,
          margin: "20px auto 0",
          padding: "22px 24px",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: 14,
            padding: "22px 24px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: 800,
              marginBottom: 20,
            }}
          >
            COMPRE COM SEGURANÇA E RECEBA RAPIDAMENTE
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 18,
            }}
          >
            <div style={{ textAlign: "center", padding: "4px 10px" }}>
              <div style={{ fontSize: 27, marginBottom: 8 }}>🔒</div>
              <div style={{ fontWeight: 700, marginBottom: 5 }}>Pagamento seguro</div>
              <div style={{ color: "#667085", fontSize: 14, lineHeight: 1.45 }}>
                Sua compra é processada com segurança pela Kiwify.
              </div>
            </div>

            <div style={{ textAlign: "center", padding: "4px 10px" }}>
              <div style={{ fontSize: 27, marginBottom: 8 }}>📚</div>
              <div style={{ fontWeight: 700, marginBottom: 5 }}>
                Conforme as Normas Regulamentadoras
              </div>
              <div style={{ color: "#667085", fontSize: 14, lineHeight: 1.45 }}>
                Cursos desenvolvidos com conteúdo baseado nas Normas Regulamentadoras (NRs) de Segurança e Saúde no Trabalho.
              </div>
            </div>

            <div style={{ textAlign: "center", padding: "4px 10px" }}>
              <div style={{ fontSize: 27, marginBottom: 8 }}>💻</div>
              <div style={{ fontWeight: 700, marginBottom: 5 }}>
                Acesso imediato e 100% online
              </div>
              <div style={{ color: "#667085", fontSize: 14, lineHeight: 1.45 }}>
                Após a confirmação do pagamento, receba imediatamente no seu e-mail os dados para acessar o curso. Estude onde e quando quiser, pelo celular ou computador.
              </div>
            </div>

            <div style={{ textAlign: "center", padding: "4px 10px" }}>
              <div style={{ fontSize: 27, marginBottom: 8 }}>🎓</div>
              <div style={{ fontWeight: 700, marginBottom: 5 }}>Certificado</div>
              <div style={{ color: "#667085", fontSize: 14, lineHeight: 1.45 }}>
                Conclua o curso e receba seu certificado de conclusão, emitido conforme os requisitos aplicáveis das Normas Regulamentadoras (NRs) do Ministério do Trabalho, com validade em todo o território brasileiro.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "30px 24px 35px" }}>
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
        {cursos.map(([nr, nome, imagem]) => (
          <article
            key={nr}
            style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: 14,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ height: 190, background: "#f8fafc" }}>
              <img
                src={imagem}
                alt={`Capa do curso ${nr}`}
                style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: 24, display: "flex", flexDirection: "column", flex: 1 }}>
              <h2 style={{ margin: 0, minHeight: 76, fontSize: 18, lineHeight: 1.45 }}>
                {nr} - {nome}
              </h2>
              <div
                style={{
                  marginTop: 16,
                  display: "flex",
                  alignItems: "baseline",
                  gap: 8,
                  flexWrap: "wrap",
                }}
              >
                <span style={{ color: "#667085", fontSize: 13, fontWeight: 700 }}>
                  Por apenas
                </span>
                <span style={{ color: "#172033", fontSize: 26, fontWeight: 800, lineHeight: 1 }}>
                  {precos[nr] ?? "R$ 79,90"}
                </span>
              </div>
              <div style={{ display: "grid", gap: 10, marginTop: 18 }}>
                <a
                  href={`/curso/${nr.toLowerCase().replace(" ", "-")}`}
                  style={{
                    height: 44,
                    border: "1px solid #d0d5dd",
                    borderRadius: 8,
                    background: "#ffffff",
                    color: "#172033",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  Saiba mais
                </a>
                <a
                  href={links[nr] ?? "#"}
                  target={links[nr] ? "_blank" : undefined}
                  rel="noreferrer"
                  style={{
                    height: 44,
                    border: 0,
                    borderRadius: 8,
                    background: "#1769e0",
                    color: "#ffffff",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  Comprar agora
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <footer
        style={{
          marginTop: 10,
          background: "#111827",
          color: "#ffffff",
          borderTop: "1px solid #1f2937",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "48px 24px 30px",
            display: "grid",
            gridTemplateColumns: "minmax(260px, 1.5fr) repeat(2, minmax(170px, 1fr))",
            gap: 40,
          }}
        >
          <div>
            <div
              style={{
                marginBottom: 16,
                color: "#ffffff",
                fontSize: 28,
                fontWeight: 800,
                letterSpacing: 1,
                lineHeight: 1,
              }}
            >
              IBRAST
            </div>
            <p
              style={{
                margin: 0,
                maxWidth: 360,
                color: "#cbd5e1",
                fontSize: 14,
                lineHeight: 1.7,
              }}
            >
              Consiga seu certificado sem complicação. Faça sua capacitação online,
              de onde estiver, em qualquer dia e horário, e após a conclusão receba seu certificado imediatamente.
            </p>
          </div>

          <div>
            <div style={{ fontWeight: 800, marginBottom: 16, fontSize: 15 }}>
              Cursos
            </div>
            <div style={{ display: "grid", gap: 9, fontSize: 14 }}>
              {(
                [
                  ["NR 05", "CIPA"],
                  ["NR 06", "EPI"],
                  ["NR 11", "Materiais"],
                  ["NR 12", "Máquinas"],
                  ["NR 18", "Construção"],
                  ["NR 33", "Espaços Confinados"],
                  ["NR 35", "Trabalho em Altura"],
                ] as const
              ).map(([nr, nome]) => (
                <a
                  key={nr}
                  href={`/curso/${nr.toLowerCase().replace(" ", "-")}`}
                  style={{ color: "#cbd5e1", textDecoration: "none" }}
                >
                  {nr} — {nome}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 800, marginBottom: 16, fontSize: 15 }}>
              Acesso
            </div>
            <div style={{ display: "grid", gap: 12 }}>
              <a
                href="https://dashboard.kiwify.com/courses"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#ffffff",
                  fontSize: 18,
                  fontWeight: 800,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  width: "fit-content",
                  borderBottom: "2px solid #1769e0",
                  paddingBottom: 4,
                }}
              >
                Área do Aluno
              </a>
              <a
                href="https://certificados-nr.ai.studio/consultar"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                Consultar Certificado
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #1f2937",
            maxWidth: 1100,
            margin: "0 auto",
            padding: "18px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
            color: "#94a3b8",
            fontSize: 12,
          }}
        >
          <span>© {new Date().getFullYear()} IBRAST. Todos os direitos reservados.</span>
          <span>Pagamento e acesso processados pela Kiwify.</span>
        </div>
      </footer>
    </main>
  );
}
