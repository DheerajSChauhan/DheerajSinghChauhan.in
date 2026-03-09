import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Home, User, Layers, Briefcase, FolderOpen, Award, GraduationCap, Image } from "lucide-react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Home", icon: Home, href: "#" },
  { label: "About", icon: User, href: "#about" },
  { label: "Tech Stack", icon: Layers, href: "#tech-stack" },
  { label: "Experience", icon: Briefcase, href: "#experience" },
  { label: "Projects", icon: FolderOpen, href: "#projects" },
  { label: "Achievements", icon: Award, href: "#awards" },
  { label: "Education", icon: GraduationCap, href: "#education" },
  { label: "Gallery", icon: Image, href: "/gallery" },
];

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CommandPalette = ({ open, onOpenChange }: CommandPaletteProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const handleSelect = (href: string) => {
    onOpenChange(false);
    if (href.startsWith("/")) {
      navigate(href);
    } else if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Menu">
          {menuItems.slice(0, 1).map((item) => (
            <CommandItem key={item.label} onSelect={() => handleSelect(item.href)}>
              <item.icon className="mr-2 h-4 w-4" />
              <span>{item.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Portfolio">
          {menuItems.slice(1).map((item) => (
            <CommandItem key={item.label} onSelect={() => handleSelect(item.href)}>
              <item.icon className="mr-2 h-4 w-4" />
              <span>{item.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default CommandPalette;