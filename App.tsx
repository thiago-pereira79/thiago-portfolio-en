import React, { useState } from 'react';
import { Menu, X, ArrowRight, ExternalLink, Code, Mail, Linkedin, Github, MessageCircle, CircuitBoard } from 'lucide-react';
import { 
  HERO_TITLE, HERO_SUBTITLE, HERO_DESCRIPTION, HERO_CHIPS,
  SKILLS_TITLE, SKILLS_SUBTITLE, SKILLS_DATA,
  PROJECTS_DATA,
  STUDY_DATA_UPDATED,
  ABOUT_PARAGRAPHS,
  SOCIAL_LINKS
} from './constants';

// --- Sub-components for cleaner file ---

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-secondary hover:text-primary font-medium tracking-wide text-sm uppercase transition-colors"
  >
    {children}
  </a>
);

interface SectionProps {
  id: string;
  className?: string; // Inner container classes
  bgClass?: string;   // Outer section background
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = "", bgClass = "", children }) => (
  <section id={id} className={`${bgClass} w-full`}>
    <div className={`py-10 md:py-20 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto ${className}`}>
      {children}
    </div>
  </section>
);

interface ChipProps {
  text: string;
}

const Chip: React.FC<ChipProps> = ({ text }) => (
  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#BDB6AD] text-secondary text-sm sm:text-base font-medium mr-2 mb-2 md:mr-3 md:mb-3 shadow-md border border-secondary/5">
    <div className="w-2 h-2 bg-white rounded-full mr-2 shadow-sm"></div> 
    {text}
  </span>
);

