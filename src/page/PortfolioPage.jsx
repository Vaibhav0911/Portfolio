export default function PortfolioPage() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#journey" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const skills = {
    Core: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],

    Backend: ["REST APIs", "JWT Authentication", "Mongoose", "API Integration"],

    Frontend: ["HTML", "CSS", "Tailwind CSS", "Redux"],

    Tools: ["Git", "GitHub", "Postman", "Cloudinary"],

    CS: ["Data Structures & Algorithms", "OOP", "Debugging"],
  };

  const journey = [
    {
      title: "Software Development Engineer Intern",
      org: "Binary Keeda",
      period: "Jun 2025 – Aug 2025",
      points: [
        "Built reusable React components and dynamic blog pages",
        "Converted unstructured data into structured JSON for rendering",
        "Improved UI/UX and component structure",
        "Worked with modern JavaScript and React best practices",
      ],
    },
    {
      title: "Master of Computer Applications (MCA)",
      org: "UPES",
      period: "Jul 2024 – Aug 2026",
      points: [
        "Focused on software development and full stack applications",
        "Built projects using React, Node.js, and MongoDB",
        "Strengthened problem solving through DSA practice",
      ],
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      org: "SRHU",
      period: "Jul 2021 – Jul 2024",
      points: [
        "Built strong foundation in programming and core CS concepts",
        "Worked with C++ and basic web development",
        "Developed fundamentals for backend and full stack development",
      ],
    },
  ];

  const projects = [
    {
      title: "Video Sharing Platform Backend",
      tag: "Backend",
      tech: ["Node.js", "Express.js", "MongoDB", "Cloudinary", "JWT"],
      description:
        "A scalable backend system focused on authentication, media handling, and modular API architecture.",
      features: [
        "Built a production-ready backend system focusing on scalability and clean architecture",
        "Designed APIs for user management, video handling, and interactions (likes/comments)",
        "Ensured secure authentication and efficient media handling pipeline",
      ],
      github: "https://github.com/Vaibhav0911/Video_Sharing_Backend",
    },
    {
      title: "Full Stack E-Commerce Application",
      tag: "Full Stack",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      description:
        "A MERN-based e-commerce platform with product management, cart flow, and authentication.",
      features: [
        "Built end-to-end MERN e-commerce application with real-world features",
        "Designed backend APIs for inventory, users, and orders",
        "Developed responsive UI with seamless shopping and checkout experience",
      ],
      github: "https://github.com/Vaibhav0911/E-commerce",
    },
    {
      title: "Blogging Platform",
      tag: "Frontend + Backend",
      tech: ["React", "Appwrite", "Tailwind CSS"],
      description:
        "A blogging platform with authentication, post management, and structured UI.",
      features: [
        "Developed a full-stack blogging platform using React and Appwrite",
        "Utilized Appwrite for user authentication, database management, and file storage",
        "Built a structured system for content creation, editing, and rendering",
      ],
      github: "https://github.com/Vaibhav0911/Blog_website",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-slate-900 selection:text-white">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#home"
            className="text-lg font-bold tracking-tight text-slate-900"
          >
            Vaibhav Chauhan
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-900 hover:underline underline-offset-4"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(15,23,42,0.08),_transparent_35%),radial-gradient(circle_at_left,_rgba(59,130,246,0.08),_transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <div className="mb-5 inline-flex w-fit items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm">
                Software Developer • MERN Stack • Backend & API Development
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
                Building scalable backend systems and full stack applications
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                I’m Vaibhav Chauhan, a Software Developer focused on building
                scalable web applications using the MERN stack. I specialize in
                backend development, REST API design, and creating clean,
                maintainable systems.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5"
                >
                  Explore Projects
                </a>
                <a
                  href="https://drive.google.com/file/d/1cFi4OBW4ce480EhaXFtvfXEembszl6sK/view?usp=drive_link"
                  className="rounded-full border border-slate-300 bg-transparent px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/80">
                <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-300">Focused Role</p>
                      <h3 className="mt-1 text-xl font-bold">
                        Software Developer
                      </h3>
                    </div>
                    <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                      Available
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/5 p-4">
                      <p className="text-sm text-slate-300">Core Stack</p>
                      <p className="mt-2 font-semibold">
                        React • Node • MongoDB
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4">
                      <p className="text-sm text-slate-300">Strength</p>
                      <p className="mt-2 font-semibold">Structured UI + APIs</p>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4">
                      <p className="text-sm text-slate-300">Problem Solving</p>
                      <p className="mt-2 font-semibold">1000+ LeetCode</p>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4">
                      <p className="text-sm text-slate-300">Current Goal</p>
                      <p className="mt-2 font-semibold">
                        Internship / Developer Role
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionWrapper
          id="about"
          eyebrow="About"
          title="A concise introduction recruiters can scan quickly."
        >
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-base leading-8 text-slate-600">
                I’m a software developer who enjoys building clean web products
                and solving practical engineering problems. My main interest is
                backend development, API design, and turning ideas into
                structured, maintainable applications.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">What I bring</h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                <li>
                  • Experience building real-world applications using MERN stack
                </li>
                <li>
                  • Strong backend fundamentals and API development skills
                </li>
                <li>
                  • Hands-on experience with React and component-based
                  architecture
                </li>
                <li>
                  • Consistent problem-solving mindset
                </li>
              </ul>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper
          id="skills"
          eyebrow="Skills"
          title="Organized tech stack with only relevant tools."
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900">{category}</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          id="journey"
          eyebrow="Education & Experience"
          title="Education and practical experience in a clean timeline."
        >
          <div className="space-y-6">
            {journey.map((item, index) => (
              <div
                key={item.title}
                className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-500">
                      {item.org}
                    </p>
                  </div>
                  <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                    {item.period}
                  </div>
                </div>
                <ul className="space-y-3 text-sm leading-7 text-slate-600">
                  {item.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
                {index !== journey.length - 1 && (
                  <div className="absolute -bottom-6 left-10 hidden h-6 w-px bg-slate-300 md:block" />
                )}
              </div>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          id="projects"
          eyebrow="Projects"
          title="Focused, practical work that shows development depth."
        >
          <div className="grid gap-6 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                      {project.tag}
                    </span>
                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  {project.description}
                </p>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                  {project.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>

                <div className="mt-auto flex gap-3 pt-6">
                  <a
                    href={project.github}
                    className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  {/* <a
                    href={project.live}
                    className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    Live Demo
                  </a> */}
                </div>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="contact" eyebrow="Contact" title="Let’s connect">
          <div className="max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">
              Open to Opportunities
            </h3>

            <p className="mt-4 text-sm text-slate-600">
              I’m open to internships and entry-level developer roles. Feel free
              to connect or explore my work.
            </p>

            <a
              href="mailto:chauhanvaibhav758@gmail.com"
              className="mt-6 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
            >
              Email Me
            </a>

            <div className="mt-8 flex gap-4 flex-wrap text-sm">
              <a
                href="https://www.linkedin.com/in/vaibhav-chauhan-dev1/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Vaibhav0911"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://leetcode.com/u/chauhanvaibhav758/"
                target="_blank"
                rel="noreferrer"
              >
                LeetCode
              </a>
            </div>
          </div>
        </SectionWrapper>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Vaibhav Chauhan. Built with React and Tailwind CSS.</p>
          <div className="flex gap-4"></div>
        </div>
      </footer>
    </div>
  );
}

function SectionWrapper({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
