import { Typography, Form, Modal, Row, Col } from '@douyinfe/semi-ui';
import { useState } from 'react';
const { Text } = Typography;

type LoginModalProps = {
  showModal: boolean,
  onCancel: ()=>void,
  onOk: ()=>void
  onLoginSuccess?: ( res: object )=>void
}

export default function LoginModal(props: LoginModalProps){
  const [isNewAccount, setIsNewAccount] = useState(false);
  const [modalTitle, setModalTitle] = useState('登录');

  function addAccount(){
    setIsNewAccount(true);
    setModalTitle('注册');
  };

  function isUser(){
    setIsNewAccount(false);
    setModalTitle('登录');
  };

  return (
    <Modal 
      title={modalTitle} 
      visible={props.showModal} 
      onCancel={props.onCancel} 
      onOk={props.onOk}
      cancelButtonProps={{ style: { border: '2px black solid' }, theme: 'borderless' }}
    >
      {isNewAccount ? (
        <div>
          <Form initValues={{}}>
            <Row>
              <Col span={24}>
                <Form.Input field='name' label='姓名' />
              </Col>
              <Col span={24}>
                <Form.Input field='id' label='学号' />
              </Col>
              <Col span={24}>
                <Form.Input field='wechat_id' label='学号' />
              </Col>
              <Col span={24}>
                <Form.Input field='phone' label='手机号' />
              </Col>
              <Col span={24}>
                <Form.Input field='email_address' label='邮箱' />
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
          >
            <Text link={{ href: '#!' }} onClick={ isUser }>已有账号?</Text>
          </div>
        </div>
      ) : (
        <div>
          <Form initValues={{}}>
            <Row>
              <Col span={24}>
                <Form.Input field='name' label='姓名' />
              </Col>
              <Col span={24}>
                <Form.Input field='password' label='密码' />
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
          >
            <Text link={{ href: '#!' }}>忘记密码?</Text>
            <Text link={{ href: '#!' }} onClick={ addAccount }>注册账号</Text>
          </div>
        </div>
      )}
    </Modal>
  );
}