interface SkillCardProps {
  title: string;
  items: string[];
  bgColor?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, items, bgColor = "bg-[#D6C9BC]" }) => (
  <div className={`${bgColor} rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow h-full border border-secondary/10`}>
    <h3 className="text-xl font-bold text-primary mb-4 md:mb-6 pb-3 md:pb-4 border-b border-secondary/20">{title}</h3>
    <ul className="space-y-2 md:space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center text-secondary text-sm md:text-base">
          <span className="w-2 h-2 bg-accent rounded-full mr-3 shrink-0"></span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

interface ProjectCardProps {
  project: typeof PROJECTS_DATA[0];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="bg-[#D6C9BC] rounded-xl p-6 md:p-8 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow group border border-secondary/10">
    <div className="flex-grow">
      <h3 className="text-xl font-bold text-primary mb-4">{project.title}</h3>
      <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
        {project.tags.map((tag, idx) => (
          <span key={idx} className="px-2 py-1 bg-[#C9B9AA] bg-opacity-40 rounded-md text-xs font-medium text-secondary">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-secondary leading-relaxed mb-6 text-sm md:text-base">
        {project.description}
      </p>
    </div>
    <div className="flex justify-between items-center pt-6 border-t border-secondary/10 mt-auto">
      <a href={project.codeLink} className="flex items-center text-primary font-semibold text-sm hover:text-accent transition-colors">
        <Code size={16} className="mr-2" />
        View Code
      </a>
      <a href={project.viewLink} className="flex items-center text-primary font-semibold text-sm hover:text-accent transition-colors">
        View Project
        <ExternalLink size={16} className="ml-2" />
      </a>
    </div>
  </div>
);

interface StudyColumnProps {
  category: string;
  topics: string[];
}

const StudyColumn: React.FC<StudyColumnProps> = ({ category, topics }) => (
  <div className="flex flex-col relative pl-6 border-l-2 border-accent/30">
    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></span>
    <h3 className="text-xl font-bold text-accent mb-4 md:mb-6 leading-none">{category}</h3>
    <ul className="space-y-3 md:space-y-4">
      {topics.map((topic, idx) => (
        <li key={idx} className="text-secondary leading-relaxed text-sm md:text-base">
          {topic}
        </li>
      ))}
    </ul>
  </div>
);

interface SocialButtonProps {
  icon: string;
  name: string;
  url: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, name, url }) => {
  const IconComponent = () => {
    switch (icon) {
      case 'mail': return <Mail size={20} className="mr-2" />;
      case 'linkedin': return <Linkedin size={20} className="mr-2" />;
      case 'github': return <Github size={20} className="mr-2" />;
      case 'message-circle': return <MessageCircle size={20} className="mr-2" />;
      default: return null;
    }
  };

  return (
    <a 
      href={url}
      className="flex items-center justify-center px-6 py-4 bg-accent text-white rounded-md font-semibold hover:bg-opacity-90 transition-all shadow-sm hover:shadow-md w-full sm:w-auto min-w-[160px]"
    >
      <IconComponent />
      {name}
    </a>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Distinct earthy colors for skill cards (Darkened by ~10%)
  const SKILL_CARD_COLORS = [
    "bg-[#DACEC0]", // Darkened Light Warm Sand
    "bg-[#D2C3AF]", // Darkened Medium Earth Beige
    "bg-[#CAB59C]", // Darkened Deep Sand
    "bg-[#C2A88A]"  // Darkened Warm Clay/Earth
  ];

  return (
    <div className="min-h-screen font-sans bg-background text-primary selection:bg-accent selection:text-white">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-secondary/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#E8DCCB] rounded-sm flex items-center justify-center border border-secondary/20 mr-4">
           <img
                 src="/LOGO.png"          // ou o nome exato do arquivo na pasta public
                 alt="Logo Thiago Pereira"
                 className="w-full h-full object-contain"
           />
           </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#inicio">HOME</NavLink>
            <NavLink href="#skills">SKILLS</NavLink>
            <NavLink href="#projetos">PROJECTS</NavLink>
            <NavLink href="#estudos">STUDIES</NavLink>
            <NavLink href="#sobre">ABOUT</NavLink>
            <NavLink href="#idiomas">LANGUAGES</NavLink>
            <NavLink href="#contato">CONTACT</NavLink>
          </nav>

          {/* Mobile Nav Button */}
          <button className="md:hidden text-primary" onClick={toggleMenu} aria-label="Menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-secondary/10 py-8 px-6 shadow-lg h-screen md:h-auto overflow-y-auto">
            <nav className="flex flex-col space-y-6 text-center text-lg">
              <NavLink href="#inicio" onClick={toggleMenu}>HOME</NavLink>
              <NavLink href="#skills" onClick={toggleMenu}>SKILLS</NavLink>
              <NavLink href="#projetos" onClick={toggleMenu}>PROJECTS</NavLink>
              <NavLink href="#estudos" onClick={toggleMenu}>STUDIES</NavLink>
              <NavLink href="#sobre" onClick={toggleMenu}>ABOUT</NavLink>
              <NavLink href="#idiomas" onClick={toggleMenu}>LANGUAGES</NavLink>
              <NavLink href="#contato" onClick={toggleMenu}>CONTACT</NavLink>
            </nav>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="pt-16 md:pt-20">
        
        {/* HERO SECTION - DARKER BASE (#CDBFAF) */}
        {/* Removed min-h-[85vh] to reduce space. Added !pt-6 md:!pt-12 to pull content up. */}
        <Section id="inicio" bgClass="bg-[#CDBFAF]" className="!pt-6 md:!pt-12 pb-12 md:pb-24 flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="flex-1 space-y-6 md:space-y-8 animate-fade-in-up order-2 md:order-1">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-3 md:mb-4 tracking-tight">
                {HERO_TITLE}
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-accent">
                {HERO_SUBTITLE}
              </h2>
            </div>
            
            <p className="text-secondary text-base md:text-lg leading-relaxed max-w-3xl text-justify">
              {HERO_DESCRIPTION}
            </p>

            <div className="flex flex-wrap pt-2">
              {HERO_CHIPS.map((chip, i) => <Chip key={i} text={chip} />)}
            </div>

            <div className="pt-2 md:pt-4">
              <a 
                href="#projetos"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-accent text-white rounded-md font-bold text-lg hover:bg-[#B86832] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform"
              >
                View Projects
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end relative order-1 md:order-2">
             {/* Profile Image - Circular masking as per screenshot */}
             {/* Adjusted size for mobile (w-48) to desktop (w-80/96) */}
             <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="/foto.jpg.jpg" 
                  alt="Thiago Pereira" 
                  className="w-full h-full object-cover"
                />
             </div>
             {/* Decorative blob behind */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-accent/10 rounded-full blur-3xl -z-0"></div>
          </div>
        </Section>

        {/* SKILLS SECTION - LIGHTER BASE (#D6C9BC) */}
        <Section id="skills" bgClass="bg-[#D6C9BC]" className="!pb-10">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4">{SKILLS_TITLE}</h2>
            <p className="text-accent text-base md:text-lg font-medium">{SKILLS_SUBTITLE}</p>
          </div>

          {/* Grid responsive: 1 col mobile, 2 cols tablet, 4 cols desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS_DATA.map((skill, idx) => (
              <SkillCard 
                key={idx} 
                title={skill.title} 
                items={skill.items} 
                bgColor={SKILL_CARD_COLORS[idx % SKILL_CARD_COLORS.length]} 
              />
            ))}
          </div>
          
          <p className="text-center text-secondary/60 mt-8 text-sm">
            Always studying and updating the stack as projects require.
          </p>
        </Section>

        {/* PROJECTS SECTION - DARKER BASE (#CDBFAF) */}
        <Section id="projetos" bgClass="bg-[#CDBFAF]" className="!pt-10">
          <div className="mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">Featured Projects</h2>
            <p className="text-secondary text-base md:text-lg">
              Some experiments in Front-end, Mobile, and logic that I am building throughout courses and bootcamps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PROJECTS_DATA.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </Section>

        {/* STUDY SECTION - LIGHTER BASE (#D6C9BC) */}
        <Section id="estudos" bgClass="bg-[#D6C9BC]">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">Currently Studying</h2>
            <p className="text-secondary text-base md:text-lg max-w-3xl mx-auto">
              Today my focus is on deepening my Front-end base, advancing in Mobile development, and consolidating Cloud (AWS) fundamentals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-7xl mx-auto">
            {STUDY_DATA_UPDATED.map((item, idx) => (
              <StudyColumn key={idx} category={item.category} topics={item.topics} />
            ))}
          </div>
        </Section>

        {/* ABOUT SECTION - DARKER BASE (#CDBFAF) */}
        <Section id="sobre" bgClass="bg-[#CDBFAF]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 md:mb-12">About Me</h2>
            <div className="space-y-6 md:space-y-8 text-base md:text-lg text-secondary leading-relaxed text-justify">
              {ABOUT_PARAGRAPHS.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </Section>

        {/* IDIOMAS SECTION - LIGHTER BASE (#D6C9BC) */}
        <Section id="idiomas" bgClass="bg-[#D6C9BC]" className="!pb-10">
           <div className="">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 md:mb-12">Languages</h2>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
                <div>
                  <h4 className="font-bold text-accent text-lg">Portuguese</h4>
                  <p className="text-secondary text-lg">Native</p>
                </div>
                <div>
                  <h4 className="font-bold text-accent text-lg">English</h4>
                  <p className="text-secondary text-lg">Learning</p>
                </div>
                <div>
                  <h4 className="font-bold text-accent text-lg">Spanish</h4>
                  <p className="text-secondary text-lg">Learning</p>
                </div>
            </div>
          </div>
        </Section>

        {/* CONTACT SECTION - DARKER BASE (#CDBFAF) */}
        <Section id="contato" bgClass="bg-[#CDBFAF]" className="!pt-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 md:mb-8">Contact</h2>
            <p className="text-secondary text-base md:text-lg mb-8 md:mb-12 leading-relaxed">
              Open for networking, opportunities as an intern/junior in Front-end, Mobile, or Cloud, and chats about studies and projects.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {SOCIAL_LINKS.map((link, idx) => (
                <SocialButton key={idx} icon={link.icon} name={link.name} url={link.url} />
              ))}
            </div>
          </div>
        </Section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#281F1A] text-[#EAE0D5] py-8 md:py-12 border-t border-secondary/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="opacity-80 text-xs md:text-sm">
            © {new Date().getFullYear()} • Portfolio of Thiago Pereira • Front-end • Mobile • Cloud
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;