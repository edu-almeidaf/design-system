import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@edu-almeida-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/edu-almeidaf.png',
    alt: 'Eduardo de Almeida Fernandes',
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
