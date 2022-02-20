type HeadingProps = {
  // children: string;

  children: React.ReactNode; // << useful type (see useContext)
};
export const Heading = (props: HeadingProps) => {
  return <div>{props.children}</div>;
};
