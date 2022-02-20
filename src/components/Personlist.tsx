type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[]; // << how to type an array of objects ie: {}[]
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      <h3>Person List</h3>
      {props.names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};
