import React from "react";
import PropTypes from "prop-types";

const FormSelect = ({
  label,
  register,
  keyValue,
  error,
  existFirstOpt,
  list=[],
  onChange
}) => {
  return (
    <div className="flex flex-col text-right" key={keyValue}>
      <label htmlFor={{...register}}>{label}</label>
      <select
        {...register}
        className= "bg-rose-200 p-2 rounded border-2 outline-0 focus:border-blue-600 text-right disabled:bg-gray-300"
        style={{direction: "rtl"}}
        disabled ={list.length == 0}
        onChange={onChange && onChange}
      >
        {existFirstOpt && <option className="font-medium" value="">یک مورد را انتخاب نمایید</option>}
        {list.map((value, index) =>(
          <option value={value} key={index}>{value}</option>
        ))}
      </select>
      {!!error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

FormSelect.propTypes={
    keyValue:PropTypes.number.isRequired,
    label:PropTypes.string.isRequired,
    register:PropTypes.object,
    error:PropTypes.string,
    existFirstOpt:PropTypes.bool.isRequired,
    list:PropTypes.array,
    onChange:PropTypes.func
}

export default FormSelect;
