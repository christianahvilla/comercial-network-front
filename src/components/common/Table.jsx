import React from 'react';
import MaterialTable from 'material-table';

const DefaultTable = (props) => {
    const {
        columns,
        onDelete,
        onUpdate,
        onAdd,
        data,
    } = props;

    const options = {
        actionsColumnIndex: -1,
        pageSize: 10,
        pageSizeOptions: [5, 10, 20, 30, 50],
    };

    const localization = {
        pagination: {
            labelDisplayedRows: '{from}-{to} de {count}',
            firstAriaLabel: 'Primer página',
            labelRowsPerPage: '{count} filas',
            firstTooltip: 'Primer página',
            previousAriaLabel: 'Página anterior',
            previousTooltip: 'Página anterior',
            nextAriaLabel: 'Siguiente página',
            nextTooltip: 'Siguiente página',
            lastAriaLabel: 'Última página',
            lastTooltip: 'Última página',
            labelRowsSelect: 'filas',
        },
        toolbar: {
            searchTooltip: 'Buscar',
            searchPlaceholder: 'Buscar',
        },
        header: {
            actions: 'Acciones',
        },
        body: {
            emptyDataSourceMessage: 'No hay datos para mostrar',
            filterRow: {
                filterTooltip: 'Filtrar',
            },
            addTooltip: 'Agregar',
            deleteTooltip: 'Eliminar',
            editTooltip: 'Editar',
            editRow: {
                deleteText: '¿Estás seguro que quieres eliminar está fila?',
                cancelTooltip: 'Cancelar',
                saveTooltip: 'Guardar',
            },
        },
    };

    const editable = {
        onRowAdd: (newData) => new Promise((resolve) => {
            resolve(onAdd(newData));
        }),
        onRowUpdate: (newData, oldData) => new Promise((resolve) => {
            resolve(onUpdate(newData, oldData));
        }),
        onRowDelete: (oldData) => new Promise((resolve) => {
            resolve(onDelete(oldData));
        }),
    };

    return (
        <MaterialTable
            title=""
            columns={columns}
            data={data}
            minRows={10}
            editable={editable}
            options={options}
            localization={localization}
        />
    );
};

export default DefaultTable;
