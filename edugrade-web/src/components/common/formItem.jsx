import React from "react";
import PropTypes from "prop-types";

const FormItem = ({ children, name, errors }) => {
  return (
    <div>
      {children}
      {errors[name] && (
        <p className="text-xs text-red-600 mt-1 ml-1">{errors[name].message}</p>
      )}
    </div>
  );
};

export default FormItem;
