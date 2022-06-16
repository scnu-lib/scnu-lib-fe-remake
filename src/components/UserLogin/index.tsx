import { Button } from '@douyinfe/semi-ui';
import style from './UserLogin.module.scss';
import { useRecoilState } from 'recoil';
import { isLogin } from '../../store';

export default function UserLogin(){
  const [isUserLogin, setIsUserLogin] = useRecoilState(isLogin);

  return (
    <div className={ style.loginContainer }>
      { isUserLogin === false ?  
        <Button 
          className={ style.buttonStyle }
          theme='borderless'
        >
          注册|登录
        </Button>
        : null
      }
    </div>
  );
}
