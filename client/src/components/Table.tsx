/* eslint-disable react/jsx-key */
import React from 'react';
import { useTable, useSortBy, Column } from 'react-table';
import { Data } from '../views/LandingPage';
import Styles from '../assets/styles/components/Table.module.scss';

type TablePropTypes = {
  columns: Column<Data>[];
  data: Data[];
};

const Table = (props: TablePropTypes) => {
  const { columns, data } = props;
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  return (
    <table className={Styles.table} {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : '↕️'}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell, index, { length }) => {
                if (length === index + 1)
                  return (
                    <td {...cell.getCellProps()}>
                      <a href={cell.value} target="_blank" rel="noreferrer">
                        {cell.value}
                      </a>
                    </td>
                  );
                else
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
