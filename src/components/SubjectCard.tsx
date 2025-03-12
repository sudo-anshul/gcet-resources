import { File } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export interface SubjectResource {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  color: string;
  bgColor: string;
}

interface SubjectCardProps {
  subject: SubjectResource;
  onClick: (subject: SubjectResource) => void;
}

const SubjectCard = ({ subject, onClick }: SubjectCardProps) => {
  return (
    <Card
      className="hover:shadow-lg transition-all cursor-pointer group overflow-hidden"
      onClick={() => onClick(subject)}
    >
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div
            className={`w-16 h-16 rounded-full ${subject.bgColor} ${subject.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
          >
            <File className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-semibold">{subject.title}</h3>
          <p className="text-gray-600 text-sm">{subject.description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubjectCard;
