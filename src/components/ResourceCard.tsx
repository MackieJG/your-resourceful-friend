import * as React from "react";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Database } from "../../types/supabase";

type ResourceCardProps = {
  resource: Resource;
};

type Resource = {
  id: number;
  title: string;
  link: string;
  image_url: string;
  description: string;
};

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <a href={resource.link} target="_blank">
      <Card className="w-[260px] group hover:shadow-md transition-shadow duration-300 overflow-hidden min-h-[294px]">
        <div className="h-40 overflow-hidden">
          <img
            src={
              resource.image_url
                ? resource.image_url
                : "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            className="object-cover object-center h-full w-full transition-transform duration-700 ease-in-out group-hover:scale-110 transform-gpu"
            alt={`cover image for ${resource.title}`}
          />
        </div>
        <CardContent></CardContent>
        <CardFooter className="flex items-center justify-between">
          <div>
            <CardTitle className="text-md">{resource.title}</CardTitle>
            <CardDescription>{resource.description}</CardDescription>
          </div>
        </CardFooter>
      </Card>
    </a>
  );
}
