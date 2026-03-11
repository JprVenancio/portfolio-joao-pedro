import { Github, Linkedin, Mail, ExternalLink, Code2, Database, MonitorSmartphone, BrainCircuit } from "lucide-react";

const projetos = [
  {
    titulo: "Sistema de Controle de Estoque",
    descricao:
      "Projeto inspirado em operações logísticas para gerenciamento de produtos, quantidades e organização de estoque.",
    link: "https://github.com/JprVenancio",
    techs: ["React", "JavaScript", "SQL"],
  },
  {
    titulo: "Cadastro de Clientes",
    descricao:
      "Aplicação CRUD para cadastro, listagem, edição e gerenciamento de clientes.",
    link: "https://github.com/JprVenancio",
    techs: ["React", "JavaScript", "CSS"],
  },
  {
    titulo: "Dashboard Logístico",
    descricao:
      "Painel para análise de dados operacionais, estoque e indicadores logísticos.",
    link: "https://github.com/JprVenancio",
    techs: ["Power BI", "Excel", "SQL"],
  },
  {
    titulo: "TCC - Computação Quântica",
    descricao:
      "Estudo sobre fundamentos, algoritmos e aplicações da computação quântica na ciência da computação.",
    link: "https://github.com/JprVenancio",
    techs: ["Pesquisa", "Computação Quântica"],
  },
];

const habilidades = [
  {
    titulo: "Programação",
    descricao: "Base em lógica, desenvolvimento e resolução de problemas.",
    icon: <Code2 size={28} />,
  },
  {
    titulo: "Banco de Dados",
    descricao: "Conhecimentos em SQL, modelagem e organização de dados.",
    icon: <Database size={28} />,
  },
  {
    titulo: "Suporte Técnico",
    descricao: "Vivência com manutenção, suporte e infraestrutura básica.",
    icon: <MonitorSmartphone size={28} />,
  },
  {
    titulo: "Tecnologia",
    descricao: "Interesse em software, dados, inovação e aprendizagem contínua.",
    icon: <BrainCircuit size={28} />,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto w-full px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wide text-cyan-300">JP</h1>

          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#sobre" className="hover:text-white transition">Sobre</a>
            <a href="#habilidades" className="hover:text-white transition">Habilidades</a>
            <a href="#projetos" className="hover:text-white transition">Projetos</a>
            <a href="#contato" className="hover:text-white transition">Contato</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto w-full px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm mb-6">
              Portfólio de Tecnologia
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              João Pedro Rodrigues Venâncio
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-8">
              Estudante de Ciência da Computação com experiência em TI,
              banco de dados, programação e suporte técnico.
              Construindo projetos para evoluir profissionalmente
              e conquistar oportunidades na área de tecnologia.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projetos"
                className="px-6 py-3 rounded-xl bg-cyan-400 text-slate-950 font-semibold hover:opacity-90 transition"
              >
                Ver projetos
              </a>

              <a
                href="#contato"
                className="px-6 py-3 rounded-xl border border-white/15 text-white hover:bg-white/5 transition"
              >
                Entrar em contato
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-white/10 rounded-3xl p-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-slate-900/70 border border-white/10 p-5">
                <p className="text-cyan-300 text-sm">Formação</p>
                <h3 className="mt-2 font-semibold">Ciência da Computação</h3>
              </div>

              <div className="rounded-2xl bg-slate-900/70 border border-white/10 p-5">
                <p className="text-cyan-300 text-sm">Foco</p>
                <h3 className="mt-2 font-semibold">TI e Desenvolvimento</h3>
              </div>

              <div className="rounded-2xl bg-slate-900/70 border border-white/10 p-5">
                <p className="text-cyan-300 text-sm">Interesses</p>
                <h3 className="mt-2 font-semibold">Dados e Software</h3>
              </div>

              <div className="rounded-2xl bg-slate-900/70 border border-white/10 p-5">
                <p className="text-cyan-300 text-sm">Objetivo</p>
                <h3 className="mt-2 font-semibold">Primeira oportunidade forte em TI</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="max-w-6xl mx-auto w-full px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Sobre mim</h2>
          <div className="w-24 h-1 bg-cyan-400 rounded-full mt-3" />
        </div>

        <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-8 md:p-10">
          <p className="text-slate-300 text-lg leading-8 max-w-4xl">
            Sou estudante de Ciência da Computação com interesse em
            desenvolvimento de software, banco de dados, análise de dados
            e tecnologia aplicada a problemas reais. Tenho experiência
            em TI com suporte técnico, manutenção, modelagem de dados,
            processos de organização de informações e aprendizado prático
            em ambientes profissionais.
          </p>

          <p className="text-slate-300 text-lg leading-8 max-w-4xl mt-6">
            Busco oportunidades para aplicar meus conhecimentos técnicos,
            continuar evoluindo e construir soluções eficientes que gerem valor
            para empresas e pessoas.
          </p>
        </div>
      </section>

      {/* HABILIDADES */}
      <section id="habilidades" className="max-w-6xl mx-auto w-full px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Habilidades</h2>
          <div className="w-24 h-1 bg-cyan-400 rounded-full mt-3" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {habilidades.map((item) => (
            <div
              key={item.titulo}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 hover:-translate-y-1 hover:border-cyan-400/30 transition"
            >
              <div className="text-cyan-300">{item.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{item.titulo}</h3>
              <p className="text-slate-400 mt-3 leading-7">{item.descricao}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {[
            "JavaScript",
            "React",
            "SQL",
            "MySQL",
            "Banco de Dados",
            "Lógica de Programação",
            "Suporte Técnico",
            "Redes Básicas",
            "Excel",
            "Análise de Dados",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="max-w-6xl mx-auto w-full px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Projetos</h2>
          <div className="w-24 h-1 bg-cyan-400 rounded-full mt-3" />
          <p className="text-slate-400 mt-4 max-w-2xl">
            Alguns projetos e estudos que representam minha evolução na área de tecnologia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projetos.map((projeto) => (
            <a
              key={projeto.titulo}
              href={projeto.link}
              target="_blank"
              rel="noreferrer"
              className="group bg-slate-900/60 border border-white/10 p-6 rounded-3xl shadow-lg shadow-black/20 hover:bg-slate-900 hover:border-cyan-400/30 hover:-translate-y-1 hover:shadow-cyan-950/30 transition duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold">{projeto.titulo}</h3>
                <ExternalLink
                  size={20}
                  className="text-slate-400 group-hover:text-cyan-300 transition"
                />
              </div>

              <p className="text-slate-400 mt-3 leading-7">
                {projeto.descricao}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {projeto.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="max-w-6xl mx-auto w-full px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold">Contato</h2>
          <div className="w-24 h-1 bg-cyan-400 rounded-full mt-3" />

          <p className="text-slate-300 mt-6 text-lg max-w-2xl leading-8">
            Estou aberto a oportunidades, conexões e projetos.
            Você pode me encontrar pelos canais abaixo.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/JprVenancio"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-950/70 border border-white/10 hover:border-cyan-400/30 transition"
            >
              <Github size={22} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/joão-pedro-rodrigues-venancio-688588235"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-950/70 border border-white/10 hover:border-cyan-400/30 transition"
            >
              <Linkedin size={22} />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:Jprvenancio2304@gmail.com"
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-950/70 border border-white/10 hover:border-cyan-400/30 transition"
            >
              <Mail size={22} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}