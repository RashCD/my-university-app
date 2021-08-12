import { RouteComponentProps } from '@reach/router';
import AppHeader from '../components/AppHeader';
import Input from '../components/Input';
import { useForm } from 'react-hook-form';

import Styles from '../assets/styles/views/LandingPage.module.scss';

type FormValues = {
  search: string;
};

const LandingPage = (props: RouteComponentProps) => {
  const { register, handleSubmit, watch } = useForm<FormValues>();

  console.log(watch());

  return (
    <div className="app">
      <AppHeader title="University List App" />
      <main className={Styles.appMain}>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <Input id="search" label="Search" register={register('search')} />
        </form>
      </main>
    </div>
  );
};

export default LandingPage;
