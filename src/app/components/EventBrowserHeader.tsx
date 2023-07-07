import { BsSearch, BsBellFill } from 'react-icons/bs'
import { AiFillCaretDown } from 'react-icons/ai'

const EventBrowserHeader = () => {
    return (
        <header className="flex flex-row w-full justify-between items-center  pl-8 pr-8 pt-4 bg-primary text-white">
            <div className=" text-center p-1">
                <BsSearch />
            </div>
            <div>
                <div className="text-center text-sm font-thin flex items-center ">
                    <h1>Current Location</h1>
                    <AiFillCaretDown className='pl-2 text-base' />
                </div>
                <div className='text'>
                    Los Angeles, CA
                </div>
            </div>
            <div className=" text-center p-1">
                <BsBellFill />
            </div>
        </header>
    )
}

export default EventBrowserHeader