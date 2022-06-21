import { Button, Dropdown, Typography } from '@douyinfe/semi-ui';
import { IconBell } from '@douyinfe/semi-icons';
import style from './MessageAlert.module.scss';
import { useRecoilState } from 'recoil';
import { isLogin } from '../../store';
const { Text } = Typography;

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
            { isUserlogin ?
              null
              : 
              <div className={style.noLogin}>
                <Text className={style.noLoginText}>登录查看信息</Text>
              </div>
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
