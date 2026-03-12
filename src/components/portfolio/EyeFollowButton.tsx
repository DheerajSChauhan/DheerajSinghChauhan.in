interface FluidButtonProps {
  label?: string;
  href?: string;
  download?: string;
}

const FluidButton = ({ label = "Resume", href = "#", download }: FluidButtonProps) => {
  return (
    <a
      href={href}
      target={download ? "_self" : "_blank"}
      rel="noopener noreferrer"
      download={download}
      className="group relative inline-flex items-center justify-center rounded-full border border-border px-4 py-1.5 text-xs font-medium overflow-hidden no-underline transition-colors"
    >
      {/* Default text */}
      <span className="relative z-10 text-foreground transition-colors duration-500 ease-[cubic-bezier(.4,0,0,1)] group-hover:text-background">
        {label}
      </span>

      {/* Slide-fill overlay */}
      <span
        className="absolute inset-0 bg-foreground translate-y-full transition-transform duration-500 ease-[cubic-bezier(.4,0,0,1)] group-hover:translate-y-0"
        aria-hidden="true"
      />
    </a>
  );
};

export default FluidButton;
