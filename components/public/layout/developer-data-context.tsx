"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import { Cpu, Database, Layers, Terminal } from "lucide-react";
import type { DeveloperData, SerializableDeveloperData, SkillIconName } from "@/components/public/portfolio/types";

type DeveloperDataContextValue = {
  developerData: DeveloperData;
};

const DeveloperDataContext = createContext<DeveloperDataContextValue | undefined>(undefined);

const iconMap: Record<SkillIconName, DeveloperData["skillCategories"][number]["icon"]> = {
  Layers,
  Terminal,
  Database,
  Cpu,
};

export default function DeveloperDataProvider({
  children,
  initialData,
}: {
  children: ReactNode;
  initialData: SerializableDeveloperData;
}) {
  const developerData = useMemo<DeveloperData>(() => ({
    ...initialData,
    skillCategories: initialData.skillCategories.map((category) => ({
      ...category,
      icon: iconMap[category.icon],
    })),
  }), [initialData]);
  const value = useMemo(() => ({ developerData }), [developerData]);

  return <DeveloperDataContext.Provider value={value}>{children}</DeveloperDataContext.Provider>;
}

export function useDeveloperData() {
  const context = useContext(DeveloperDataContext);

  if (!context) {
    throw new Error("useDeveloperData must be used within a DeveloperDataProvider");
  }

  return context;
}
