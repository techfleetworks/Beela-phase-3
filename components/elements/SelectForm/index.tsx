import React from "react";
import * as Utils from '../../../utils/Functions'
import styles from "./selectform.module.scss"


export type SelectOptionsType = {
    value: string
    label: string
    disabled?: boolean
}

interface SelectFormProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: SelectOptionsType[]
    readOnly?: boolean
    errorMessage?: string
    label?: string
    name?: string

}

const SelectForm = React.forwardRef<HTMLSelectElement, SelectFormProps>((props, ref) => {
    const {
        name,
        defaultValue,
        placeholder,
        id,
        options,
        readOnly = false,
        value,
        errorMessage,
        disabled,
        required,
        ...rest
    } = props
    return (
        <div className={`form-group ${styles.formGroup}`}>
            <label className={`B1 ${styles.label}`}>
                {name}
                {required ? "*" : ""}
            </label>
            <select 
            id={id} 
            name={name} 
            value={value || defaultValue || ''} 
            ref={ref} {...rest} 
            disabled={disabled}
            className={`form-control B2 ${styles.input}`}
            >
                {options.map((option) => {
                    const key = option.value || Utils.simpleKeyGenerator(5)

                    return (
                        <option key={key} value={option.value}>
                            {option.label}
                        </option>
                    )
                })}
            </select>
        </div>
    );

})

export default SelectForm;
