import "./sidebar.scss"
import { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"
import { Link } from 'react-router-dom'
import {
    Dashboard as DashboardIcon,
    PersonOutlineOutlined as PersonOutlineOutlinedIcon,
    Store as StoreIcon,
    CreditCard as CreditCardIcon,
    LocalShipping as LocalShippingIcon,
    InsertChart as InsertChartIcon,
    NotificationsNone as NotificationsNoneIcon,
    SettingsSystemDaydreamOutlined as SettingsSystemDaydreamOutlinedIcon,
    PsychologyOutlined as PsychologyOutlinedIcon,
    SettingsApplications as SettingsApplicationsIcon,
    AccountCircleOutlined as AccountCircleOutlinedIcon,
    ExitToApp as ExitToAppIcon
  } from '@mui/icons-material'

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext)
    return(
        <div className='sidebar'>
            <div className="top">
                <Link to="/" className="link">
                    <span className="logo">admin.</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/users" className="link">
                        <li>
                            <PersonOutlineOutlinedIcon className="icon"/>
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/products" className="link">
                        <li>
                            <StoreIcon className="icon"/>
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <CreditCardIcon className="icon"/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon"/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL LINKS</p>
                    <li>
                        <InsertChartIcon className="icon"/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon"/>
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICES</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon"/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon"/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon"/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppIcon className="icon"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="color-option" onClick={() => dispatch({type: "LIGHT"})}></div>
                <div className="color-option" onClick={() => dispatch({type: "DARK"})}></div>
            </div>
        </div>
    )
}

export default Sidebar