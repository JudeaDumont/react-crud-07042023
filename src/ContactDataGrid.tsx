import {DataGrid, GridColDef} from '@mui/x-data-grid';

const columns: GridColDef[] = [
    {field: 'name', headerName: 'Name', width: 150},
    {field: 'id', headerName: 'ID', width: 300},
];

export default function ContactDataGrid({contacts}) {
    return (
        <div style={{height: 300, width: '100%'}} id="contact-data-grid">
            <DataGrid rows={contacts} columns={columns}/>
        </div>
    );
}