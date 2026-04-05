"use client";

import React from "react";
import ProjectCard from "@/components/ui/ProjectCard";

interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  desc: string;
  tech: string[];
  impact?: string;
  image?: string;
}

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          index={index} 
        />
      ))}
    </div>
  );
}
