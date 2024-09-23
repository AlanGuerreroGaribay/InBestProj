const Input = ({
  placeHolder,
  onchange,
}: {
  placeHolder?: string;
  onchange?: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <input
      onChange={onchange}
      placeholder={placeHolder}
      className="input"
      type="text"
    />
  );
};

export default Input;
