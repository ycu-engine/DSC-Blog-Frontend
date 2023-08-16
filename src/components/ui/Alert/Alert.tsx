import { FC, ReactNode } from 'react'
import { Alert as AlertContainer, AlertDescription, AlertTitle, AlertVariants } from './shadcn'

const variantTitleMapper: Record<AlertVariants, string> = {
  error: 'ERROR!',
  success: 'Success!',
  warning: 'Warning!',
  info: 'Info!',
}

type AlertProps = {
  children?: ReactNode
  variant: AlertVariants
  containerProps?: Parameters<typeof AlertContainer>[0]
  titleProps?: Parameters<typeof AlertTitle>[0]
  descriptionProps?: Parameters<typeof AlertDescription>[0]
}
export const Alert: FC<AlertProps> = (props) => {
  const { children: description, variant } = props

  const alertTitle = variantTitleMapper[variant]

  return (
    <AlertContainer variant={variant} {...props.containerProps}>
      <AlertTitle {...props.titleProps}>{alertTitle}</AlertTitle>
      <AlertDescription {...props.descriptionProps}>{description}</AlertDescription>
    </AlertContainer>
  )
}
