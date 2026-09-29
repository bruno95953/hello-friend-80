const cursos = [
  { nr: "NR 01", nome: "Disposições Gerais e Gerenciamento de Riscos Ocupacionais" },
  { nr: "NR 05", nome: "Comissão Interna de Prevenção de Acidentes e Assédio" },
  { nr: "NR 06", nome: "Equipamentos de Proteção Individual — EPI" },
  { nr: "NR 11", nome: "Transporte, Movimentação, Armazenagem e Manuseio de Materiais" },
  { nr: "NR 12", nome: "Segurança no Trabalho em Máquinas e Equipamentos" },
  { nr: "NR 17", nome: "Ergonomia" },
];

export default function App() {
  return (
    <main className="site">
      <header className="header">
        <div className="container header-inner">
          <a className="logo" href="/" aria-label="IBRAST">IBRAST</a>
        </div>
      </header>

      <section className="hero container">
        <span className="eyebrow">IBRAST</span>
        <h1>Cursos de Segurança do Trabalho</h1>
        <p>Capacitação online em Normas Regulamentadoras, de forma simples e objetiva.</p>
      </section>

      <section className="container courses" aria-label="Cursos disponíveis">
        {cursos.map((curso) => (
          <article className="course-card" key={curso.nr}>
            <div className="course-image">{curso.nr}</div>
            <div className="course-content">
              <span className="course-nr">{curso.nr}</span>
              <h2>{curso.nome}</h2>
              <div className="actions">
                <button className="secondary">Saiba mais</button>
                <button className="primary">Comprar agora</button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} IBRAST — Instituto Brasileiro de Normas Regulamentadoras e Segurança do Trabalho.</div>
      </footer>
    </main>
  );
}
