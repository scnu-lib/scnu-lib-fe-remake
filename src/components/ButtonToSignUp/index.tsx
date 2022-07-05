import { useState } from 'react';
import {Button, Popover, Modal, TextArea } from '@douyinfe/semi-ui';
import {EsignUpFlag} from '../../constants/constants';
import styles from './index.module.scss';
import classNames from 'classnames';

interface ButtonToSignUpProps{
  className?: string,
  isAllowVolunteer:boolean
  signUpFlag:EsignUpFlag
  setSignUpFlag:React.Dispatch<React.SetStateAction<EsignUpFlag>>
}

export default function ButtonToSignUp({isAllowVolunteer, signUpFlag, 
  setSignUpFlag, ...props}:ButtonToSignUpProps){
  const [showModal, setShowModal] = useState(false);
  const [tmpFlag, setTmpFlag] = useState(signUpFlag);

  function click (flag:EsignUpFlag) {
    setShowModal(true);
    setTmpFlag(flag);
  };
  
  function handleOk () {
    setShowModal(false);    

    //TODO: 发送请求 结果给 setSignUpFlag    
    setSignUpFlag(tmpFlag);
  };

  function handleCancel () {
    setShowModal(false);
    setTmpFlag(signUpFlag);
  };

  const text = tmpFlag === EsignUpFlag.participant ? '活动' : '志愿者';

  return (
    <div className={classNames(styles.buttons, props?.className)}>
      {signUpFlag === EsignUpFlag.irrelevant ? 
        <>
          <Button theme='solid' type='primary' 
            onClick={() => click(EsignUpFlag.participant)} >报名活动</Button>
          {isAllowVolunteer ?
            <Button type='primary' style={{ marginRight: 8 }}
              onClick={() => click(EsignUpFlag.volunteer)} >报名志愿者</Button> 
            : undefined}
        </>
        : 
        <Popover
          showArrow
          arrowPointAtCenter
          content={
            <article>
              你已成功报名{text}！
            </article>
          }
          position='top'     
          style={{
            backgroundColor: 'rgba(var(--semi-grey-7), 1)',
            borderColor: 'rgba(var(--semi-grey-7), 1)',
            color: 'var(--semi-color-white)',
          }}     
        >
          <Button disabled theme='solid' type='warning' style={{width: '200px'}}>已报名{text}</Button>
        </Popover>
        
      }
      <Modal title={`报名${text}`} visible={showModal} onCancel={handleCancel} onOk={handleOk}>
        <TextArea maxCount={100} showClear/>
      </Modal>

    </div>
  );
}
