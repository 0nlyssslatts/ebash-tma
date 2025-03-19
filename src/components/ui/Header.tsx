export function Header({
  text
}: {
  text: string;
}) {
  return (
    <h1 className="font-blackout text-8xl mt-5">{text}</h1>
  );
}
