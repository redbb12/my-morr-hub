import React from "react";

interface textareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const textarea = React.forwardRef<HTMLTextAreaElement, textareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#b5002b] w-full resize-none ${className}`}
        {...props}
      />
    );
  }
);

textarea.displayName = "textarea";
