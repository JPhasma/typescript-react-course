type GreetProps = {
  name: string;
  messageCount?: number; // means this prop type is optional and can be ommitted
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}, your have ${props.messageCount} unread messages`
          : 'Welcome Guest'}
      </h2>
    </div>
  );
};
