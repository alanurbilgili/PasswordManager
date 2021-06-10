import './Main.css';
import { Link } from 'react-router-dom';

const Bstyle = ['btn--primary', 'btn--outline', 'btn--test'];

const Bsize = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = Bstyle.includes(buttonStyle) ? buttonStyle : Bstyle[0];

  const checkButtonSize = Bsize.includes(buttonSize) ? buttonSize : Bsize[0];

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  );

};
