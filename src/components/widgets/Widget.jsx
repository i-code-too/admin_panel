import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'

const Widget = ({ type }) => {
    const amount = 100
    const diff = 20

    let data;
    switch (type) {
        case "users": 
        data = {title: "USERS",
            isMoney: false,
            link: "See all users",
            icon: <PersonOutlinedIcon className="icon crimson-icon"/>
        }
        break
        case "orders": 
        data = {title: "ORDERS",
            isMoney: false,
            link: "View all orders",
            icon: <ShoppingCartOutlinedIcon className="icon golden-rod-icon"/>
        }
        break
        case "earnings": 
        data = {title: "EARNINGS",
            isMoney: true,
            link: "View net earnings",
            icon: <MonetizationOnOutlinedIcon className="icon green-icon"/>
        }
        break
        case "balance": 
        data = {title: "BALANCE",
            isMoney: true,
            link: "See details",
            icon: <AccountBalanceWalletOutlinedIcon className="icon purple-icon"/>
        }
        break
        default: break
    }
    return(
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget