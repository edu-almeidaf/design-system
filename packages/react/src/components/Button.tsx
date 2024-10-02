import { ComponentProps } from '../interfaces/ComponentProps'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },
  
  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$blue500',

        '&:not(:disabled):hover': {
          backgroundColor: '$blue300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      secondary: {
        color: '$blue300',
        border: '2px solid $blue500',

        '&:not(:disabled):hover': {
          backgroundColor: '$blue500',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

Button.displayName = 'Button'

export interface ButtonProps extends ComponentProps<typeof Button> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md'
}
