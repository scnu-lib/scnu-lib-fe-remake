import {Button} from '@douyinfe/semi-ui';
import {EsignUpFlag} from '../../constants/constants';
import styles from './index.module.scss';
import classNames from 'classnames';
import { useState } from 'react';

interface ButtonToSignUpProps{
  className?: string,
  isAllowVolunteer:boolean
  signUpFlag:EsignUpFlag
  setSignUpFlag:React.Dispatch<React.SetStateAction<EsignUpFlag>>
}

export default function ButtonToSignUp({isAllowVolunteer, signUpFlag, 
  setSignUpFlag, ...props}:ButtonToSignUpProps){
  
  const click = (flag:EsignUpFlag) => {
    setSignUpFlag(flag);
  };

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
        : undefined
      }
    </div>
  );
}
