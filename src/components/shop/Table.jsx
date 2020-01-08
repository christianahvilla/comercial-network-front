import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import Options from '../common/Options';

const ShopTable = () => {

  const options = (cell, row, rowIndex, formatExtraData) => {
    return (
      <Options onDelete={() => onDelete(cell)} onEdit={() => onEdit(cell)}/>
    );
  }

  const onDelete = (row) =>{
    console.log('delete ' + row)
  }

  const onEdit = (row) =>{
    console.log('edit ' + row)
  }

  const headerStyle = (size) => {
    return { width: size + '%' };
  }

  const { SearchBar } = Search;
  const products = [ 
    {
        id: '1',
        name: 'javier',
        price: 20
    },
    {
        id: '2',
        name: 'héctor',
        price: 19
    },
    {
        id: '4',
        name: 'rafael',
        price: 18
    }
  ];

    const columns = [
    {
      dataField: 'id',
      text: 'ID',
      sort: true,
      headerStyle: headerStyle(2.5)
    }, 
    {
      dataField: 'name',
      text: 'Nombre',
      sort: true,
      headerStyle: headerStyle(35)
    }, 
    {
      dataField: 'price',
      text: 'Dirección',
      sort: true,
      headerStyle: headerStyle(45)
    },
    {
      dataField: 'id',
      text: 'Opciones',
      formatter: options,
      headerStyle: headerStyle(8)
    }
  ];

  const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
  }];

  return (
    <ToolkitProvider keyField="id" data={ products } columns={ columns } search> 
      {
        props => (
          <div>
            <SearchBar {...props.searchProps} placeholder="Bucar"/>
            <br/>
            <BootstrapTable  bootstrap4 {...props.baseProps} pagination={ paginationFactory() } defaultSorted={ defaultSorted } />
          </div>
        )
      }
    </ToolkitProvider>
  )
}

export default ShopTable;