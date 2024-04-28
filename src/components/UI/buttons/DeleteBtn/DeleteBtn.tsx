import cl from './DeleteBtn.module.scss';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

function DeleteBtn(props: Props) {
  return <button className={cl.btn} {...props}>
		<img src='trashcan_icon.png' />
	</button>;
}

export default DeleteBtn;
