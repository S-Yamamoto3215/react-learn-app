import { Button, IconButton } from '@chakra-ui/react'

export const MyButton = (props: { children: any; handleClick: any; }) => {
  const { children, handleClick } = props;
  return (
    <Button onClick={handleClick}>{children}</Button>
  )
}

export const MyIconButton = (props: { handleClick: any; icon: any, label: any }) => {
  const { handleClick, icon, label } = props;
  return (
    <IconButton
      aria-label={label}
      icon={icon}
      onClick={handleClick}
    />
  )
}
