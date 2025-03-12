import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Youtube } from "lucide-react";

const AcademicVideos = () => {

  // Helper function to extract YouTube thumbnail
  const getYoutubeThumbnail = (link) => {
    const videoId = link.split("youtu.be/")[1]?.split("?")[0]
                  || link.split("v=")[1]?.split("&")[0];
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  const videos = [
    {
      title: "Introduction to Data Structures",
      description: "Learn the basics of data structures in programming",
      link: "https://youtu.be/vgSKOMsjLbc?si=uLoqowj4SMoeUEUo", // Only storing the video link
    },
    {
      title: "Mathematics-IV",
      description: "Complex mathematical concepts explained simply",
      link: "https://www.youtube.com/watch?v=yTMBEnVMrIM&t=886s",
    },
    // Add more sample videos here
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl font-display font-bold text-center mb-12">
          Academic Video Resources
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <a
              key={index}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all">
                {/* Dynamically generate thumbnail */}
                <div className="aspect-video relative bg-gray-100">
                  <img 
                    src={getYoutubeThumbnail(video.link)} 
                    alt={`${video.title} Thumbnail`} 
                    className="object-cover w-full h-full group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Youtube className="w-12 h-12 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {video.description}
                  </p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicVideos;
