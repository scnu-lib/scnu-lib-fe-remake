import { Button, Col, Form, Modal, Row, Typography } from '@douyinfe/semi-ui';
import style from './UserLogin.module.scss';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { isLogin } from '../../store';
const { Text } = Typography;

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
          <Modal 
            title={'登录'} 
            visible={showModal} 
            onCancel={handleCancel} 
            onOk={handleOk}
          >
            <div className={style.loginInputContainer}>
              <Form initValues={{}}>
                <Row>
                  <Col span={24}>
                    <Form.Input 
                      field='name'
                      label='姓名'
                    />
                  </Col>
                  <Col span={24}>
                    <Form.Input 
                      field='password'
                      label='密码'
                    />
                  </Col>
                </Row>
              </Form>
              <div 
                style={{
                  width: '100%', 
                  display: 'flex', 
                  flexDirection: 'row', 
                  justifyContent: 'space-between' 
                }} 
                className={style.userSelect}
              >
                <Text className={style.text} link={{ href: '#!' }}>忘记密码?</Text>
                <Text className={style.text} link={{ href: '#!' }}>注册账号</Text>
              </div>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
}
