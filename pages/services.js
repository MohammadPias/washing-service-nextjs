import React, { useState } from 'react';
import Calender from '../components/calender/Calender';
import Layout from '../components/layout/Layout';
import { format } from 'date-fns';
import { data1 } from "../helper/data"
import Service from '../components/services/Services';

const Services = () => {
    const [date, setDate] = useState(new Date());
    return (
        <Layout>
            <div className='container mx-auto'>
                <h3 className="text-center text-primary pt-32">Available Services on {format(date, "PP")}</h3>

                <div className='mt-10 grid grid-cols-1 lg:grid-cols-12 gap-5'>
                    <div className='lg:col-span-4'>
                        <Calender
                            date={date}
                            setDate={setDate}
                        />
                    </div>


                    <div className='lg:col-span-8 lg:h-96 overflow-y-auto'>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                            {data1 &&
                                data1.map(service =>
                                    <div key={service.title} className="">
                                        <Service service={service} />
                                    </div>

                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Services;