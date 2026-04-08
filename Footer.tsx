import { Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <Instagram size={20} />
              <span className="font-semibold">Instagram</span>
            </div>
            <a
              href="https://instagram.com/noventris_aldonio_va"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-white transition-colors"
            >
              @noventris_aldonio_va
            </a>
          </div>

          <div className="flex flex-col items-center md:items-center">
            <div className="flex items-center gap-2 mb-2">
              <Linkedin size={20} />
              <span className="font-semibold">LinkedIn</span>
            </div>
            <a
              href="https://www.linkedin.com/in/noventrisaldonio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-white transition-colors"
            >
              Noventris Aldonio
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center gap-2 mb-2">
              <Mail size={20} />
              <span className="font-semibold">Email</span>
            </div>
            <a
              href="mailto:noventrisaldonio201@gmail.com"
              className="text-primary-foreground/80 hover:text-white transition-colors"
            >
              noventrisaldonio201@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60 text-sm">
          &copy; {new Date().getFullYear()} Noventris Aldonio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
