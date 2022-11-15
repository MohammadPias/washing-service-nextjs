import Link from "next/link";

const SimpleCard = ({ item, selectItem, handleClick }) => {
    return (
        <Link href={item?.url}>
            <a>
                <div
                    onClickCapture={() => handleClick(item.name)}
                    className={`bg-white dark:bg-secondary rounded-md shadow-sm p-3 border cursor-pointer ${selectItem === item?.name ? "border-primary" : "border-slate-200 dark:border-slate-700"}`}>

                    <div className="flex items-center space-x-3">
                        <div className='bg-red-50 dark:bg-secondary-light p-3 h-14 w-14  rounded-full'>
                            <div className={`h-8 w-8 rounded-full flex justify-center items-center ${selectItem === item?.name && "text-primary"}`}>
                                {
                                    item.avatar &&
                                    <div>{item.avatar}</div>
                                }
                            </div>
                        </div>

                        <h4 className="text-base font-bold">{item.name}</h4>
                    </div>
                </div>
            </a>
        </Link>

    );
};

export default SimpleCard;