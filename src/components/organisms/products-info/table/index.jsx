import { Table } from 'antd';
import { useTable } from '@shared/hooks'
import { useSelector } from 'react-redux'

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

export const ProductInfoTable = () => {
  const { getSortedColumn, getColumn, getFilteredColumn } = useTable()
  const categories = useSelector(state => state.categories)
  console.log(categories)
  const categoryFilters = categories.map(({ name }) => ({ text: name, value: name}))
  const columns = [
    getColumn('Name', 'name'),
    getFilteredColumn('Category', 'category', categoryFilters),
    getSortedColumn('Revenue', 'revenue', 3),
    getSortedColumn('Unit sold', 'unitSold', 2),
    getSortedColumn('Profit margins', 'profitMargins', 1)
  ];
  const data = [];

  return (<Table className="w-full" columns={columns} dataSource={data} onChange={onChange} />)
}
