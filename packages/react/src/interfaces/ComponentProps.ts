import { ComponentProps as CP } from '@stitches/react'
import { ElementType, ReactNode } from 'react'

export type ComponentProps<T> = CP<T> & {
  as: ElementType
  children: ReactNode
}
