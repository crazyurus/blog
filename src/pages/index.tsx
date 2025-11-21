import TypeIt from 'typeit-react';

import { Introduction } from '../components';
import styles from './index.module.scss';
import logo from './logo.txt';

function Home(): JSX.Element {
  return (
    <div>
      <pre className={styles.logo} dangerouslySetInnerHTML={{ __html: logo.replaceAll('█', '<span>█</span>') }} />
      <div className={styles.content}>
        <TypeIt
          element="div"
          className={styles.inner}
          options={{
            speed: 36,
            waitUntilVisible: true,
            cursorChar: '_'
          }}>
          <Introduction divider={<br />} />
          <br />
          <p>&nbsp;</p>
          <br />
          <p className="italic">
            这个项目基于 Next.js 开发，代码仓库在这里{' '}
            <a href="https://github.com/crazyurus/blog" target="_blank" rel="noopener noreferrer">
              crazyurus/blog
            </a>
          </p>
        </TypeIt>
      </div>
    </div>
  );
}

export default Home;
