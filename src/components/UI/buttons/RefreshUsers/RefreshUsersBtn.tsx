import cl from './RefreshUsersBtn.module.scss';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

function RefreshUsersBtn(props: Props) {
  return <button className={cl.btn} {...props}>Refresh Users</button>;
}

export default RefreshUsersBtn;
