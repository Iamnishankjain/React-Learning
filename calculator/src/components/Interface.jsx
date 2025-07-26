import Input from "./Input";
import Button from "./Button";
function Interface() {
  const fields = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className="main-div">
      <Input></Input>
      <div className="btn-container">
        {fields.map((f) => (
          <Button key={f} field={f}></Button>
        ))}
      </div>
    </div>
  );
}

export default Interface;
