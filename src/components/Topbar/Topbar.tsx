import { Link } from 'react-router-dom'

export const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="flex-between py-4 px-5">
                <Link className='flex gap-3 items-center' to="/">
                    <img src="" alt="Logo"
                    />
                    <span>topbar</span>
                </Link>
            </div>

        </div>
    )
}
