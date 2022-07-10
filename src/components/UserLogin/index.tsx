import { Button } from '@douyinfe/semi-ui';
import style from './UserLogin.module.scss';
import LoginModal from './components/LoginModal';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { isLogin } from '../../store';

export default function UserLogin() {
  const [isUserLogin, setIsUserLogin] = useRecoilState(isLogin);
  const [showModal, setShowModal] = useState(false);

  function handleShowModal() {
    setShowModal(true);
  }

  function handleCancel() {
    setShowModal(false);
  }

  function handleOk() {
    setShowModal(false);
  }

  return (
    <div className={style.loginContainer}>
      {isUserLogin ? null : (
        <div style={{ display: 'flex' }}>
          <Button className={style.buttonStyle} theme='borderless' onClick={handleShowModal}>
            注册|登录
          </Button>
          <LoginModal 
            onCancel={handleCancel}
            onOk={handleOk}
            showModal={showModal}
          />
        </div>
      )}
    </div>
  );
}
