import { ElementRef, forwardRef } from 'react'
import { ComponentProps } from '../../interfaces/ComponentProps'
import { TextAreaEl } from './styles'

export interface TextAreaProps extends ComponentProps<typeof TextAreaEl> {
  placeholder?: string
  disabled?: boolean
}

export const TextArea = forwardRef<
  ElementRef<typeof TextAreaEl>,
  TextAreaProps
>((props, ref) => {
  return <TextAreaEl {...props} ref={ref} />
})

TextArea.displayName = 'TextArea'
