export interface DataProps {
  text: string;
}

export function Data({ text }: DataProps) {
  return (
    <div>
      <h1>Welcome to Data! {text} 222</h1>
    </div>
  );
}

export default Data;
