import Link from "next/link";
import { Mail, Linkedin, Facebook, Instagram, Twitter, MessageSquare, ExternalLink } from "lucide-react";

// Custom Icons for Medium and Behance
const MediumIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.82 6.82 0 010 12a6.82 6.82 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42S14.2 15.54 14.2 12s1.51-6.42 3.38-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75s-1.19-2.58-1.19-5.75.53-5.75 1.19-5.75S24 8.83 24 12z" />
  </svg>
);

const BehanceIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22 7h-7v-2h7v2zm-11.586 3.488c-.282-1.399-1.251-2.488-3.414-2.488-3.355 0-4 2.848-4 4.5 0 1.836 1.05 4.5 3.518 4.5 1.841 0 2.946-1.077 3.33-2.5h-2.188c-.144.5-.688 1-1.365 1-1.071 0-1.293-.834-1.293-2h4.85c.101-1.042-.036-2.158-.438-3.012zm-4.414 1.512c0-1.129.5-1.5 1.05-1.5.55 0 1 .371 1 1.5h-2.05zm14.39 1.109c.677-.303 1.11-.849 1.11-1.74 0-1.558-1.309-1.859-2.617-1.859h-4.39v9h4.153c1.378 0 2.847-.367 2.847-2.133 0-1.258-.853-2.155-1.103-3.268zm-3.411-1.936h.915c.656 0 1.012.14 1.012.75 0 .543-.356.66-.938.66h-.989v-1.41zm1.096 4.936h-1.096v-1.583h1.161c.642 0 .977.126.977.729 0 .61-.345.854-1.042.854z" />
  </svg>
);

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/adeniyi-john?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: Linkedin,
    color: "text-[#0077B5]",
    description: "Professional network & career updates"
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/johnnykeystech01?igsh=ZTRtcXdubGY4dDhx",
    icon: Instagram,
    color: "text-[#E4405F]",
    description: "Visual updates & behind the scenes"
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/AdeniyiJohnOla1",
    icon: Twitter,
    color: "text-black dark:text-white",
    description: "Daily thoughts & tech discussions"
  },
  {
    name: "Medium",
    href: "https://medium.com/@johnnykeystech01",
    icon: MediumIcon,
    color: "text-black dark:text-white",
    description: "Long-form articles & brand strategy"
  },
  {
    name: "Behance",
    href: "https://www.behance.net/johnadeniyi01",
    icon: BehanceIcon,
    color: "text-[#0057ff]",
    description: "Design portfolio & case studies"
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/18Ncq4Vd8M/",
    icon: Facebook,
    color: "text-[#1877F2]",
    description: "Community updates & networking"
  }
];

export default function ContactPage() {
  return (
    <div className="bg-zinc-50 dark:bg-black min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero Section */}
        <div className="mb-20 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
            <div className="w-8 h-px bg-teal-500"></div>
            <p className="text-teal-500 font-semibold tracking-widest uppercase text-sm">
              Contact
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mb-8">
            Let's build<br />something <span className="text-teal-600">real.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Whether you have a clear project in mind or just need clarity on where to start, reach out. I read every message personally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Info Column */}
          <div className="space-y-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">Get in touch</p>
              
              <div className="space-y-10">
                <div className="group">
                  <p className="text-sm font-semibold text-teal-600 mb-2">Email</p>
                  <a 
                    href="mailto:hellojohnadeniyi@gmail.com" 
                    className="text-2xl font-bold text-slate-900 dark:text-white hover:text-teal-600 transition-colors break-all"
                  >
                    hellojohnadeniyi@gmail.com
                  </a>
                </div>

                <div className="group">
                  <p className="text-sm font-semibold text-teal-600 mb-2">Discovery Call</p>
                  <Link 
                    href="#" 
                    className="inline-flex items-center text-2xl font-bold text-slate-900 dark:text-white hover:text-teal-600 transition-colors"
                  >
                    Book a 30-min call
                    <ExternalLink className="ml-3 h-6 w-6" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <p className="text-sm font-semibold text-teal-600 mb-2">Response Time</p>
                    <p className="text-slate-600 dark:text-slate-400">Within 48 business hours</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-teal-600 mb-2">Based in</p>
                    <p className="text-slate-600 dark:text-slate-400">Lagos, Nigeria · Working globally</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
              <p className="text-lg italic text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                "I work with founders who are serious about building a brand that lasts, not just one that looks good."
              </p>
              <p className="font-bold text-teal-600">— The John Adeniyi</p>
            </div>
          </div>

          {/* Social Media Grid */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">Connect on Social</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 flex items-start gap-4 hover:border-teal-500/50 hover:shadow-md transition-all group"
                >
                  <div className={`p-3 rounded-lg bg-slate-50 dark:bg-slate-800 ${social.color} group-hover:scale-110 transition-transform`}>
                    <social.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">
                      {social.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      {social.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 p-8 bg-teal-50 dark:bg-teal-900/10 rounded-2xl border border-teal-100 dark:border-teal-900/30">
              <div className="flex items-center gap-4 mb-4 text-teal-700 dark:text-teal-400">
                <MessageSquare className="h-6 w-6" />
                <h3 className="font-bold text-lg">Direct Messages</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Feel free to slide into my DMs on any of these platforms. I'm most active on LinkedIn and X for professional enquiries.
              </p>
            </div>
          </div>

        </div>

        {/* Process Section (simplified from static) */}
        <div className="mt-32 pt-20 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center mb-16">
            <p className="text-teal-500 font-semibold tracking-widest uppercase text-sm mb-4">What Happens Next</p>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">After you reach out.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: "01", title: "Review", text: "I read every submission carefully and take time to understand your situation before responding." },
              { num: "02", title: "Discovery", text: "If we seem like a good fit, I'll invite you to a 30-minute discovery call to dive deeper into your goals." },
              { num: "03", title: "Proposal", text: "If it's a fit, I'll send a clear proposal with scope, timeline, and pricing. Once agreed, we begin." }
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="text-5xl font-black text-slate-100 dark:text-slate-800 mb-6">{step.num}</div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{step.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
