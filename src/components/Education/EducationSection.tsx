import React from "react";
import CertItem from "./CertItem";

function EducationSection() {
  return (
    <div className="p-8 md:p-12 lg:p-16 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-semibold text-white mb-6">Education</h2>
      <p className="text-lg text-gray-400 mb-8">
        Here are my educational experiences and achievements.
      </p>
      <div className="space-y-6">
        <div className="p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:border-b-4 hover:border-white hover:-translate-y-1">
          <h3 className="text-lg font-medium text-white">
            Bachelor of Computer Science
          </h3>
          <p className="text-white">
            Higher Institute of Mathematics and Computer Science
          </p>
          <p className="text-sm text-gray-300">2020 - now</p>
        </div>

        {/* courses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <CertItem
            title="The Bits and Bytes of Computer Networking by Google"
            date="Aug 2024"
          />

          <CertItem
            title="Operating Systems and You: Becoming a Power User by Google"
            date="Aug 2024"
          />

          <CertItem
            title="Intro to Git and GitHub by Google"
            date="Aug 2024"
          />

          <CertItem
            title="Technical Support Fundamentals by Google"
            date="Aug 2024"
          />
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
