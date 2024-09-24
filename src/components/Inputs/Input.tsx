const Input = ({
  value,
  placeHolder,
  onchange,
}: {
  value?: string;
  placeHolder?: string;
  onchange?: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <input
      value={value}
      onChange={onchange}
      placeholder={placeHolder}
      className="input"
      type="text"
    />
  );
};

export default Input;
