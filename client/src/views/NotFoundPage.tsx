import { RouteComponentProps } from '@reach/router';
import Styles from '../assets/styles/views/NotFoundPage.module.scss';
import AppHeader from '../components/AppHeader';

const NotFoundPage = (props: RouteComponentProps) => {
  return (
    <div className="app">
      <AppHeader />
      <div className={Styles.notFound}>404 | Not found</div>
    </div>
  );
};

export default NotFoundPage;
