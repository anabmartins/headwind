import { FaBeer } from 'react-icons/fa';

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 
        m-0 flex flex-col bg-gray-900 text-white shadow">
            <SideBarIcon icon={<FaBeer size="28" />} />
            <SideBarIcon icon={<FaBeer size="28" />} />
            <SideBarIcon icon={<FaBeer size="28" />} />
            <SideBarIcon icon={<FaBeer size="28" />} />
        </div>
    )
}

const SideBarIcon = ({ icon, text = 'tooltip' }) => (
    <div className="sidebar-icon relative group">
        {icon}
        <span className='sidebar-tooltip hidden group-hover:block'>
        {text}
        </span>
    </div>
)

export default SideBar;