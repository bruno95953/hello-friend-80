import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/curso/nr-05")({
  component: NR05,
});

function NR05() {
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
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "18px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <a href="/" style={{ textDecoration: "none" }}>
            <img
              src="/logo-ibrast.svg"
              alt="IBRAST"
              style={{ width: 170, height: 44, objectFit: "contain" }}
            />
          </a>
          <a
            href="https://dashboard.kiwify.com/courses"
            target="_blank"
            rel="noreferrer"
            style={{
              height: 42,
              padding: "0 20px",
              border: "1px solid #1769e0",
              borderRadius: 8,
              background: "#ffffff",
              color: "#1769e0",
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            Área do Aluno
          </a>
        </div>
      </header>

      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "55px 24px 45px",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 45,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-block",
              padding: "7px 12px",
              borderRadius: 999,
              background: "#e8f1ff",
              color: "#1769e0",
              fontSize: 13,
              fontWeight: 800,
              marginBottom: 18,
            }}
          >
            CURSO ONLINE • NR-05
          </div>

          <h1 style={{ margin: 0, fontSize: 42, lineHeight: 1.1 }}>
            NR-05 — CIPA
          </h1>

          <p
            style={{
              margin: "18px 0 0",
              fontSize: 20,
              lineHeight: 1.55,
              color: "#475467",
            }}
          >
            Capacitação para quem precisa entender as responsabilidades da CIPA
            e cumprir os requisitos de treinamento previstos na NR-05.
          </p>

          <a
            href="#comprar"
            style={{
              marginTop: 28,
              height: 50,
              padding: "0 28px",
              borderRadius: 8,
              background: "#1769e0",
              color: "#ffffff",
              fontWeight: 800,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              fontSize: 16,
            }}
          >
            QUERO FAZER O CURSO
          </a>
        </div>

        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 8px 25px rgba(16, 24, 40, 0.06)",
          }}
        >
          <img
            src="https://i.postimg.cc/5N0N6626/NR-05-modelo.png"
            alt="Curso NR-05 CIPA"
            style={{ width: "100%", display: "block", objectFit: "cover" }}
          />
        </div>
      </section>

      <section style={{ background: "#ffffff", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
          <h2 style={{ margin: "0 0 14px", fontSize: 30 }}>
            Para que serve o curso NR-05?
          </h2>
          <p style={{ maxWidth: 850, margin: 0, color: "#475467", fontSize: 17, lineHeight: 1.7 }}>
            A NR-05 trata da Comissão Interna de Prevenção de Acidentes e de Assédio
            (CIPA), que tem como objetivo prevenir acidentes e doenças relacionadas
            ao trabalho. O treinamento prepara os participantes para compreender
            a organização da CIPA, seus objetivos e suas atribuições.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
        <h2 style={{ margin: "0 0 24px", fontSize: 30 }}>
          O que você vai aprender
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 16,
          }}
        >
          {[
            "Organização e funcionamento da CIPA",
            "Identificação dos riscos no ambiente de trabalho",
            "Prevenção de acidentes e doenças relacionadas ao trabalho",
            "Investigação e análise de acidentes",
            "Princípios de higiene do trabalho e medidas de prevenção",
            "Legislação de Segurança e Saúde no Trabalho",
            "Inclusão de pessoas com deficiência e reabilitados",
            "Prevenção e combate ao assédio e outras formas de violência no trabalho",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: 10,
                padding: "18px 20px",
                fontWeight: 700,
                lineHeight: 1.45,
              }}
            >
              <span style={{ color: "#1769e0", marginRight: 8 }}>✓</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          background: "#eef5ff",
          borderTop: "1px solid #dbeafe",
          borderBottom: "1px solid #dbeafe",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
          <h2 style={{ margin: "0 0 26px", fontSize: 30 }}>
            Precisa fazer o treinamento, mas está sem tempo?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 18,
            }}
          >
            {[
              ["⏰", "Estude no seu horário", "Faça sua capacitação online sem precisar se deslocar para uma sala de treinamento."],
              ["💻", "100% online", "Acesse o curso pelo computador ou celular, de onde estiver."],
              ["📚", "Conteúdo objetivo", "Estude os principais temas relacionados à NR-05 e à atuação da CIPA."],
              ["🎓", "Certificado", "Após concluir o treinamento, tenha acesso ao seu certificado."],
            ].map(([icon, title, text]) => (
              <div key={title} style={{ background: "#ffffff", borderRadius: 12, padding: 22 }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{icon}</div>
                <div style={{ fontWeight: 800, marginBottom: 7 }}>{title}</div>
                <div style={{ color: "#667085", fontSize: 14, lineHeight: 1.55 }}>{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="comprar" style={{ maxWidth: 1100, margin: "0 auto", padding: "55px 24px 70px" }}>
        <div
          style={{
            background: "#111827",
            color: "#ffffff",
            borderRadius: 16,
            padding: "38px 30px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: 1.5, color: "#93c5fd" }}>
            NR-05 • CIPA
          </div>
          <h2 style={{ margin: "10px 0 12px", fontSize: 32 }}>
            Pronto para fazer sua capacitação?
          </h2>
          <p style={{ margin: "0 auto 24px", maxWidth: 650, color: "#cbd5e1", lineHeight: 1.6 }}>
            Comece sua capacitação online e estude de onde estiver, no seu ritmo.
            Ao concluir o treinamento, receba seu certificado.
          </p>
          <a
            href="#"
            style={{
              height: 50,
              padding: "0 32px",
              borderRadius: 8,
              background: "#1769e0",
              color: "#ffffff",
              fontWeight: 800,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              fontSize: 16,
            }}
          >
            COMPRAR CURSO
          </a>
        </div>
      </section>

      <footer
        style={{
          background: "#111827",
          borderTop: "1px solid #1f2937",
          color: "#94a3b8",
          textAlign: "center",
          padding: "20px 24px",
          fontSize: 12,
        }}
      >
        © {new Date().getFullYear()} IBRAST. Todos os direitos reservados.
      </footer>
    </main>
  );
}
