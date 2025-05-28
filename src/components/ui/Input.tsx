type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps): React.ReactNode {
  return <input className="bg-background border text-sm rounded block w-full p-2.5" {...props} />;
}
