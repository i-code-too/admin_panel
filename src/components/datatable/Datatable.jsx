import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid'
import { userColumns, userRows } from "../../datatablesource"

const Datatable = () => {
  const actionColumn = {
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell: () => {
        return (
          <div className="cell-action">
            <div>
              <span className="view-button">View</span>
            </div>
            <div>
              <span className="delete-button">Delete</span>
            </div>
          </div>
        )
    }
  }
  return(
      <div className="datatable">
        <DataGrid
          rows={userRows}
          columns={userColumns.concat(actionColumn)}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 9},
            },
          }}
          pageSizeOptions={[9]}
          checkboxSelection
        />
      </div>
  )
}

export default Datatable