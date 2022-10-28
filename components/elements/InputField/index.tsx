import styles from "./inputfield.module.scss"
import classNames from 'classnames'

interface IInputFieldProps {
  className?: string
  defaultValue?: string
  disabled?: boolean
  errorMessage?: string
  id?: string
  label?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  required?: boolean
  type: string
  value?: string
}

export const InputField = (props: IInputFieldProps) => {
  const {
    id = "PhoneNumber",
    type = "text",
    onChange,
    value,
    label,
    placeholder,
    required,
    className,
    ...rest
  } = props
  return (
    // {classNames('form-input', classNameFormInput, isFocused || inputActive ? 'active' : '')
    // <div className={`form-group ${styles.formGroup}`}>
    <div className={classNames('form-group ', styles.formGroup, className ? className : '' )}>
      <label className={`B1 ${styles.label}`}>
        {label}
        {required ? "*" : ""}
      </label>
      <input
        id={id}
        className={`form-control B2 ${styles.input}`}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
      ></input>
    </div>
  )
}
