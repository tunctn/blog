interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: React.ReactNode;
}

export const Section = ({ title, children, ...props }: SectionProps) => {
  return (
    <div {...props}>
      {title && <h3 className="font-semibold">{title}</h3>}
      {children}
    </div>
  );
};
