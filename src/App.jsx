import { useEffect, useState } from "react";
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
  Layers3,
  Cpu,
  GraduationCap,
  Briefcase,
  FileText,
  ChevronsDown,
} from "lucide-react";

const projetos = [
  {
    titulo: "Sistema de Controle de Estoque",
    descricao:
      "Aplicação voltada para gerenciamento de produtos, atualização de quantidades e organização de estoque, inspirada em operações logísticas reais.",
    link: "https://controle-estoque-react-wheat.vercel.app",
    techs: ["React", "JavaScript", "SQL"],
    destaque: "Projeto principal",
  },
  {
    titulo: "Cadastro de Clientes",
    descricao:
      "Sistema CRUD para cadastro, listagem, edição e remoção de clientes, com foco em organização de dados e lógica de programação.",
    link: "https://cadastro-clientes-react-green.vercel.app",
    techs: ["React", "JavaScript", "CSS"],
    destaque: "CRUD",
  },
  {
    titulo: "Dashboard Logístico",
    descricao:
      "Painel para acompanhamento de indicadores operacionais, estoque e organização de dados voltados ao contexto logístico.",
    link: "https://dashboard-logistico.vercel.app",
    techs: ["Power BI", "Excel", "SQL"],
    destaque: "Dados",
  },
  {
    titulo: "TCC - Computação Quântica",
    descricao:
      "Trabalho acadêmico sobre fundamentos, algoritmos e aplicações da computação quântica na ciência da computação e tecnologias do futuro.",
    link: "tcc-joao-pedro-c9y10yn1t-jprvenancios-projects.vercel.app",
    techs: ["Pesquisa", "Computação Quântica", "Algoritmos"],
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
    extra: "Projetos, software e soluções",
    icon: <Sparkles size={20} />,
  },
  {
    titulo: "Base",
    valor: "Banco de Dados e Lógica",
    extra: "SQL, estrutura e raciocínio",
    icon: <Database size={20} />,
  },
  {
    titulo: "Experiência",
    valor: "Suporte e Operações",
    extra: "Vivência prática em ambiente real",
    icon: <ShieldCheck size={20} />,
  },
  {
    titulo: "Interesse",
    valor: "Dados e Software",
    extra: "Tecnologia aplicada a problemas",
    icon: <BarChart3 size={20} />,
  },
];

const quickInfo = [
  {
    icon: <Cpu size={18} />,
    label: "Estudante de Ciência da Computação",
  },
  {
    icon: <Layers3 size={18} />,
    label: "Experiência em TI e Suporte Técnico",
  },
  {
    icon: <Database size={18} />,
    label: "Interesse em Dados, Banco de Dados e Desenvolvimento",
  },
];

const tags = [
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
];

