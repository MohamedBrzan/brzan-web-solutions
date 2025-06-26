import { Github, Linkedin, Mail } from "lucide-react";

const SocialLinks = ({ size = 20, className = "flex space-x-4" }) => {
  return (
    <div className={className}>
      <a
        href="https://github.com/mohamedbrzan"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label="GitHub"
      >
        <Github size={+size} />
      </a>
      <a
        href="https://www.linkedin.com/in/mohamed-brzan-01966518a/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={+size} />
      </a>
      <a
        href="mailto:mohamedbrzan.dev@gmail.com"
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label="Email"
      >
        <Mail size={+size} />
      </a>
    </div>
  );
};

export default SocialLinks;
