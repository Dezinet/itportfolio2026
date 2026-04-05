import React from "react";
import projectsData from "@/content/projects/data.json";
import ProjectView from "@/components/projects/ProjectView";
import Link from "next/link";
import { Metadata } from "next";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

// Fixed metadata for static generation
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  return {
    title: project ? `${project.title} | Projects` : "Project Not Found",
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-transparent text-slate-100 flex items-center justify-center pt-40 px-6">
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-black uppercase tracking-tight">Project Not Found.</h1>
          <Link href="/projects" className="inline-block py-4 px-10 bg-purple-600 rounded-full font-black text-sm uppercase tracking-widest">
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return <ProjectView project={project} />;
}
