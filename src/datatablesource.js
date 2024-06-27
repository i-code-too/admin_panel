export const userColumns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 70
    },
    {
        field: 'user',
        headerName: 'User',
        width: 230, 
        renderCell: (params) => {
            return (
                <div className="cell-with-img">
                    <img className="cell-img" src={params.row.Image} alt="avatar"/>
                    {params.row.Username}
                </div>
            )
        }
    },
    {
        field: 'Email',
        headerName: 'Email',
        width: 230
    },
    {
        field: 'Address',
        headerName: 'Address',
        width: 230
    },
    {
        field: 'Country',
        headerName: 'Country',
        width: 160,
        // renderCell: (params) => {
        //     return (
        //         <div>
        //             <span className={`cell-with-status ${params.row.status}`}>{params.row.status}</span>
        //         </div>
        //     )
        // }
    }
]

export const productColumns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 200,
    },
    {
        field: 'product',
        headerName: 'Product',
        width: 230, 
        renderCell: (params) => {
            return (
                <div className="cell-with-img">
                    <img className="cell-img" src={params.row.Image} alt="avatar"/>
                    {params.row.Name}
                </div>
            )
        }
    },
    {
        field: 'Category',
        headerName: 'Category',
        width: 160,
    },
    {
        field: 'Price',
        headerName: 'Price',
        width: 100,
    },
    {
        field: 'Description',
        headerName: 'Description',
        width: 400,
    },
    {
        field: 'Stock',
        headerName: 'Stock',
        width: 100,
    }
]