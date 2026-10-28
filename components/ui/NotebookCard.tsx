import React from "react";
import { NotebookSpiral } from "@/components/decorations/NotebookSpiral";
import { Tape } from "@/components/decorations/Tape";

interface NotebookCardProps {
  children: React.ReactNode;
  className?: string;
  withSpiral?: "left" | "top" | "none";
  withTape?: "top-center" | "top-corners" | "none";
  tone?: "cream" | "paper" | "blush" | "white";
  withGrid?: boolean;
}

export function NotebookCard({
  children,
  className = "",
  withSpiral = "none",
  withTape = "none",
  tone = "cream",
  withGrid = true,
}: NotebookCardProps) {
  const toneBg = {
    cream: "bg-cream",
    paper: "bg-paper",
    blush: "bg-blush",
    white: "bg-white",
  };

  return (
    <div
      className={`relative rounded-2xl border-2 border-ink-900 shadow-editorial ${toneBg[tone]} ${
        withGrid ? "bg-notebook-grid" : ""
      } ${withSpiral === "left" ? "pl-6 sm:pl-9" : ""} ${
        withSpiral === "top" ? "pt-6 sm:pt-8" : ""
      } ${className}`}
    >
      {withSpiral === "left" && (
        <div className="absolute left-0 top-0 bottom-0 z-10 hidden sm:block">
          <NotebookSpiral count={9} orientation="vertical" />
        </div>
      )}

      {withSpiral === "top" && (
        <div className="absolute top-0 left-0 right-0 z-10">
          <NotebookSpiral count={10} orientation="horizontal" />
        </div>
      )}

      {withTape === "top-center" && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <Tape variant="butter" rotation={-2} />
        </div>
      )}

      {withTape === "top-corners" && (
        <>
          <div className="absolute -top-3.5 -left-4 z-10">
            <Tape variant="blush" rotation={-28} />
          </div>
          <div className="absolute -top-3.5 -right-4 z-10">
            <Tape variant="butter" rotation={28} />
          </div>
        </>
      )}

      {/* Subtle red notebook margin rule when left spiral is enabled */}
      {withSpiral === "left" && (
        <div
          className="hidden sm:block absolute top-0 bottom-0 left-12 w-px bg-rose-accent/30 pointer-events-none"
          aria-hidden="true"
        />
      )}

      <div className="relative z-[1]">{children}</div>
    </div>
  );
}

