import React, { useState, useEffect } from 'react'
import styles from './TableComp.module.scss'
import { dataUser, dataUserType } from '../../data/dataUsers'

import { Table } from 'antd'
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table'
import type { FilterValue, SorterResult } from 'antd/es/table/interface'
interface TableParams {
  pagination?: TablePaginationConfig
  sortField?: string
  sortOrder?: string
  filters?: Record<string, FilterValue | null>
}

const columns: ColumnsType<dataUserType> = [
  {
    title: '№',
    dataIndex: 'id',
    width: 50
  },
  {
    title: 'Имя сотрудника',
    dataIndex: 'fullName',
    width: 150,
  },
  {
    title: 'ID номер',
    dataIndex: 'id',
    sorter: (a, b) => a.id - b.id,
    width: 100,
  },
  {
    title: 'Телефон',
    dataIndex: 'phone',
    width: 120,
  },
  {
    title: 'Пол',
    dataIndex: 'gender',
    filters: [
      { text: 'Мужской', value: 'мужской' },
      { text: 'Женский', value: 'женский' },
    ],
    onFilter: (value:
      string |
      number |
      boolean,
      record) => record.gender.indexOf(value.toString()) === 0,
      width: 80,
  },
  {
    title: 'Дата рождения',
    dataIndex: 'dateOfBirth',
    width: 130,
  },
  {
    title: 'Метро',
    dataIndex: 'metro',
    filters: [
      { text: 'Василеостровская', value: 'Василеостровская' },
      { text: 'Ладожская', value: 'Ладожская' },
      { text: 'Московская', value: 'Московская' },
      { text: 'Купчино', value: 'Купчино' },
      { text: 'Девяткино', value: 'Девяткино' },
    ],
    onFilter: (value:
      string |
      number |
      boolean,
      record) => record.metro.indexOf(value.toString()) === 0,
    width: 140,
  },
  {
    title: 'Адрес проживания',
    dataIndex: 'address',
    width: 200,
  },
  {
    title: 'Банк',
    dataIndex: 'bank',
    filters: [
      { text: 'ВТБ', value: 'ВТБ' },
      { text: 'Сбер', value: 'Сбер' },
      { text: 'Альфа', value: 'Московская' },
    ],
    onFilter: (value:
      string |
      number |
      boolean,
      record) => record.bank.indexOf(value.toString()) === 0,
    width: 70,
  },
  {
    title: 'Номер карты',
    dataIndex: 'cardNumber',
    width: 160,
  },
  {
    title: 'Гражданство',
    dataIndex: 'citizenship',
    filters: [
      { text: 'РФ', value: 'РФ' },
      { text: 'Казахстан', value: 'Казахстан' },
      { text: 'Азербайджан', value: 'Азербайджан' },
      { text: 'Узбекистан', value: 'Узбекистан' },
    ],
    onFilter: (value:
      string |
      number |
      boolean,
      record) => record.citizenship.indexOf(value.toString()) === 0,
    width: 120,
  },
  {
    title: 'Паспорт',
    dataIndex: 'passport',
    width: 120,
  },
  {
    title: 'Кем выдан',
    dataIndex: 'issued',
    width: 180,
  },
  {
    title: 'Срок действия',
    dataIndex: 'limitDate',
    width: 120,
  },
  {
    title: 'Место рождения',
    dataIndex: 'placeOfBirth',
    width: 170,
  },
  {
    title: 'Адрес прописки',
    dataIndex: 'placeOfResidence',
    width: 200,
  },
  {
    title: 'Патент',
    dataIndex: 'patent',
    width: '20%',
  },
  {
    title: 'Срок действия',
    dataIndex: 'patentLimitDate',
    width: '20%',
  },
  {
    title: 'СНИЛС',
    dataIndex: 'snils',
    width: '20%',
  },
  {
    title: 'ИНН',
    dataIndex: 'inn',
    width: '20%',
  },
  {
    title: 'Мед. книжка',
    dataIndex: 'medBook',
    width: '20%',
  },
  {
    title: 'Должность',
    dataIndex: 'job',
    filters: [
      { text: 'Бригадир', value: 'Бригадир' },
      { text: 'Клинер', value: 'Клинер' },
      { text: 'Слесарь', value: 'Азербайджан' },
    ],
    onFilter: (value:
      string |
      number |
      boolean,
      record) => record.job.indexOf(value.toString()) === 0,
    width: '20%',
  },
  {
    title: 'Подразделение',
    dataIndex: 'subdivision',
    filters: [
      { text: 'B2С', value: 'B2С' },
      { text: 'B2B', value: 'B2B' },
    ],
    onFilter: (value:
      string |
      number |
      boolean,
      record) => record.subdivision.indexOf(value.toString()) === 0,
    width: '20%',
  },
  {
    title: 'Решение',
    dataIndex: 'decision',
    filters: [
      { text: 'Принят', value: 'Принят' },
      { text: 'Не принят', value: 'Не принят' },
    ],
    onFilter: (value:
      string |
      number |
      boolean,
      record) => record.decision.indexOf(value.toString()) === 0,
    width: '20%',
  },
  {
    title: 'Источник',
    dataIndex: 'source',
    width: '20%',
  },
  {
    title: 'Дата',
    dataIndex: 'dateDecision',
    width: '20%',
  },
  {
    title: 'Примечание',
    dataIndex: 'note',
    width: '20%',
  }
]

const TableComp: React.FC = () => {
  const [data, setData] = useState<dataUserType[]>()
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  })

  useEffect( () => {
    setData(dataUser)
    setTableParams({
      ...tableParams,
      pagination: {
        ...tableParams.pagination,
      },
    });
  }, [])

  useEffect( () => {
    setData(dataUser)
    setTableParams({
      ...tableParams,
      pagination: {
        ...tableParams.pagination,
      },
    });
  }, [tableParams.pagination?.pageSize])

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<dataUserType> | SorterResult<dataUserType>[],
  ) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    })

    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  }

  return (
    <div className={styles.tableWrapper}>
       <Table
          columns={columns}
          rowKey={(data) => data.id}
          dataSource={data}
          pagination={{
            position: ['bottomCenter'],
            showSizeChanger: true,
            pageSizeOptions: ['5', '10', '15'],
            defaultPageSize: 10,
            defaultCurrent: 1,
            showTotal:  (total, range) => (
              <span style={{ left: 40, position: "absolute" }}>
                {`показано ${range[0]} - ${range[1]} из ${total} результатов`}
              </span>
            ),
            ...tableParams.pagination
          }}
        onChange={handleTableChange}
        size="small"
        scroll={{
          x: 3520,
          y: 400
        }}
        bordered={true}
      />
    </div>
  )
}

export default TableComp