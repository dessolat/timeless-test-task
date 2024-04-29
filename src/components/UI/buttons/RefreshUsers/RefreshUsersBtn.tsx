import cl from './RefreshUsersBtn.module.scss';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

function RefreshUsersBtn(props: Props) {
  return (
    <button className={cl.btn} {...props}>
      <div>Refresh Users</div>
    </button>
  );
}

export default RefreshUsersBtn;
