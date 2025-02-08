import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, GraduationCap, Briefcase, Rocket, Code, Brain, ArrowRight } from 'lucide-react';

const titles = [
  "Developer",
  "Designer",
  "Architect",
  "Innovator",
  "Viraj Shah"
];

const journeyData = [
  {
    year: '2018',
    title: 'Computer Science Degree',
    subtitle: 'University of Technology',
    icon: GraduationCap,
    category: 'education',
    description: 'Specialized in Artificial Intelligence and Machine Learning'
  },
  {
    year: '2019',
    title: 'Software Engineer',
    subtitle: 'Tech Innovations Inc.',
    icon: Code,
    category: 'work',
    description: 'Full-stack development with modern technologies'
  },
  {
    year: '2020',
    title: 'AI Research Project',
    subtitle: 'Neural Networks Innovation',
    icon: Brain,
    category: 'project',
    description: 'Led research in advanced ML algorithms'
  },
  {
    year: '2021',
    title: 'Senior Developer',
    subtitle: 'Future Systems',
    icon: Briefcase,
    category: 'work',
    description: 'Leading development teams and architecting solutions'
  },
  {
    year: '2022',
    title: 'Startup Launch',
    subtitle: 'Forms9 Infotech',
    icon: Rocket,
    category: 'project',
    description: 'Founded and launched successful tech startup'
  }
];

const featuredProjects = [
  {
    id: 'ai-research',
    title: 'AI Research Navigator',
    description: 'Advanced machine learning algorithms for predictive analytics',
    preview: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    gradient: 'from-purple-500 to-blue-600'
  },
  {
    id: 'full-stack',
    title: 'Full-Stack Voyager',
    description: 'Enterprise-scale applications with modern tech stack',
    preview: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479',
    gradient: 'from-blue-500 to-cyan-600'
  }
];

function Home() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, titleIndex]);

  const tick = () => {
    let currentTitle = titles[titleIndex];
    let updatedText = isDeleting 
      ? currentTitle.substring(0, text.length - 1)
      : currentTitle.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === currentTitle) {
      // Finished typing
      if (titleIndex === titles.length - 1) {
        // At final title (Viraj Shah), stop
        return;
      }
      
      setIsDeleting(true);
      setDelta(100);
    } else if (isDeleting && updatedText === '') {
      // Finished deleting
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      setDelta(200);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 inline-block animate-typing">
            {text}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-300">
            Captain of Innovation • AI Explorer • Full-Stack Navigator
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/projects"
              className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 group"
            >
              <span>View Mission Log</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Journey Timeline</h2>
          
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500" />
            
            <div className="relative space-y-16">
              {journeyData.map((item, index) => (
                <div key={index} className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  <div className="w-[calc(50%-2rem)]">
                    <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl hover:bg-black/40 transition-all duration-300 transform hover:scale-105 group">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-400 text-sm">
                          {item.year}
                        </span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs uppercase">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-purple-300 mb-2">{item.subtitle}</p>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>

                  <div className="w-16 flex items-center justify-center">
                    <div className="w-8 h-8 bg-black rounded-full border-4 border-purple-500 relative">
                      <item.icon className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-400" />
                    </div>
                  </div>

                  <div className="w-[calc(50%-2rem)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Featured Projects</h2>
            <Link 
              to="/projects"
              className="group flex items-center space-x-2 text-purple-400 hover:text-purple-300"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group relative h-96 overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0">
                  <img
                    src={project.preview}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} mb-4 transform group-hover:scale-110 transition-transform`}>
                    <Rocket className="w-6 h-6 text-white m-3" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 transform group-hover:translate-x-2 transition-transform">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 transform group-hover:translate-x-2 transition-transform">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

export default Home