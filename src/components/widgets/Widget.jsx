import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import { useState, useEffect } from "react"
import { db } from "../../firebase"
import { query, collection, where, getDocs } from "firebase/firestore"

const Widget = ({ type }) => {
    const [amount, setAmount] = useState(null)
    const [diffPercentage, setDiffPercentage] = useState(null)

    let data;
    switch (type) {
        case "users": 
        data = {title: "USERS",
            isMoney: false,
            link: "See all users",
            query: "users",
            icon: <PersonOutlinedIcon className="icon crimson-icon"/>
        }
        break
        case "orders": 
        data = {title: "ORDERS",
            isMoney: false,
            link: "View all orders",
            query: "users",
            icon: <ShoppingCartOutlinedIcon className="icon golden-rod-icon"/>
        }
        break
        case "earnings": 
        data = {title: "EARNINGS",
            isMoney: true,
            link: "View net earnings",
            query: "users",
            icon: <MonetizationOnOutlinedIcon className="icon green-icon"/>
        }
        break
        case "products": 
        data = {title: "PRODUCTS",
            isMoney: false,
            link: "See details",
            query: "products",
            icon: <AccountBalanceWalletOutlinedIcon className="icon purple-icon"/>
        }
        break
        default: break
    }

    useEffect(() => {
        const fetchData = async () => {
            const today = new Date()
            const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1))
            const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2))
            const lastMonthQuery = query(collection(db, data.query), where("timeStamp", "<=", today), where("timeStamp", ">", lastMonth))
            const prevMonthQuery = query(collection(db, data.query), where("timeStamp", "<=", lastMonth), where("timeStamp", ">", prevMonth))
            const lastMonthData = await getDocs(lastMonthQuery)
            const prevMonthData = await getDocs(prevMonthQuery)
            setAmount(lastMonthData.docs.length)
            setDiffPercentage((lastMonthData.docs.length - prevMonthData.docs.length) / (prevMonthData.docs.length) * 100)
        }
        fetchData()
    }) 

    return(
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className={`percentage ${diffPercentage < 0 ? "negative" : "positive"}`}>
                    {diffPercentage > 0 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    {Math.abs(diffPercentage)}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget