export const Button = (props: { children: any; handleClick: any; }) => {
  const { children, handleClick } = props;
  return (
    <button onClick={handleClick}>{children}</button>
  )
}
