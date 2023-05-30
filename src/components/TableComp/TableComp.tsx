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
    title: <div className={styles.titleHeaderTable}>№</div>,
    dataIndex: 'id',
    width: 50,
  },
  {
    title: <div className={styles.titleHeaderTable}>Имя сотрудника</div>,
    dataIndex: 'fullName',
    width: 150,
  },
  {
    title: <div className={styles.titleHeaderTable}>Основная информация</div>,
    children: [
      {
        title: <div className={styles.titleHeaderTable}>ID номер</div>,
        dataIndex: 'id',
        sorter: (a, b) => a.id - b.id,
        width: 100,
      },
      {
        title: <div className={styles.titleHeaderTable}>Телефон</div>,
        dataIndex: 'phone',
        width: 120,
      },
      {
        title: <div className={styles.titleHeaderTable}>Пол</div>,
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
        title: <div className={styles.titleHeaderTable}>Дата рождения</div>,
        dataIndex: 'dateOfBirth',
        width: 130,
      },
      {
        title: <div className={styles.titleHeaderTable}>Метро</div>,
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
        title: <div className={styles.titleHeaderTable}>Адрес проживани</div>,
        dataIndex: 'address',
        width: 200,
      },
    ]
  },
  {
    title: <div className={styles.titleHeaderTable}>Банковская информация</div>,
    children: [
      {
        title: <div className={styles.titleHeaderTable}>Банк</div>,
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
        title: <div className={styles.titleHeaderTable}>Номер карты</div>,
        dataIndex: 'cardNumber',
        width: 160,
      },
    ]
  },
  {
    title: <div className={styles.titleHeaderTable}>Документы сотрудника</div>,
    children: [
      {
        title: <div className={styles.titleHeaderTable}>Гражданство</div>,
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
        title: <div className={styles.titleHeaderTable}>Паспорт</div>,
        dataIndex: 'passport',
        width: 120,
      },
      {
        title: <div className={styles.titleHeaderTable}>Кем выдан</div>,
        dataIndex: 'issued',
        width: 180,
      },
      {
        title: <div className={styles.titleHeaderTable}>Срок действия</div>,
        dataIndex: 'limitDate',
        width: 120,
      },
      {
        title: <div className={styles.titleHeaderTable}>Место рождения</div>,
        dataIndex: 'placeOfBirth',
        width: 170,
      },
      {
        title: <div className={styles.titleHeaderTable}>Адрес прописки</div>,
        dataIndex: 'placeOfResidence',
        width: 200,
      },
      {
        title: <div className={styles.titleHeaderTable}>Патент</div>,
        dataIndex: 'patent',
        width: '20%',
      },
      {
        title: <div className={styles.titleHeaderTable}>Срок действия</div>,
        dataIndex: 'patentLimitDate',
        width: '20%',
      },
      {
        title: <div className={styles.titleHeaderTable}>СНИЛС</div>,
        dataIndex: 'snils',
        width: '20%',
      },
      {
        title: <div className={styles.titleHeaderTable}>ИНН</div>,
        dataIndex: 'inn',
        width: '20%',
      },
      {
        title: <div className={styles.titleHeaderTable}>Мед. книжка</div>,
        dataIndex: 'medBook',
        width: '20%',
      }
    ]
  },
  {
    title: <div className={styles.titleHeaderTable}>Информация от HR</div>,
    children: [
      {
        title: <div className={styles.titleHeaderTable}>Должность</div>,
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
        title: <div className={styles.titleHeaderTable}>Подразделение</div>,
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
        title: <div className={styles.titleHeaderTable}>Решение</div>,
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
        title: <div className={styles.titleHeaderTable}>Источник</div>,
        dataIndex: 'source',
        width: '20%',
      },
      {
        title: <div className={styles.titleHeaderTable}>Дата</div>,
        dataIndex: 'dateDecision',
        width: '20%',
      },
      {
        title: <div className={styles.titleHeaderTable}>Примечание</div>,
        dataIndex: 'note',
        width: '20%',
      }
    ]
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
        rowClassName={(record, index) => index % 2 === 0 ? styles['table-row-light'] :  styles['table-row-green']}
      />
    </div>
  )
}

export default TableComp