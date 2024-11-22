import React from "react";

interface ProjectImageProps {
  imageUrl: string;
  alt: string;
}

function ProjectImage({ imageUrl, alt }: ProjectImageProps) {
  return (
    <div>
      <img src={imageUrl} alt={alt} />
    </div>
  );
}

export default ProjectImage;
