import "./inputfield.module.scss"

interface IInputFieldProps {
    id?: string
    type: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    label: string
    className?: string
    placeholder?: string,
    defaultValue?: string
    value?: string,
    required?: boolean,
    errorMessage?: string,
    disabled?: boolean,
}

export const InputField = (props: IInputFieldProps) => {
    const {
        id = "PhoneNumber",
        type = "text", 
        onChange, 
        value,
        label,
        ...rest
    } = props
    return (
        <div className="form-group">
            <label>{label}</label>
            <input
                id={id}
                className="form-control"
                type={type}
                value={value}
                onChange={onChange}
            >
            </input>
        </div>
    )
}
