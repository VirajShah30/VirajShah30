import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Brain, Code2, Rocket, ArrowLeft, ExternalLink, Github } from 'lucide-react';

const projectsData = {
  'ai-research': {
    title: 'AI Research Navigator',
    description: 'Pioneering the future of machine learning with advanced predictive analytics algorithms.',
    icon: Brain,
    color: 'from-purple-500 to-blue-600',
    preview: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    longDescription: `Leading research in advanced machine learning algorithms focused on predictive analytics. This project combines cutting-edge AI techniques with practical applications in data science.`,
    features: [
      'Neural network architecture optimization',
      'Real-time data processing pipeline',
      'Advanced visualization dashboard',
      'Automated model training and deployment'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'CUDA'],
    metrics: [
      { label: 'Accuracy', value: '98.5%' },
      { label: 'Processing Speed', value: '500ms' },
      { label: 'Data Points', value: '1M+' }
    ]
  },
  'full-stack': {
    title: 'Full-Stack Voyager',
    description: 'Building enterprise-scale applications with modern technology stack.',
    icon: Code2,
    color: 'from-blue-500 to-cyan-600',
    preview: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479',
    longDescription: `A comprehensive full-stack development project showcasing modern web technologies and best practices in building scalable applications.`,
    features: [
      'Microservices architecture',
      'Real-time data synchronization',
      'Advanced caching system',
      'Automated CI/CD pipeline'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'Docker'],
    metrics: [
      { label: 'Performance Score', value: '97/100' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'API Response', value: '100ms' }
    ]
  },
  'forms9': {
    title: 'Startup Command Center',
    description: 'Revolutionizing form management and data collection.',
    icon: Rocket,
    color: 'from-cyan-500 to-emerald-600',
    preview: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
    longDescription: `Forms9 Infotech is pioneering the future of form management and data collection through innovative solutions and cutting-edge technology.`,
    features: [
      'AI-powered form generation',
      'Advanced analytics dashboard',
      'Multi-platform compatibility',
      'Enterprise-grade security'
    ],
    technologies: ['React Native', 'AWS', 'MongoDB', 'GraphQL'],
    metrics: [
      { label: 'Active Users', value: '50K+' },
      { label: 'Forms Created', value: '1M+' },
      { label: 'Data Processing', value: '5TB+' }
    ]
  }
};

function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData[id];

  if (!project) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-purple-400 hover:text-purple-300">
            Return to Projects
          </Link>
        </div>
      </div>
    );
  }

  const ProjectIcon = project.icon;

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-6">
        <Link
          to="/projects"
          className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>

        <div className="relative rounded-xl overflow-hidden mb-12">
          <div className="absolute inset-0">
            <img
              src={`${project.preview}?auto=format&fit=crop&w=1920&q=80`}
              alt={project.title}
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          <div className="relative p-12">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center mb-6`}>
              <ProjectIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-gray-300 max-w-2xl">{project.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-300">{project.longDescription}</p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white/10 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Metrics</h2>
              <div className="space-y-4">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="flex justify-between items-center">
                    <span className="text-gray-300">{metric.label}</span>
                    <span className="font-bold">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="flex-1 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
              <a
                href="#"
                className="flex-1 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Github className="w-4 h-4" />
                <span>Source</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;