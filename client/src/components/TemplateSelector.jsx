import React, { useState } from "react";

const TemplateSelector = ({ selectedTemplate, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const templates = [
    {
      id: "classic",
      name: "Classic",
      previes:
        "A clean, traditional resume format with clear sections and professional typography",
    },
    {
      id: "modern",
      name: "Modern",
      previes:
        "Sleek design with strategic use of color and modern font choiced",
    },
    {
      id: "minimal-image",
      name: "Minimal Image",
      previes: "Minimal design with a single image and clean typography",
    },
    {
      id: "minimal",
      name: "Minimal",
      previes: "Ultra-clean design that puts your content front and center",
    },
  ];
  return <div></div>;
};

export default TemplateSelector;
