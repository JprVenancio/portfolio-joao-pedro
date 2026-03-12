import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  MonitorSmartphone,
  BrainCircuit,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

const projetos = [
  {
    titulo: "Sistema de Controle de Estoque",
    descricao:
      "Projeto inspirado em operações logísticas para gerenciamento de produtos, quantidades e organização de estoque.",
    link: "https://github.com/JprVenancio",
    techs: ["React", "JavaScript", "SQL"],
    destaque: "Projeto prático",
  },
  {
    titulo: "Cadastro de Clientes",
    descricao:
      "Aplicação CRUD para cadastro, listagem, edição e gerenciamento de clientes.",
    link: "https://github.com/JprVenancio",
    techs: ["React", "JavaScript", "CSS"],
    destaque: "CRUD",
  },
  {
    titulo: "Dashboard Logístico",
    descricao:
      "Painel para análise de dados operacionais, estoque e indicadores logísticos.",
    link: "https://github.com/JprVenancio",
    techs: ["Power BI", "Excel", "SQL"],
    destaque: "Dados",
  },
  {
    titulo: "TCC - Computação Quântica",
    descricao:
      "Estudo sobre fundamentos, algoritmos e aplicações da computação quântica na ciência da computação.",
    link: "https://github.com/JprVenancio",
    techs: ["Pesquisa", "Computação Quântica"],
    destaque: "Acadêmico",
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

const stats = [
  {
    titulo: "Foco",
    valor: "TI e Desenvolvimento",
    icon: <Sparkles size={20} />,
  },
  {
    titulo: "Base",
    valor: "Banco de Dados e Lógica",
    icon: <Database size={20} />,
  },
  {
    titulo: "Experiência",
    valor: "Suporte e Operações",
    icon: <ShieldCheck size={20} />,
  },
  {
    titulo: "Interesse",
    valor: "Dados e Software",
    icon: <BarChart3 size={20} />,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#070707] text-white selection:bg-orange-500/30 selection:text-white">
      {/* FUNDO DECORATIVO */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute right-[-10%] top-[10%] h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[20%] h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#inicio"
            className="text-xl font-black tracking-[0.2em] text-orange-400"
          >
            JP
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#sobre" className="transition hover:text-orange-400">
              Sobre
            </a>
            <a href="#habilidades" className="transition hover:text-orange-400">
              Habilidades
            </a>
            <a href="#projetos" className="transition hover:text-orange-400">
              Projetos
            </a>
            <a href="#contato" className="transition hover:text-orange-400">
              Contato
            </a>
          </nav>

          <a
            href="#contato"
            className="hidden rounded-full border border-orange-500/40 px-4 py-2 text-sm font-medium text-orange-300 transition hover:bg-orange-500/10 md:inline-flex"
          >
            Vamos conversar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative flex min-h-[88vh] items-center overflow-hidden"
      >
        <img
          src="/banner.jpg"
          alt="Banner tecnológico"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.15),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_25%)]" />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28">
          <div className="flex flex-col justify-center">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-300">
              <Sparkles size={16} />
              Portfólio de Tecnologia
            </span>

            <h1 className="max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
              João Pedro Rodrigues Venâncio
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Estudante de Ciência da Computação com experiência em TI,
              banco de dados, programação e suporte técnico. Construindo
              projetos para evoluir profissionalmente e conquistar
              oportunidades sólidas na área de tecnologia.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-black transition hover:scale-[1.02] hover:bg-orange-400"
              >
                Ver Projetos
                <ArrowRight size={18} />
              </a>

              <a
                href="#contato"
                className="rounded-xl border border-orange-500/40 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-orange-500 hover:text-black"
              >
                Contato
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["React", "JavaScript", "SQL", "TI", "Dados"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-end">
            <div className="grid w-full gap-4 sm:grid-cols-2">
              {stats.map((item) => (
                <div
                  key={item.titulo}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20 backdrop-blur"
                >
                  <div className="flex items-center gap-2 text-orange-400">
                    {item.icon}
                    <span className="text-sm font-medium text-slate-400">
                      {item.titulo}
                    </span>
                  </div>
                  <p className="mt-3 text-lg font-semibold text-white">
                    {item.valor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            Sobre
          </span>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">Sobre mim</h2>
          <div className="mt-4 h-1 w-24 rounded-full bg-orange-500" />
        </div>

        <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/20">
            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              Sou estudante de Ciência da Computação com interesse em
              desenvolvimento de software, banco de dados, análise de dados
              e tecnologia aplicada a problemas reais. Tenho experiência
              em TI com suporte técnico, manutenção, modelagem de dados,
              processos de organização de informações e aprendizado prático
              em ambientes profissionais.
            </p>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
              Busco oportunidades para aplicar meus conhecimentos técnicos,
              continuar evoluindo e construir soluções eficientes que gerem valor
              para empresas e pessoas.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 via-transparent to-fuchsia-500/10 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
              Objetivo
            </p>
            <h3 className="mt-4 text-2xl font-bold text-white">
              Crescer na área de tecnologia
            </h3>
            <p className="mt-4 leading-7 text-slate-300">
              Desenvolver projetos consistentes, fortalecer meu portfólio
              e conquistar oportunidades em TI, desenvolvimento e dados.
            </p>
          </div>
        </div>
      </section>

      {/* HABILIDADES */}
      <section id="habilidades" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            Habilidades
          </span>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Conhecimentos em destaque
          </h2>
          <div className="mt-4 h-1 w-24 rounded-full bg-orange-500" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {habilidades.map((item) => (
            <div
              key={item.titulo}
              className="rounded-3xl border border-white/10 bg-[#111111]/90 p-6 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-orange-950/20"
            >
              <div className="text-orange-400">{item.icon}</div>
              <h3 className="mt-4 text-xl font-bold text-white">
                {item.titulo}
              </h3>
              <p className="mt-3 leading-7 text-slate-400">{item.descricao}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-wrap gap-3">
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
                className="rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            Projetos
          </span>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Trabalhos em destaque
          </h2>
          <div className="mt-4 h-1 w-24 rounded-full bg-orange-500" />
          <p className="mt-4 max-w-2xl text-slate-400">
            Alguns projetos e estudos que representam minha evolução na área de tecnologia.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projetos.map((projeto) => (
            <a
              key={projeto.titulo}
              href={projeto.link}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-white/10 bg-[#111111]/90 p-6 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-orange-950/20"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-300">
                    {projeto.destaque}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-white">
                    {projeto.titulo}
                  </h3>
                </div>

                <ExternalLink
                  size={20}
                  className="mt-1 text-slate-500 transition group-hover:text-orange-400"
                />
              </div>

              <p className="leading-7 text-slate-400">{projeto.descricao}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {projeto.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-300">
                Ver projeto
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/10 via-white/5 to-fuchsia-500/10 p-8 shadow-lg shadow-black/20 md:p-10">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            Contato
          </span>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Vamos nos conectar
          </h2>
          <div className="mt-4 h-1 w-24 rounded-full bg-orange-500" />

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Estou aberto a oportunidades, conexões e projetos.
            Você pode me encontrar pelos canais abaixo.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/JprVenancio"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-5 py-3 transition hover:border-orange-500/40 hover:bg-black/60"
            >
              <Github size={22} className="text-orange-400" />
              <span className="font-medium text-white">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/joão-pedro-rodrigues-venancio-688588235"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-5 py-3 transition hover:border-orange-500/40 hover:bg-black/60"
            >
              <Linkedin size={22} className="text-orange-400" />
              <span className="font-medium text-white">LinkedIn</span>
            </a>

            <a
              href="mailto:Jprvenancio2304@gmail.com"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-5 py-3 transition hover:border-orange-500/40 hover:bg-black/60"
            >
              <Mail size={22} className="text-orange-400" />
              <span className="font-medium text-white">Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 João Pedro Rodrigues Venâncio. Portfólio desenvolvido com React e Tailwind CSS.
      </footer>
    </div>
  );
}