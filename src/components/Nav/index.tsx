import { Nav, Button } from '@douyinfe/semi-ui';
import { IconHelpCircle } from '@douyinfe/semi-icons';
import UserLogin from '../UserLogin';
import MessageAlert from '../MessageAlert';
import { useNavigate } from 'react-router-dom';
import style from './Nav.module.scss';

type NavigationProps = {
    indexNav: { imgSrc: JSX.Element, title: string, path: string }, 
    itemPath: { title: string, path?: string, subRouter?: {title: string, path?: string}[] }[]
};

export default function Navigation(props: NavigationProps){
  const navigateTo = useNavigate();

  return (
    <Nav mode='horizontal' style={{display: 'flex', flexShrink: '0'}}>
      <Nav.Item
        icon={props.indexNav.imgSrc}
        itemKey={'Index'}
        text={props.indexNav.title}
        onClick={() => navigateTo(props.indexNav.path)}
        style={{color: 'black'}}
      ></Nav.Item>
      {props.itemPath.map((item) => {

        if(item.subRouter) return (
          <Nav.Sub key={item.title} itemKey={item.title} text={item.title}>
            {item.subRouter.map((it) => (
              <Nav.Item 
                key={it.title}
                itemKey={it.title}
                text={it.title}
                onClick={() => navigateTo(it.path as string)}
              />
            ))}
          </Nav.Sub>
        );

        return (
          <Nav.Item 
            key={item.title}
            itemKey={item.title}
            text={item.title}
            onClick={() => navigateTo(item.path as string)}
          />
        );
      })}
      <Nav.Footer>
        <div className={style.footerContainer}>
          <Button 
            theme='borderless' 
            type='tertiary'
            icon={<IconHelpCircle size='large'></IconHelpCircle>} 
          />
          <MessageAlert/>
        </div>
        <UserLogin />
      </Nav.Footer>
    </Nav>
  );
}
