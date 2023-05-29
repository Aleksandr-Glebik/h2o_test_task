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
    title: 'Имя сотрудника',
    dataIndex: 'fullName',
    width: '20%',
  },
  {
    title: 'ID номер',
    dataIndex: 'id',
    width: '20%',
  },
  {
    title: 'Телефон',
    dataIndex: 'phone',
    width: '20%',
  },
  {
    title: 'Пол',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  },
  {
    title: 'Дата рождения',
    dataIndex: 'dateOfBirth',
  },
  {
    title: 'Метро',
    dataIndex: 'metro',
  },
  {
    title: 'Адрес проживания',
    dataIndex: 'address',
  },
  {
    title: 'Банк',
    dataIndex: 'bank',
  },
  {
    title: 'Номер карты',
    dataIndex: 'cardNumber',
  },
  {
    title: 'Гражданство',
    dataIndex: 'citizenship',
  },
  {
    title: 'Паспорт',
    dataIndex: 'passport',
  },
  {
    title: 'Кем выдан',
    dataIndex: 'issued',
  },
  {
    title: 'Срок действия',
    dataIndex: 'limitDate',
  },
  {
    title: 'Место рождения',
    dataIndex: 'placeOfBirth',
  },
  {
    title: 'Адрес прописки',
    dataIndex: 'placeOfResidence',
  },
  {
    title: 'Патент',
    dataIndex: 'patent',
  },
  {
    title: 'Срок действия',
    dataIndex: 'patentLimitDate',
  },
  {
    title: 'СНИЛС',
    dataIndex: 'snils',
  },
  {
    title: 'ИНН',
    dataIndex: 'inn',
  },
  {
    title: 'Мед. книжка',
    dataIndex: 'medBook',
  },
  {
    title: 'Должность',
    dataIndex: 'job',
  },
  {
    title: 'Подразделение',
    dataIndex: 'subdivision',
  },
  {
    title: 'Решение',
    dataIndex: 'decision',
  },
  {
    title: 'Источник',
    dataIndex: 'source',
  },
  {
    title: 'Дата',
    dataIndex: 'dateDecision',
  },
  {
    title: 'Примечание',
    dataIndex: 'note',
  }
]

const getRandomuserParams = (params: TableParams) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
})

const TableComp: React.FC = () => {
  const [data, setData] = useState<dataUserType[]>()
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  })
  console.log('data 1', data)

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
    console.log('dataUser', dataUser)

  }, [tableParams])

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
        pagination={tableParams.pagination}
        // loading={loading}
        onChange={handleTableChange}
      />
    </div>
  )
}

export default TableComp