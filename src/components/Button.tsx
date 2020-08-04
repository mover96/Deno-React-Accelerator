import { React } from '../deps.ts'

interface ButtonProps {
  hideButton: () => void
}

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
  return (
    <a onClick={props.hideButton}>Button Function Component! Click to hide</a>
  )
}
