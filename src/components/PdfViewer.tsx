
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, X, Maximize, Minimize } from "lucide-react";
import { SubjectResource } from "./SubjectCard";

interface PdfViewerProps {
  subject: SubjectResource | null;
  isOpen: boolean;
  onClose: () => void;
}

const PdfViewer = ({ subject, isOpen, onClose }: PdfViewerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className={`${isFullScreen ? 'max-w-[95vw] w-[95vw] max-h-[95vh] h-[95vh]' : 'max-w-4xl w-[90vw] max-h-[90vh]'} flex flex-col`}>
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>{subject?.title}</DialogTitle>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" onClick={toggleFullScreen}>
              {isFullScreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href={subject?.fileUrl} download target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="relative flex-1 min-h-[70vh] mt-4 border border-gray-200 rounded-md overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          )}
          
          <iframe
            src={subject?.fileUrl ? `${subject.fileUrl}#toolbar=0&navpanes=0` : ""}
            className="w-full h-full"
            onLoad={handleLoad}
            title={subject?.title || "PDF Viewer"}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PdfViewer;