import React from 'react';

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // void: does not return a value
};

export const Button = (props: ButtonProps) => {
  return <button onClick={props.handleClick}>Click</button>;
};
