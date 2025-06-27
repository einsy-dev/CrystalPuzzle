interface CheckboxProps {
  id?: string;
  name?: string;
  required?: boolean;
}
export function Checkbox({ required, name, id }: CheckboxProps) {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        name={name}
        className=""
        required={required}
      />
    </>
  );
}
