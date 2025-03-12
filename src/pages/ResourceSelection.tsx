import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { useParams } from "react-router-dom";
import {
  BookText,
  PenTool,
  Book,
  Grid,
  FileText,
  HelpCircle,
} from "lucide-react";
import SubjectCard, { SubjectResource } from "@/components/SubjectCard";
import PdfViewer from "@/components/PdfViewer";

// This would ideally come from a database like Azure
const getSubjectsForYear = (year: string): SubjectResource[] => {
  const subjects: Record<string, SubjectResource[]> = {
    "1st": [
      {
        id: "1st-math",
        title: "Engineering Mathematics",
        description: "Calculus, Linear Algebra, and Differential Equations",
        fileUrl:
          "https://mrcet.com/downloads/digital_notes/IT/Java%20Programming.pdf", // Sample PDF for demo
        color: "text-blue-600",
        bgColor: "bg-blue-100",
      },
      {
        id: "1st-physics",
        title: "Engineering Physics",
        description: "Mechanics, Thermodynamics, and Optics",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-purple-600",
        bgColor: "bg-purple-100",
      },
      {
        id: "1st-chemistry",
        title: "Engineering Chemistry",
        description: "Organic, Inorganic, and Physical Chemistry",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-green-600",
        bgColor: "bg-green-100",
      },
      {
        id: "1st-programming",
        title: "Computer Programming",
        description: "Fundamentals of Programming and Data Structures",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-orange-600",
        bgColor: "bg-orange-100",
      },
      {
        id: "1st-electrical",
        title: "Basic Electrical Engineering",
        description: "Circuit Theory and Electrical Machines",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-red-600",
        bgColor: "bg-red-100",
      },
      {
        id: "1st-mechanics",
        title: "Engineering Mechanics",
        description: "Statics, Dynamics, and Strength of Materials",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-teal-600",
        bgColor: "bg-teal-100",
      },
      {
        id: "1st-graphics",
        title: "Engineering Graphics",
        description: "Technical Drawing and Computer-Aided Design",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-indigo-600",
        bgColor: "bg-indigo-100",
      },
      {
        id: "1st-communication",
        title: "Communication Skills",
        description: "Technical Writing and Verbal Communication",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-pink-600",
        bgColor: "bg-pink-100",
      },
      {
        id: "1st-environment",
        title: "Environmental Studies",
        description: "Ecosystems, Pollution Control, and Sustainability",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-emerald-600",
        bgColor: "bg-emerald-100",
      },
      {
        id: "1st-workshop",
        title: "Workshop Practice",
        description: "Fabrication, Fitting, and Machining Techniques",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-amber-600",
        bgColor: "bg-amber-100",
      },
    ],
    "2nd": [
      {
        id: "2nd-dsa",
        title: "Data Structures & Algorithms",
        description: "Advanced data structures and algorithmic techniques",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-blue-600",
        bgColor: "bg-blue-100",
      },
      {
        id: "2nd-oops",
        title: "Object-Oriented Programming",
        description: "OOP concepts and implementation in various languages",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-purple-600",
        bgColor: "bg-purple-100",
      },
      {
        id: "2nd-dbms",
        title: "Database Management Systems",
        description: "Relational databases, SQL, and normalization",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-green-600",
        bgColor: "bg-green-100",
      },
      {
        id: "2nd-os",
        title: "Operating Systems",
        description: "Process management, memory management, and file systems",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-orange-600",
        bgColor: "bg-orange-100",
      },
      {
        id: "2nd-coa",
        title: "Computer Organization & Architecture",
        description: "Digital logic, assembly language, and CPU design",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-red-600",
        bgColor: "bg-red-100",
      },
      {
        id: "2nd-discrete",
        title: "Discrete Mathematics",
        description: "Logic, sets, relations, graphs, and combinatorics",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-teal-600",
        bgColor: "bg-teal-100",
      },
      {
        id: "2nd-digital",
        title: "Digital Electronics",
        description: "Boolean algebra, sequential and combinational circuits",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-indigo-600",
        bgColor: "bg-indigo-100",
      },
      {
        id: "2nd-signal",
        title: "Signals & Systems",
        description: "Linear time-invariant systems and signal processing",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-pink-600",
        bgColor: "bg-pink-100",
      },
      {
        id: "2nd-prob",
        title: "Probability & Statistics",
        description:
          "Random variables, probability distributions, and inference",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-emerald-600",
        bgColor: "bg-emerald-100",
      },
      {
        id: "2nd-automata",
        title: "Automata Theory",
        description:
          "Formal languages, finite automata, and computational theory",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-amber-600",
        bgColor: "bg-amber-100",
      },
    ],
    "3rd": [
      {
        id: "3rd-web",
        title: "Web Technologies",
        description: "HTML, CSS, JavaScript, and modern frameworks",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-blue-600",
        bgColor: "bg-blue-100",
      },
      {
        id: "3rd-ai",
        title: "Artificial Intelligence",
        description:
          "Search algorithms, knowledge representation, and machine learning",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-purple-600",
        bgColor: "bg-purple-100",
      },
      {
        id: "3rd-networks",
        title: "Computer Networks",
        description: "Network protocols, architecture, and security",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-green-600",
        bgColor: "bg-green-100",
      },
      {
        id: "3rd-se",
        title: "Software Engineering",
        description: "Software development lifecycle and project management",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-orange-600",
        bgColor: "bg-orange-100",
      },
      {
        id: "3rd-theory",
        title: "Theory of Computation",
        description: "Automata theory, formal languages, and computability",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-red-600",
        bgColor: "bg-red-100",
      },
      {
        id: "3rd-compiler",
        title: "Compiler Design",
        description: "Lexical analysis, parsing, and code generation",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-teal-600",
        bgColor: "bg-teal-100",
      },
      {
        id: "3rd-embedded",
        title: "Embedded Systems",
        description: "Microcontrollers, real-time systems, and IoT",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-indigo-600",
        bgColor: "bg-indigo-100",
      },
      {
        id: "3rd-datamining",
        title: "Data Mining",
        description:
          "Pattern discovery, clustering, and classification techniques",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-pink-600",
        bgColor: "bg-pink-100",
      },
      {
        id: "3rd-distributed",
        title: "Distributed Systems",
        description: "Distributed computing models and middleware technologies",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-emerald-600",
        bgColor: "bg-emerald-100",
      },
      {
        id: "3rd-mobile",
        title: "Mobile Computing",
        description:
          "Mobile platforms, wireless networks, and application development",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-amber-600",
        bgColor: "bg-amber-100",
      },
    ],
    "4th": [
      {
        id: "4th-ml",
        title: "Machine Learning",
        description: "Supervised and unsupervised learning algorithms",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-blue-600",
        bgColor: "bg-blue-100",
      },
      {
        id: "4th-cloud",
        title: "Cloud Computing",
        description: "Virtualization, service models, and deployment",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-purple-600",
        bgColor: "bg-purple-100",
      },
      {
        id: "4th-security",
        title: "Information Security",
        description: "Cryptography, network security, and cyber threats",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-green-600",
        bgColor: "bg-green-100",
      },
      {
        id: "4th-bigdata",
        title: "Big Data Analytics",
        description: "Hadoop, MapReduce, and data processing frameworks",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-orange-600",
        bgColor: "bg-orange-100",
      },
      {
        id: "4th-mobile",
        title: "Mobile App Development",
        description: "Native and cross-platform mobile application development",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-red-600",
        bgColor: "bg-red-100",
      },
      {
        id: "4th-iot",
        title: "Internet of Things",
        description: "Connected devices, sensors, and smart environments",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-teal-600",
        bgColor: "bg-teal-100",
      },
      {
        id: "4th-blockchain",
        title: "Blockchain Technology",
        description:
          "Distributed ledgers, smart contracts, and cryptocurrencies",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-indigo-600",
        bgColor: "bg-indigo-100",
      },
      {
        id: "4th-devops",
        title: "DevOps Practices",
        description:
          "Continuous integration, deployment, and infrastructure as code",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-pink-600",
        bgColor: "bg-pink-100",
      },
      {
        id: "4th-nlp",
        title: "Natural Language Processing",
        description: "Text analysis, language understanding, and generation",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-emerald-600",
        bgColor: "bg-emerald-100",
      },
      {
        id: "4th-ar",
        title: "AR/VR Technologies",
        description:
          "Augmented and virtual reality principles and applications",
        fileUrl: "https://www.africau.edu/images/default/sample.pdf", // Sample PDF for demo
        color: "text-amber-600",
        bgColor: "bg-amber-100",
      },
    ],
  };

  return subjects[year] || [];
};

