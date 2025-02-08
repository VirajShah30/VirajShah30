import React from 'react';
import { Download, Mail, Github, Linkedin, Award, Book, Code, Brain } from 'lucide-react';

const skills = [
  { category: "Programming", items: ["JavaScript", "TypeScript", "Python", "Java", "C++"] },
  { category: "Frontend", items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Material-UI"] },
  { category: "Backend", items: ["Node.js", "Express", "Django", "PostgreSQL", "MongoDB"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Firebase", "Figma"] }
];

const experience = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description: [
      "Led development of scalable microservices architecture",
      "Mentored junior developers and conducted code reviews",
      "Implemented CI/CD pipelines reducing deployment time by 60%"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2019 - 2021",
    description: [
      "Developed responsive web applications using React and Node.js",
      "Optimized database queries improving performance by 40%",
      "Integrated third-party APIs and payment gateways"
    ]
  }
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Technology",
    period: "2017 - 2019",
    focus: "Artificial Intelligence and Machine Learning"
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    school: "Institute of Technology",
    period: "2013 - 2017",
    focus: "Software Engineering"
  }
];

function Resume() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Viraj Shah</h1>
            <p className="text-xl text-purple-300 mb-4">Senior Software Engineer</p>
            <div className="flex space-x-4">
              <a href="mailto:contact@example.com" className="text-white/70 hover:text-purple-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-purple-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-purple-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors duration-300 flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Code className="w-6 h-6 mr-2" />
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-black/30 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Brain className="w-6 h-6 mr-2" />
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job) => (
              <div key={job.title} className="bg-black/30 backdrop-blur-sm p-6 rounded-xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <p className="text-purple-300">{job.company}</p>
                  </div>
                  <span className="text-white/70">{job.period}</span>
                </div>
                <ul className="space-y-2">
                  {job.description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Book className="w-6 h-6 mr-2" />
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu) => (
              <div key={edu.degree} className="bg-black/30 backdrop-blur-sm p-6 rounded-xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <p className="text-purple-300">{edu.school}</p>
                  </div>
                  <span className="text-white/70">{edu.period}</span>
                </div>
                <p className="text-white/70">Focus: {edu.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Award className="w-6 h-6 mr-2" />
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-2">AWS Certified Solutions Architect</h3>
              <p className="text-white/70">Amazon Web Services</p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-2">Google Cloud Professional</h3>
              <p className="text-white/70">Google Cloud Platform</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;