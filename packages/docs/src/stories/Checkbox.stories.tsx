import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps, Box, Text } from '@edu-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', alignItems: 'center', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
