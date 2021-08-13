import { RouteComponentProps } from '@reach/router';
import AppHeader from '../components/AppHeader';
import Input from '../components/Input';
import { useForm } from 'react-hook-form';

import Styles from '../assets/styles/views/LandingPage.module.scss';
import CTAButton from '../components/CTAButton';

type FormValues = {
  search: string;
};

const LandingPage = (props: RouteComponentProps) => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onFormSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="app">
      <AppHeader title="University List App" />
      <main className={Styles.appMain}>
        <form className={Styles.form} onSubmit={handleSubmit(onFormSubmit)}>
          <Input
            id="uni-name"
            label="Name"
            placeholder="Search by University Name"
            register={register('search')}
          />
          <Input
            id="uni-country"
            label="Country"
            placeholder="Search by University Country"
            register={register('search')}
          />
          <CTAButton type="submit">Search</CTAButton>
        </form>
      </main>
    </div>
  );
};

export default LandingPage;
