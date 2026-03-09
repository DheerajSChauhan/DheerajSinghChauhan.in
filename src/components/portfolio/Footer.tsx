const Footer = () => {
  return (
    <footer className="section-container px-4 py-8 border-t border-border">
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dheeraj Singh Chauhan
        </p>
        <a
          href="https://github.com/DheerajSChauhan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;