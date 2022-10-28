import React from "react";
import * as Utils from '../../../utils/Functions'
import styles from "./selectform.module.scss"


export type SelectOptionsType = {
    value: string
    disabled?: boolean
    name?: string
}


interface SelectFormProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: SelectOptionsType[]
    readOnly?: boolean
    errorMessage?: string
    

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
                            {option.name}
                        </option>
                    )
                })}
            </select>
    );

})
SelectForm.displayName = 'SelectForm';
export default SelectForm;
