interface PunchLineProps {
  children: React.ReactNode;
}

export function PunchLine({ children }: PunchLineProps) {
  return (
    <div className="my-8 text-center py-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-light/20 to-transparent" />
      <p className="relative z-10 text-lg md:text-xl font-bold text-charcoal leading-relaxed">
        {children}
      </p>
    </div>
  );
}
