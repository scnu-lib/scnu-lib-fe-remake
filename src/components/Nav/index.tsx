import { Nav } from '@douyinfe/semi-ui';
import { useNavigate } from 'react-router-dom';

type NavigationProps = {
    indexNav: { imgSrc: JSX.Element, title: string, path: string }, 
    itemPath: { title: string, path?: string }[]
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
      {props.itemPath.map((item, index) => (
        <Nav.Item 
          key={item.path}
          itemKey={index}
          text={item.title}
          onClick={() => navigateTo(item.path as string)}
        >
        </Nav.Item>
      ))}
    </Nav>
  );
}
