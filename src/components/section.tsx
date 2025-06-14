interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
}

export const Section = ({ title, children, ...props }: SectionProps) => {
  return (
    <div {...props}>
      <h3 className="font-bold text-lg">{title}</h3>
      {children}
    </div>
  );
};
