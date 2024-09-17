import LabelProps from "@/types/label";
import React from "react";

const Label: React.FC<LabelProps> = ({ htmlFor, children, className = ''}) => {
    return (
        <label
          htmlFor={htmlFor}
          className={`block text-sm font-medium text-gray-700 ${className}`}
        >
          {children}
        </label>
      );
}

export default Label;