
import ButtonProps from "@/types/button";
import React from "react";

const ButtonSubmit: React.FC<ButtonProps> = ({ children, className = ''}) => {
    return (
        <button
          type="submit"
          className={`inline-block relative mx-2.5 px-5 text-center font-bold text-sm leading-6 no-underline ${className}`}
        >
          {children}
        </button>
      );
}

export default ButtonSubmit;