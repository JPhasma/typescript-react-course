type StatusProps = {
  // status: string; << the status message could be anyt= string so could cause errors

  // using a union of string literals to define and limit status type
  status: 'loading' | 'success' | 'error';
};

export const Status = (props: StatusProps) => {
  let message;
  if (props.status === 'loading') {
    message = 'Loading ...';
  } else if (props.status === 'success') {
    message = 'Data fetced successfully!';
  } else if (props.status === 'error') {
    message = 'Error fetching data';
  }
  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};
