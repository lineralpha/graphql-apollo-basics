type HeaderProps = {
  title: string
};

export function Header({title}: HeaderProps) {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
}
