import React from "react"
import SelectForm from "./elements/SelectForm"
import countries from '../constants/country.json'

const SelectCountry = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>((props, ref) => {
  {/* eslint-disable-next-line react/display-name */ }
  return <SelectForm {...props} ref={ref} options={countries} />
})
SelectCountry.displayName = 'SelectCountry';
export default SelectCountry