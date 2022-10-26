import React from "react"
import SelectForm from "./elements/SelectForm"
import countries from '../constants/country.json'

const SelectCountry = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>((props, ref) => {
    return <SelectForm {...props} ref={ref} options={countries} />
  })
  
  export default SelectCountry