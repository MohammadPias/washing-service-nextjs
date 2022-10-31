import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import SimpleCard from '../card/SimpleCard';


const ContentLayout = ({ items, children }) => {
    // const items = []
    const router = useRouter();
    const matchPath = items?.find(item => item.url === router.asPath)
    // console.log(matchPath)
    const [selectItem, setSelectItem] = useState(matchPath?.name);

    const handleClick = (name) => {
        setSelectItem(name)
    }

    console.log(items)

    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                {
                    items?.map(item =>
                        <SimpleCard
                            key={item.name}
                            item={item}
                            selectItem={selectItem}
                            setSelectItem={setSelectItem}
                            handleClick={handleClick} />

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