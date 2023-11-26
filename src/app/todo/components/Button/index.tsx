import { Button, IconButton } from '@chakra-ui/react'
import { type } from 'os';

type myButtonProps = {
  size: "lg" | "md" | "sm" | "xs",
  children: any,
  handleClick: any,
}
export const MyButton = (props: myButtonProps) => {
  const { size="md", children, handleClick } = props;
  return (
    <Button colorScheme="green" size={size} onClick={handleClick}>{children}</Button>
  )
}

export const MyIconButton = (props: { handleClick: any; icon: any, label: any }) => {
  const { handleClick, icon, label } = props;
  return (
    <IconButton
      colorScheme="green"
      aria-label={label}
      icon={icon}
      onClick={handleClick}
    />
  )
}
