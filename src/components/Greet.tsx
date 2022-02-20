type GreetProps = {
  name: string;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>Greetings {props.name}</h2>
    </div>
  );
};
