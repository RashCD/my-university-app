import React from 'react';
import { RouteComponentProps } from '@reach/router';
import AppHeader from '../components/AppHeader';
import Input from '../components/Input';
import { useForm } from 'react-hook-form';

import Styles from '../assets/styles/views/LandingPage.module.scss';
import CTAButton from '../components/CTAButton';
import Table from '../components/Table';
import { Column } from 'react-table';

type FormValues = {
  search: string;
};

export type Data = {
  name: string;
  country: string;
  country_code: string;
  web_pages: string;
};

const LandingPage = (props: RouteComponentProps) => {
  const { register, handleSubmit } = useForm<FormValues>();

  const columns: Column<Data>[] = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Country',
        accessor: 'country',
      },
      {
        Header: 'CountryCode',
        accessor: 'country_code',
      },
      {
        Header: 'WebPages',
        accessor: 'web_pages',
      },
    ],
    []
  );

  const data: Data[] = React.useMemo(
    () => [
      {
        name: 'Hello',
        country: 'World',
        country_code: 'MY',
        web_pages: 'https://',
      },
    ],
    []
  );

  const onFormSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="app">
      <AppHeader title="University List App" />
      <main className={Styles.appMain}>
        <div className={Styles.container}>
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
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
