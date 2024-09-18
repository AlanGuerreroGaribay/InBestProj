const Input = ({ placeHolder, onchange }: any) => {
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
