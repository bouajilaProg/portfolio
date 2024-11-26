import React from "react";

interface ProjectImageProps {
  imageUrl: string;
  alt: string;
}

function ProjectImage({ imageUrl, alt }: ProjectImageProps) {
  return (
    <div className="relative">
      <img className="object-cover w-full h-full" src={imageUrl} alt={alt} />
    </div>
  );
}

export default ProjectImage;
