import { Check } from 'lucide-react'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { CheckboxContainer, CheckboxIndicator } from './styles'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export const Checkbox = forwardRef<
  ElementRef<typeof CheckboxContainer>,
  CheckboxProps
>((props, ref) => {
  return (
    <CheckboxContainer {...props} ref={ref}>
      <CheckboxIndicator asChild>
        <Check fontWeight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
})

Checkbox.displayName = 'Checkbox'
