import {Button, Popover } from '@douyinfe/semi-ui';
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
  
  const click = (flag:EsignUpFlag) => {
    //TODO: 发送请求 结果给 setSignUpFlag
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
        : 
        <Popover
          showArrow
          arrowPointAtCenter
          content={
            <article>
              你已成功报名{signUpFlag === EsignUpFlag.participant ? '活动' : '志愿者'}！
            </article>
          }
          position='top'     
          style={{
            backgroundColor: 'rgba(var(--semi-grey-7), 1)',
            borderColor: 'rgba(var(--semi-grey-7), 1)',
            color: 'var(--semi-color-white)',
          }}     
        >
          <Button disabled theme='solid' type='warning' style={{width: '200px'}}>已报名{signUpFlag === EsignUpFlag.participant ? '活动' : '志愿者'}</Button>
        </Popover>
      }
    </div>
  );
}
