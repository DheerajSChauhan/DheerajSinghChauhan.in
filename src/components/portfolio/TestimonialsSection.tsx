import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
  url: string;
}

const topRow: Testimonial[] = [
  { quote: "whoa, this is really dope – needs to get added to @shadcn UI", name: "Steven Tey", title: "Founder @Dub.co", avatar: "https://unavatar.io/x/steventey", url: "https://x.com/steventey/status/1936934909370830924" },
  { quote: "awesome. Love the components, especially slide-to-unlock. Great job", name: "Guillermo Rauch", title: "CEO @Vercel", avatar: "https://unavatar.io/x/rauchg", url: "https://x.com/rauchg/status/1978913158514237669" },
  { quote: "Seriously, this is one of the best portfolio templates I've ever seen.", name: "OrcDev", title: "Creator of 8bitcn.com", avatar: "https://unavatar.io/x/orcdev", url: "https://x.com/orcdev/status/1980378575170859446" },
  { quote: "your portfolio is stunning. i created mine some weeks ago but this is another planet.", name: "Francesco Ciulla", title: "Developer Advocate @daily.dev", avatar: "https://unavatar.io/x/FrancescoCiull4", url: "https://x.com/FrancescoCiull4/status/2006332479536529608" },
  { quote: "one of my favorite projects that submitted! you are crushing it!", name: "Kap", title: "Head of Developer Community @Vercel", avatar: "https://unavatar.io/x/kapehe_ok", url: "https://x.com/kapehe_ok/status/1948104774358106612" },
  { quote: "best portfolio I've ever seen, minimal, clean and sick", name: "Kartikey", title: "Engineer", avatar: "https://unavatar.io/x/KartikeyStack", url: "https://x.com/KartikeyStack/status/2016717957938974963" },
  { quote: "Love your work Dai! You're a great talent :-)", name: "Shadcraft", title: "shadcn/ui kit for Figma and React", avatar: "https://unavatar.io/x/shadcncraft", url: "https://x.com/shadcncraft/status/2017091317244055988" },
  { quote: "The best looking website I've ever seen? @iamncdai portfolio!", name: "Megh", title: "Creator of patterncraft.fun", avatar: "https://unavatar.io/x/meghtrix", url: "https://x.com/meghtrix/status/2017658774530781471" },
];

const bottomRow: Testimonial[] = [
  { quote: "super clean", name: "Zaid", title: "Creator of scira.ai", avatar: "https://unavatar.io/x/zaidmukaddam", url: "https://x.com/zaidmukaddam/status/1984599685974409374" },
  { quote: "Nice", name: "shadcn", title: "Creator of shadcn/ui", avatar: "https://unavatar.io/x/shadcn", url: "https://x.com/shadcn/status/1992950153976991893" },
  { quote: "This Portfolio is something else", name: "Ajay Patel", title: "Creator of shadcnstudio.com", avatar: "https://unavatar.io/x/ajaypatel_aj", url: "https://x.com/ajaypatel_aj/status/1992946036558778494" },
  { quote: "Congrats. Way to go.", name: "shadcn", title: "Creator of shadcn/ui", avatar: "https://unavatar.io/x/shadcn", url: "https://x.com/shadcn/status/2011452657702154747" },
  { quote: "Looks great", name: "jordwalke", title: "Creator of React", avatar: "https://unavatar.io/x/jordwalke", url: "https://x.com/jordwalke/status/1937165909778657589" },
  { quote: "incredible portfolio i've seen by far", name: "Yonaries", title: "Making orabrowser.com", avatar: "https://unavatar.io/x/YonathanDejene", url: "https://x.com/YonathanDejene/status/1984529637309886639" },
  { quote: "Simple and clean, love it!", name: "David Haz", title: "Creator of reactbits.dev", avatar: "https://unavatar.io/x/davidhdev", url: "https://x.com/davidhdev/status/2017868986969444511" },
  { quote: "Goated portfolio. I love the whole UI in Vercel style", name: "khushi.vy", title: "Software Engineer", avatar: "https://unavatar.io/x/khushiirl", url: "https://x.com/khushiirl/status/2025894411155206168" },
];

const TestimonialCard = ({ t }: { t: Testimonial }) => (
  <a
    href={t.url}
    target="_blank"
    rel="noopener noreferrer"
    className="testimonial-card shrink-0 w-72 hover:border-foreground/20 transition-colors"
  >
    <p className="text-sm text-foreground leading-relaxed">"{t.quote}"</p>
    <div className="flex items-center gap-2.5 pt-1">
      <img src={t.avatar} alt={t.name} className="w-8 h-8 rounded-full object-cover" loading="lazy" />
      <div>
        <p className="text-sm font-medium text-foreground">{t.name}</p>
        <p className="text-xs text-muted-foreground">{t.title}</p>
      </div>
    </div>
  </a>
);

const TestimonialsSection = () => {
  const doubledTop = [...topRow, ...topRow];
  const doubledBottom = [...bottomRow, ...bottomRow];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id="testimonials"
      className="py-6 border-t border-border overflow-hidden"
    >
      <div className="section-container px-4 mb-4">
        <h2 className="text-lg font-semibold text-foreground">Testimonials</h2>
      </div>
      <div className="relative space-y-3">
        {/* Top row - scrolls left */}
        <div className="flex gap-3 animate-scroll-left hover:[animation-play-state:paused]">
          {doubledTop.map((t, i) => (
            <TestimonialCard key={`top-${i}`} t={t} />
          ))}
        </div>
        {/* Bottom row - scrolls right */}
        <div className="flex gap-3 animate-scroll-right hover:[animation-play-state:paused]">
          {doubledBottom.map((t, i) => (
            <TestimonialCard key={`bottom-${i}`} t={t} />
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
