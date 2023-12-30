import { InputHTMLAttributes, ReactNode } from "react"

interface DefaultInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  leftElement?: ReactNode
  rightElement?: ReactNode
}

export const DefaultInput = ({ helperText, type = 'text', rightElement, leftElement, ...rest }: DefaultInputProps) => {

  return (
    <div className="w-full">
      {leftElement && <>{leftElement}</>}
      <input
        className="h-[52px] w-full border border-gray-400 rounded-md p-3 focus:outline-purple"
        type={type}
        {...rest}
      />
      <span>
        {helperText && helperText.length > 0 && (
          <p className="text-xs mt-2  font-[700] text-red-400">{helperText}</p>
        )}
      </span>

      {rightElement && <>{rightElement}</>}
    </div>
  )
}
