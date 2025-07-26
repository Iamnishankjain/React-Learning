const ErrorMessage = ({fooditem}) => {
  return <>{fooditem.length === 0 && <h3>I am hungry</h3>}</>;
};
export default ErrorMessage;