export default function App() {
  const [showScrollHints, setShowScrollHints] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollHints(window.scrollY < 80);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050816] text-white selection:bg-cyan-400/20 selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-[-10%] top-[10%] h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[20%] h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#inicio"
            className="text-xl font-black tracking-[0.2em] text-cyan-300"
          >
            JP
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#sobre" className="transition hover:text-cyan-300">
              Sobre
            </a>
            <a href="#habilidades" className="transition hover:text-cyan-300">
              Habilidades
            </a>
            <a href="#projetos" className="transition hover:text-cyan-300">
              Projetos
            </a>
            <a href="#contato" className="transition hover:text-cyan-300">
              Contato
            </a>
          </nav>

          <a
            href="#contato"
            className="hidden rounded-full border border-cyan-400/30 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/10 md:inline-flex"
          >
            Vamos conversar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative flex min-h-[94vh] items-center overflow-hidden"
      >
        <img
          src="/banner.png"
          alt="Banner tecnológico"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/85 to-[#050816]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.16),transparent_25%)]" />

        {/* SETAS LATERAIS VISUAIS */}
        <div
          className={`pointer-events-none absolute inset-y-0 left-4 z-20 hidden items-center md:flex transition-all duration-500 ${
            showScrollHints
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-4"
          }`}
        >
          <div className="flex flex-col items-center gap-1 text-cyan-300/70">
            <ChevronsDown size={26} className="animate-bounce" />
            <ChevronsDown size={26} className="-mt-3 animate-bounce" />
          </div>
        </div>

        <div
          className={`pointer-events-none absolute inset-y-0 right-4 z-20 hidden items-center md:flex transition-all duration-500 ${
            showScrollHints
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-4"
          }`}
        >
          <div className="flex flex-col items-center gap-1 text-cyan-300/70">
            <ChevronsDown size={26} className="animate-bounce" />
            <ChevronsDown size={26} className="-mt-3 animate-bounce" />
          </div>
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
          <div className="flex flex-col justify-center">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-sm font-medium text-cyan-200">
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

            {/* BOTÕES + CURRÍCULO PEQUENO */}
            <div className="mt-8 flex flex-wrap items-stretch gap-4">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:scale-[1.03] hover:bg-cyan-300"
              >
                Ver Projetos
                <ArrowRight size={18} />
              </a>

              <a
                href="/curriculo-joao-pedro.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-white/5 px-5 py-3 font-semibold text-cyan-200 transition duration-300 hover:scale-[1.03] hover:border-cyan-300/40 hover:bg-cyan-400/10"
              >
                <FileText size={18} />
                Currículo
              </a>

              <a
                href="#contato"
                className="rounded-xl border border-violet-400/30 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-violet-500 hover:text-white"
              >
                Contato
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["React", "JavaScript", "SQL", "TI", "Dados"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-1">
              {quickInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-300"
                >
                  <span className="text-cyan-300">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[28px] border border-cyan-400/20 bg-white/5 p-3 shadow-2xl shadow-black/30 backdrop-blur">
              <img
                src="/perfil.png"
                alt="João Pedro"
                className="h-[420px] w-full rounded-[22px] object-cover object-center"
              />
            </div>

            <div className="grid w-full gap-4 sm:grid-cols-2">
              {stats.map((item) => (
                <div
                  key={item.titulo}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/10"
                >
                  <div className="flex items-center gap-2 text-cyan-300 transition group-hover:text-cyan-200">
                    {item.icon}
                    <span className="text-sm font-medium text-slate-400 group-hover:text-slate-200">
                      {item.titulo}
                    </span>
                  </div>
                  <p className="mt-3 text-lg font-semibold text-white">
                    {item.valor}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400 group-hover:text-slate-300">
                    {item.extra}
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
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Sobre
          </span>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">Sobre mim</h2>
          <div className="mt-4 h-1 w-24 rounded-full bg-cyan-400" />
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

          <div className="rounded-3xl border border-violet-400/20 bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-500/10 p-8 transition duration-300 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-950/20">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
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
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Habilidades
          </span>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Conhecimentos em destaque
          </h2>
          <div className="mt-4 h-1 w-24 rounded-full bg-cyan-400" />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {habilidades.map((item) => (
                <div
                  key={item.titulo}
                  className="group rounded-3xl border border-white/10 bg-[#0d1324]/90 p-6 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-[#111a30]"
                >
                  <div className="text-cyan-300 transition duration-300 group-hover:text-cyan-200">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">
                    {item.titulo}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-400">{item.descricao}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap gap-3">
                {tags.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 transition duration-300 hover:scale-[1.03] hover:border-cyan-300/40 hover:bg-cyan-400/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/5 to-violet-500/10 p-6 shadow-lg shadow-black/20">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Resumo técnico
            </p>
            <h3 className="mt-4 text-2xl font-bold text-white">
              Competências em evolução
            </h3>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <GraduationCap className="mt-1 text-cyan-300" size={20} />
                <div>
                  <p className="font-semibold text-white">Formação</p>
                  <p className="text-sm leading-6 text-slate-400">
                    Graduação em Ciência da Computação com foco em fundamentos,
                    algoritmos, dados e tecnologia.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <Briefcase className="mt-1 text-cyan-300" size={20} />
                <div>
                  <p className="font-semibold text-white">Vivência prática</p>
                  <p className="text-sm leading-6 text-slate-400">
                    Atuação com suporte técnico, manutenção, organização de processos
                    e aprendizado aplicado em ambiente real.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <Code2 className="mt-1 text-cyan-300" size={20} />
                <div>
                  <p className="font-semibold text-white">Direção profissional</p>
                  <p className="text-sm leading-6 text-slate-400">
                    Construção de portfólio, projetos práticos e fortalecimento da base
                    para oportunidades em TI e desenvolvimento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Projetos
          </span>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Trabalhos em destaque
          </h2>
          <div className="mt-4 h-1 w-24 rounded-full bg-cyan-400" />
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
              className="group rounded-3xl border border-white/10 bg-[#0d1324]/90 p-6 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-[#111a30]"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-200 transition group-hover:bg-violet-500/20">
                    {projeto.destaque}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-white">
                    {projeto.titulo}
                  </h3>
                </div>

                <ExternalLink
                  size={20}
                  className="mt-1 text-slate-500 transition group-hover:text-cyan-300"
                />
              </div>

              <p className="leading-7 text-slate-400">{projeto.descricao}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {projeto.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300 transition group-hover:border-cyan-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
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
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/5 to-violet-500/10 p-8 shadow-lg shadow-black/20 md:p-10">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Contato
          </span>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Vamos nos conectar
          </h2>
          <div className="mt-4 h-1 w-24 rounded-full bg-cyan-400" />

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Estou aberto a oportunidades, conexões e projetos.
            Você pode me encontrar pelos canais abaixo.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/JprVenancio"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-5 py-3 transition duration-300 hover:border-cyan-400/30 hover:bg-black/60 hover:scale-[1.02]"
            >
              <Github size={22} className="text-cyan-300" />
              <span className="font-medium text-white">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/joão-pedro-rodrigues-venancio-688588235"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-5 py-3 transition duration-300 hover:border-cyan-400/30 hover:bg-black/60 hover:scale-[1.02]"
            >
              <Linkedin size={22} className="text-cyan-300" />
              <span className="font-medium text-white">LinkedIn</span>
            </a>

            <a
              href="mailto:Jprvenancio2304@gmail.com"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-5 py-3 transition duration-300 hover:border-cyan-400/30 hover:bg-black/60 hover:scale-[1.02]"
            >
              <Mail size={22} className="text-cyan-300" />
              <span className="font-medium text-white">Email</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 João Pedro Rodrigues Venâncio. Portfólio desenvolvido com React e Tailwind CSS.
      </footer>
    </div>
  );
}