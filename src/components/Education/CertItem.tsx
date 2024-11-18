import React from "react";

interface CertItemProps {
  title: string;
  date: string;
}

function CertItem({ title, date }: CertItemProps) {
  return (
    <div className="p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:border-b-4 hover:border-white hover:-translate-y-1">
      <h3 className="text-sm sm:text-base font-medium text-white">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-gray-300">{date}</p>
    </div>
  );
}

export default CertItem;
