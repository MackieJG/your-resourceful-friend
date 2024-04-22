"use client";

import { Button } from "@/components/ui/button";
import { Dices } from "lucide-react";
import { useEffect, useState } from "react";

interface ProjectDataProps {
  business: string;
  concept: string;
}

const ProjectGenerator = () => {
  const apiUrl = "http://localhost:8080";
  const [projectData, setProjectData] = useState<ProjectDataProps | null>(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Response was not Ok");
        }
        return response.json();
      })
      .then((data) => {
        setProjectData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="flex flex-1 items-center justify-center text-center flex-col gap-11">
      <Button>
        <Dices className="mr-2 h-4 w-4" /> Generate
      </Button>
      <h1 className="text-4xl md:text-7xl font-bold">
        Build <span className="text-primary">{projectData?.concept}</span> for{" "}
        <span className="text-primary">{projectData?.business}</span>
      </h1>
    </div>
  );
};

export default ProjectGenerator;
