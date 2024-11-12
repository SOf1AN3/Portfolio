import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { Button } from './components/Button';
import { Card, CardContent } from './components/Card';
import { Badge } from './components/Badge';
import { Input } from './components/Input';
import { Textarea } from './components/Textarea';
import { Github, Linkedin, ShoppingBag, Laptop, Megaphone, Plane, Hotel, Users, MessageSquare, Instagram, Phone } from 'lucide-react';
import './App.css';

import Cloth from './assets/shop-co.png';
import Digital from './assets/digital.png';
import Codecrafters from './assets/codecrafters.png';
import Furniro from './assets/furniro.png';
import Jadoo from './assets/jadoo.png';
import HotelLanding from './assets/hotel.png';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSending(true);
    emailjs.send(
      'service_6j8u1yv',
      'template_szxy8cc',
      formData,
      '80ZdQFGwY-B-CNLEr'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }).catch((err) => {
      console.error('FAILED...', err);
    }).finally(() => {
      setIsSending(false);
    });
  };

  const technologies = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap'],
    backend: ['Node.js', 'Express.js', 'MongoDB', 'Django', 'Firebase', 'MySQL'],
    certifications: ['Bachelor\'s Degree', 'Responsive Web Design', 'Frontend Libraries', 'APIs and Microservices'],
    tools: ['Git & GitHub', 'Webpack', 'Vite', 'Figma', 'Photoshop'],
    learning: ['Vue.js', 'Three.Js', 'Docker', 'postgreSQL'],
    other: ['Java', 'C', 'C++', 'Python']
  };

  const projects = [
    {
      icon: ShoppingBag,
      title: "FashionFusion",
      description: "An e-commerce website for selling trendy clothes with a seamless user experience.",
      technologies: ["React", "Express", "MongoDB"],
      image: Cloth
    },
    {
      icon: Laptop,
      title: "Furniro",
      description: "An e-commerce platform for furniture and home decor items with a modern design.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      image: Furniro
    },
    {
      icon: Megaphone,
      title: "SetitUp",
      description: "A sleek landing page for a digital marketing agency showcasing services and case studies.",
      technologies: ["React", "Express", "Tailwind CSS"],
      image: Digital
    },
    {
      icon: Plane,
      title: "Jadoo",
      description: "A comprehensive travel agency website with booking capabilities and travel guides.",
      technologies: ["React", "Express", "Deno"],
      image: Jadoo
    },
    {
      icon: Hotel,
      title: "Serenity Haven",
      description: "An elegant hotel website with room booking and customer reviews.",
      technologies: ["React", "Node.js", "Firebase"],
      image: HotelLanding
    },
    {
      icon: Users,
      title: "CodeCrafters",
      description: "A dynamic website for our development team, showcasing our skills and projects.",
      technologies: ["PHP", "MySQL", "JavaScript"],
      image: Codecrafters,
      link: "https://codecrafters-delta.vercel.app/"
    },
    // {
    //   icon: MessageSquare,
    //   title: "ChatterBox",
    //   description: "A real-time chat application with private and group messaging capabilities.",
    //   technologies: ["React", "Node.js", "Socket.io"],
    //   image: "/placeholder.svg?height=200&width=300"
    // }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001219] via-[#013440] to-[#01222e] font-mono text-[#a8b2d1]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex justify-between items-center mb-16 py-4 border-b border-[#1e3a4a]"
        >
          <span className="text-lg text-[#64ffda]">@SOf1AN3</span>
          <div className="flex gap-8">
            <a href="#hello" className="hover:text-[#64ffda] transition-colors border-b-2 border-[#f97316]">_hello</a>
            <a href="#about" className="hover:text-[#64ffda] transition-colors">_about-me</a>
            <a href="#projects" className="hover:text-[#64ffda] transition-colors">_projects</a>
            <a href="#contact" className="hover:text-[#64ffda] transition-colors">_contact-me</a>
          </div>
        </motion.nav>

        <motion.section
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="mb-32 pt-20"
        >
          <motion.p variants={fadeIn} className="text-[#64ffda] mb-4">Hi all. I am</motion.p>
          <motion.h1
            variants={fadeIn}
            className="text-6xl md:text-7xl font-bold mb-6 text-[#ccd6f6]"
          >
            Sofiane Asma
          </motion.h1>
          <motion.div variants={fadeIn} className="text-2xl text-[#64ffda] mb-8">
            <span className="text-[#f97316]">&gt;</span> Fullstack developer
          </motion.div>
          <motion.div variants={fadeIn} className="text-sm opacity-70 mb-8">
            <p>// Here is the link of my Github page</p>
            <p className="text-[#64ffda]">const <span className="text-[#f97316]">githubLink</span> = <span className="text-[#a8b2d1]">"https://github.com/sofiane-asma"</span></p>
          </motion.div>
        </motion.section>

        {/* Technologies Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-32"
          id="about"
        >
          <motion.h2 variants={fadeIn} className="text-2xl text-[#64ffda] mb-8 pt-13">
            <span className="text-[#f97316]">&gt;</span> Technologies & Tools
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(technologies).map(([category, techs]) => (
              <motion.div key={category} variants={fadeIn}>
                <Card className="bg-[#011627]/50 border border-[#1e3a4a] backdrop-blur-sm p-5 pt-7 text-base">
                  <CardContent className="p-6">
                    <h3 className="text-[#64ffda] mb-4 flex items-center gap-2">
                      $ {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {techs.map(tech => (
                        <Badge key={tech} variant="secondary" className="bg-[#1e3a4a] text-[#64ffda] text-sm hover:bg-[#2a4a5e]">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-32"
          id="projects"
        >
          <motion.h2 variants={fadeIn} className="text-2xl text-[#64ffda] mb-8 pt-13">
            <span className="text-[#f97316]">&gt;</span> Recent Projects
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <Card key={index} className="bg-[#011627]/50 border border-[#1e3a4a] backdrop-blur-sm group hover:border-[#64ffda] transition-colors py-5">
                <a href={project.link}>
                  <CardContent className="p-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-50 object-cover rounded-md mb-4 border border-[#1e3a4a] group-hover:border-[#64ffda] transition-colors"
                    />
                    <project.icon className="h-8 w-8 text-[#64ffda] mb-4" />
                    <h3 className="text-xl text-[#ccd6f6] mb-2">{project.title}</h3>
                    <p className="text-[#8892b0] mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-[#1e3a4a] text-[#64ffda] hover:bg-[#2a4a5e]">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </a>
              </Card>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-32"
          id="contact"
        >
          <motion.h2 variants={fadeIn} className="text-2xl text-[#64ffda] mb-8">
            <span className="text-[#f97316]">&gt;</span> Contact Me
          </motion.h2>
          <motion.div variants={fadeIn}>
            <Card className="bg-[#011627]/50 border border-[#1e3a4a] backdrop-blur-sm p-5 w-full max-w-5xl mx-auto">
              <CardContent className="p-6">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm text-[#8892b0] mb-1">name:</label>
                    <Input
                      id="name"
                      placeholder="your_name"
                      className="bg-[#011627] border-[#1e3a4a] text-[#ccd6f6] focus:border-[#64ffda] focus:ring-[#64ffda] w-full"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-[#8892b0] mb-1">email:</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your_email"
                      className="bg-[#011627] border-[#1e3a4a] text-[#ccd6f6] focus:border-[#64ffda] focus:ring-[#64ffda] w-full"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm text-[#8892b0] mb-1">message:</label>
                    <Textarea
                      id="message"
                      placeholder="your_message"
                      className="bg-[#011627] border-[#1e3a4a] text-[#ccd6f6] focus:border-[#64ffda] focus:ring-[#64ffda] min-h-[150px] w-full"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                  </div>
                  <Button type="submit" className="bg-[#f97316] hover:bg-[#fb923c] text-white p-2 w-full md:w-80">
                    {isSending ? 'Sending...' : 'send-message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="py-6 border-t border-[#1e3a4a]"
        >
          <div className="flex justify-between items-center">
            <div className="text-sm">
              find me in:
              <div className="flex gap-4 mt-2">
                <a href="https://github.com" className="text-[#8892b0] hover:text-[#64ffda]">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" className="text-[#8892b0] hover:text-[#64ffda]">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://instagram.com" className="text-[#8892b0] hover:text-[#64ffda]">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://wa.me/1234567890" className="text-[#8892b0] hover:text-[#64ffda]">
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[#8892b0]">
              @SOf1AN3
              <Github className="h-5 w-5" />
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;