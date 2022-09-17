import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  placeholder: string
}

export function Input({ id, placeholder, ...rest }: InputProps) {
  return (
    <input
      id={id}
      placeholder={placeholder}
      className="bg-zinc-900 py-3 px-4 rounded text-small placeholder:text-zinc-500"
      {...rest}
    />
  )
}