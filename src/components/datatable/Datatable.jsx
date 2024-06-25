import "./datatable.scss"
import { useState } from "react"
import { Link } from "react-router-dom"
import { DataGrid } from '@mui/x-data-grid'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { userColumns, userRows } from "../../datatablesource"

const Datatable = () => {
  const [data, setData] = useState(userRows)
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }
  const actionColumn = {
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell: (params) => {
        return (
          <div className="cell-action">
            <Link to=":userId">
              <div>
                <span className="view-button">View</span>
              </div>
            </Link>
            <Link>
              <div>
                <span className="delete-button" onClick={() => handleDelete(params.row.id)}>Delete</span>
              </div>
            </Link>
          </div>
        )
    }
  }
  return(
      <div className="datatable">
        <div className="datatable-title">
          Users
          <Link to="new" className="link">
            <AddCircleIcon className="icon" /> Add New User
          </Link>
        </div>
        <DataGrid
          className="datagrid"
          rows={data}
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