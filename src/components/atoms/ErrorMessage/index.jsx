import clsx from 'clsx'
import style from './style.module.css'

const ErrorMessage = ({ children, className, restProps }) => {
  return (
    <div className={clsx(style.error, className)} {...restProps}>
      {children}
    </div>
  )
}

export default ErrorMessage