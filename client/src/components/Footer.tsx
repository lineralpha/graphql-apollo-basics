type FooterProps = {
  title: string
};

export const Footer = ({title}: FooterProps) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

