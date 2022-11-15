import { useRouter } from 'next/router';
import React, { useState } from 'react';
// import { UserMenus } from '../../utils/helper';
import SimpleCard from '../card/SimpleCard';


const ContentLayout = ({ items, children }) => {
    const router = useRouter();
    const matchPath = items?.find(item => item.url === router.asPath)
    const [selectItem, setSelectItem] = useState(matchPath?.name || items[0]?.name);

    // console.log(matchPath, selectItem, "content layout")

    const handleClick = (name) => {
        setSelectItem(name)
    }


    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-3'>
                {
                    items?.map(item =>
                        <SimpleCard
                            key={item.name}
                            item={item}
                            selectItem={selectItem}
                            setSelectItem={setSelectItem}
                            handleClick={handleClick}
                        />

                    )
                }
            </div>

            <div className='mt-6'>
                {children}
            </div>
        </>
    );
};

export default ContentLayout;