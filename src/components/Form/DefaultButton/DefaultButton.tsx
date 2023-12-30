import { ButtonHTMLAttributes } from "react"

interface DefaultButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string
  buttonContent?: string
}

export const DefaultButton = ({ bgColor, buttonContent, ...rest }: DefaultButtonProps) => {
  return (
    <div>
      <button
        type="button"
        {...rest}
        className="h-[52px] w-full bg-purple rounded-md p-2 text-primary text-sm font-semibold tracking-wide">
        {buttonContent}
      </button>
    </div>
  )
}
