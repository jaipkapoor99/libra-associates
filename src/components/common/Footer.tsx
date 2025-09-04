export const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Libra Associates. All rights reserved.
        </p>
        <p className="text-balance text-center text-xs text-muted-foreground md:text-right">
          Professional Legal Services | Property Law Specialists
        </p>
      </div>
    </footer>
  );
};
