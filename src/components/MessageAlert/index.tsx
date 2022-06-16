import { Button, Dropdown } from '@douyinfe/semi-ui';
import { IconBell } from '@douyinfe/semi-icons';
import style from './MessageAlert.module.scss';
import { useRecoilState } from 'recoil';
import { isLogin } from '../../store';

export default function MessageAlert(){
  const [isUserlogin, setIsUserLogin] = useRecoilState(isLogin);

  return (
    <Dropdown
      className={style.dropDownStyle}
      position='bottomRight'
      render={
        <Dropdown.Menu className={style.menuContainer}>
          <div className={style.dropDownTitle}>通知中心</div>
          <div className={style.dropDownItemContainer}>
            { isUserlogin === false ?
              <div className={style.noLogin}>
                <p className={style.noLoginText}>登录查看信息</p>
              </div>
              : null
            }
          </div>
        </Dropdown.Menu>
      }
    >
      <Button 
        theme='borderless'
        type='tertiary' 
        icon={<IconBell size='large'></IconBell>} 
      />
    </Dropdown>
  );
}
