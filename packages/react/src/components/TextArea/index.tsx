import { ElementRef, forwardRef } from 'react'
import { ComponentProps } from '../../interfaces/ComponentProps'
import * as S from './styles'

export interface TextAreaProps extends ComponentProps<typeof S.TextArea> {
  placeholder?: string
  disabled?: boolean
}

export const TextArea = forwardRef<
  ElementRef<typeof S.TextArea>,
  TextAreaProps
>((props, ref) => {
  return <textarea {...props} ref={ref} />
})

TextArea.displayName = 'TextArea'