const ResourceSelection = () => {
  const { year } = useParams();
  const [selectedSubject, setSelectedSubject] =
    useState<SubjectResource | null>(null);
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  const resources = [
    {
      title: "PDF NOTES",
      icon: BookText,
      color: "bg-blue-100",
      textColor: "text-blue-600",
      link: "#pdf-notes",
    },
    {
      title: "Handwritten notes",
      icon: PenTool,
      color: "bg-rose-100",
      textColor: "text-rose-600",
      link: "#",
    },
    {
      title: "Quantum notes",
      icon: Book,
      color: "bg-green-100",
      textColor: "text-green-600",
      link: "#",
    },
    {
      title: "CAE papers",
      icon: Grid,
      color: "bg-purple-100",
      textColor: "text-purple-600",
      link: "#",
    },
    {
      title: "Aktu PYQ's",
      icon: FileText,
      color: "bg-orange-100",
      textColor: "text-orange-600",
      link: "#",
    },
    {
      title: "Question banks",
      icon: HelpCircle,
      color: "bg-teal-100",
      textColor: "text-teal-600",
      link: "#",
    },
  ];

  const yearPrefix = year?.split(" ")[0] || "1st";
  const subjects = getSubjectsForYear(yearPrefix);

  const handleSubjectClick = (subject: SubjectResource) => {
    setSelectedSubject(subject);
    setIsPdfOpen(true);
  };

  const handleClosePdf = () => {
    setIsPdfOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 text-center mb-4">
          Study Material for {year?.toUpperCase()} Year
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Do not use college email to download resources. Use your personal
          E-mail ID
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {resources.map((resource, index) => (
            <a
              key={resource.title}
              href={resource.link}
              className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div
                  className={`w-16 h-16 rounded-full ${resource.color} ${resource.textColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <resource.icon size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {resource.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div id="pdf-notes" className="pt-8">
          <h2 className="text-3xl font-display font-bold text-gray-900 text-center mb-8">
            PDF Notes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {subjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                onClick={handleSubjectClick}
              />
            ))}
          </div>
        </div>
      </div>

      <PdfViewer
        subject={selectedSubject}
        isOpen={isPdfOpen}
        onClose={handleClosePdf}
      />
    </div>
  );
};

export default ResourceSelection;
