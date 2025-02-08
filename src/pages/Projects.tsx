import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Code2, Rocket, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 'ai-research',
    title: 'AI Research Navigator',
    description: 'Advanced machine learning algorithms for predictive analytics',
    icon: Brain,
    color: 'from-purple-500 to-blue-600',
    tags: ['Machine Learning', 'Python', 'TensorFlow'],
    preview: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },
  {
    id: 'full-stack',
    title: 'Full-Stack Voyager',
    description: 'Enterprise-scale applications with modern tech stack',
    icon: Code2,
    color: 'from-blue-500 to-cyan-600',
    tags: ['React', 'Node.js', 'TypeScript'],
    preview: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479'
  },
  {
    id: 'forms9',
    title: 'Startup Command Center',
    description: 'Leading Forms9 Infotech to new frontiers',
    icon: Rocket,
    color: 'from-cyan-500 to-emerald-600',
    tags: ['Leadership', 'Innovation', 'Strategy'],
    preview: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4'
  }
];

function Projects() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Mission Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group relative overflow-hidden rounded-xl bg-black/30 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0">
                <img
                  src={`${project.preview}?auto=format&fit=crop&w=800&q=80`}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity"
                />
              </div>
              <div className="relative p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center mb-4`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-white/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;