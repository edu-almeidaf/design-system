import { ComponentProps } from 'react'
import { User } from 'lucide-react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
