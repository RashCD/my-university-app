import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useForm } from 'react-hook-form';
import { Column } from 'react-table';

import AppHeader from '../components/AppHeader';
import CTAButton from '../components/CTAButton';
import Input from '../components/Input';
import Table from '../components/Table';
import Styles from '../assets/styles/views/LandingPage.module.scss';
import getUniversity from '../queries/getUniversity';
import { useQuery } from 'react-query';

type FormValues = {
  name: string;
  country: string;
};

export type Data = {
  name: string;
  country: string;
  alpha_two_code: string;
  web_pages: string[];
};

const LandingPage = (props: RouteComponentProps) => {
  const { register, handleSubmit } = useForm<FormValues>();
  const [formValue, setFormValue] = useState({});

  const { data, isLoading, isSuccess } = useQuery(
    [formValue],
    () => getUniversity(formValue),
    {
      enabled: Object.keys(formValue).length > 0,
    }
  );

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
        Header: 'Country Code',
        accessor: 'alpha_two_code',
      },
      {
        Header: 'Web Pages',
        accessor: 'web_pages',
      },
    ],
    []
  );

  const result: Data[] | undefined = React.useMemo(() => data, [data]);

  const onFormSubmit = (form: FormValues) => {
    setFormValue({
      ...(form.name && { name: form.name }),
      ...(form.country && { country: form.country }),
    });
  };

  return (
    <div className="app">
      <AppHeader title="University List App" />
      <main className="app-main">
        <div className={Styles.container}>
          <form className={Styles.form} onSubmit={handleSubmit(onFormSubmit)}>
            <Input
              id="uni-name"
              label="Name"
              placeholder="Search by University Name"
              register={register('name')}
            />
            <Input
              id="uni-country"
              label="Country"
              placeholder="Search by University Country"
              register={register('country')}
            />
            <CTAButton type="submit">Search</CTAButton>
          </form>
          {isLoading && '...Loading'}
          {isSuccess && <Table columns={columns} data={result!} />}
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
