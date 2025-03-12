
import { Navigation } from "@/components/Navigation";
import { Github, Instagram, Linkedin } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Gulshan Yadav",
      role: "Developer",
      image: "http://gcetresources.me/wp-content/uploads/2024/01/dp.jpg",
      social: {
        github: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Anshul Kushwaha",
      role: "Maintainer",
      image: "http://gcetresources.me/wp-content/uploads/2024/01/anshul.jpg",
      social: {
        github: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Harshita",
      role: "Resource Management",
      image: "http://gcetresources.me/wp-content/uploads/2024/01/harshita.jpg",
      social: {
        github: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Vinayak Sonthalia",
      role: "Resource Management",
      image: "http://gcetresources.me/wp-content/uploads/2024/01/vinayak.jpg",
      social: {
        github: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Himanshu Shrivastava",
      role: "Resource Management",
      image: "http://gcetresources.me/wp-content/uploads/2024/01/Himanshu.jpg",
      social: {
        github: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Aditya",
      role: "Resource Management",
      image: "http://gcetresources.me/wp-content/uploads/2024/12/img-20241203-wa00061125774396337322188.jpg",
      social: {
        github: "#",
        instagram: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Meet the team
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're a dedicated team working to provide quality educational resources for GCET students
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group p-6 text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6 inline-block">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.social.github} className="text-gray-600 hover:text-primary transition-colors">
                  <Github size={20} />
                </a>
                <a href={member.social.instagram} className="text-gray-600 hover:text-primary transition-colors">
                  <Instagram size={20} />
                </a>
                <a href={member.social.linkedin} className="text-gray-600 hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
