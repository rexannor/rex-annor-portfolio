import { useEffect, useState } from "react";
export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
          current = section.getAttribute("id") || "";
        }
      });
      
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Work" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];
  const projects = [
    {
      emoji: "📊",
      title: "ML Dashboard for Business Risk Prediction",
      description: "Advanced machine learning dashboard built with Python and Streamlit for predictive business risk analysis.",
      tags: ["Python", "Streamlit", "Machine Learning"],
    },
    {
      emoji: "🎬",
      title: "Digital Storytelling Campaign for Nonprofit",
      description: "Comprehensive multimedia project combining video production, digital marketing, and strategic communications.",
      tags: ["Video Production", "Digital Marketing", "Storytelling"],
    },
    {
      emoji: "📚",
      title: "Current Research: AI-Powered Strategic Decision Models",
      description: "Doctoral research investigating how artificial intelligence can enhance strategic decision-making processes in organizations.",
      tags: ["AI Research", "Strategic Planning", "Decision Science"],
    },
  ];
  return (
    <div className="font-sans bg-light-bg text-text-primary">
      {/* Header */}
      <header className="bg-dark-primary text-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Rex Annor</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Doctoral Candidate | AI/ML & Business Strategy | Multimedia & IT Professional
            </p>
            
            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium py-2 px-3 rounded-md transition-colors duration-300 ${
                    activeSection === item.id
                      ? "text-white bg-gray-800"
                      : "text-nav-light hover:text-white hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6">
        {/* About Section */}
        <section id="about" className="py-16">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <h2 className="text-3xl font-bold text-text-primary mb-6 border-b border-gray-200 pb-4">
              About Me
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-text-secondary leading-relaxed mb-6">
                I'm Rex Annor — a Doctoral Candidate in Business Administration with a foundation in multimedia, IT, and journalism. 
                I'm exploring how AI and machine learning can be applied to solve strategic business problems in both public and private sectors.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">🎓</div>
                  <h3 className="font-semibold text-text-primary">Academic Focus</h3>
                  <p className="text-sm text-text-secondary">Doctoral Business Administration</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">🤖</div>
                  <h3 className="font-semibold text-text-primary">Expertise</h3>
                  <p className="text-sm text-text-secondary">AI/ML & Strategy</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">🎬</div>
                  <h3 className="font-semibold text-text-primary">Background</h3>
                  <p className="text-sm text-text-secondary">Multimedia & IT</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <h2 className="text-3xl font-bold text-text-primary mb-6 border-b border-gray-200 pb-4">
              Work & Projects
            </h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{project.emoji}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-text-primary mb-2">
                        {project.title}
                      </h3>
                      <p className="text-text-secondary mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Blog Section */}
        <section id="blog" className="py-16">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <h2 className="text-3xl font-bold text-text-primary mb-6 border-b border-gray-200 pb-4">
              Blog & Insights
            </h2>
            <div className="text-center py-12">
              <div className="text-6xl mb-4">✍️</div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Coming Soon</h3>
              <p className="text-text-secondary max-w-md mx-auto">
                Articles on AI strategy, doctoral research insights, and technology commentary. 
                Stay tuned for thought-provoking content at the intersection of AI and business strategy.
              </p>
              <div className="mt-6">
                <button 
                  onClick={() => {
                    const email = prompt("Enter your email to get notified when new blog posts are published:");
                    if (email && email.includes('@')) {
                      alert(`Thank you! We'll notify you at ${email} when new content is available.`);
                    } else if (email) {
                      alert("Please enter a valid email address.");
                    }
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                >
                  Get Notified
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <h2 className="text-3xl font-bold text-text-primary mb-6 border-b border-gray-200 pb-4">
              Get In Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-xl">📧</div>
                    <div>
                      <p className="font-medium text-text-primary">Email</p>
                      <a
                        href="mailto:rex.annor@email.com"
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                      >
                        rex.annor@email.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Connect With Me</h3>
                <div className="space-y-4">
                  <a
                    href="https://www.linkedin.com/in/rex-annor-ba504074"
                    className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300 hover:border-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-xl">💼</div>
                    <div>
                      <p className="font-medium text-text-primary">LinkedIn</p>
                      <p className="text-sm text-text-secondary">Professional Network</p>
                    </div>
                  </a>
                  
                  <button
                    onClick={() => {
                      const githubUrl = prompt("Please enter your GitHub profile URL:");
                      if (githubUrl && githubUrl.includes('github.com')) {
                        window.open(githubUrl, '_blank');
                      } else if (githubUrl) {
                        alert("Please enter a valid GitHub URL (e.g., https://github.com/rexannor)");
                      }
                    }}
                    className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300 hover:border-blue-300 w-full text-left"
                  >
                    <div className="text-xl">💻</div>
                    <div>
                      <p className="font-medium text-text-primary">GitHub</p>
                      <p className="text-sm text-text-secondary">Code & Projects</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-dark-secondary text-gray-400 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-sm">
              © 2025 Rex Annor. All rights reserved.
            </p>
            <p className="text-xs mt-2 text-gray-500">
              Built with passion for AI, strategy, and innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
