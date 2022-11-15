import React from 'react';
import ContentLayout from '../../../../components/layout/ContentLayout';
import DashboardLayout from '../../../../components/layout/DashboardLayout';
import { BookingMenus } from '../../../../utils/helper';

const PendingBookings = () => {
    return (
        <DashboardLayout title="Pending bookings">
            <ContentLayout items={BookingMenus}>
                <div>

                    {/* Filter */}
                    <div className='flex items-center space-x-10'>


                        <div className="form-control max-w-xs">
                            <label className="label">
                                <span className="label-text dark:text-slate-400">Filter</span>
                            </label>
                            <select className="select select-bordered dark:bg-secondary">
                                <option disabled >Pick one</option>
                                <option>Star Wars</option>
                                <option>Harry Potter</option>
                                <option>Lord of the Rings</option>
                                <option>Planet of the Apes</option>
                                <option>Star Trek</option>
                            </select>
                        </div>


                        <div className="form-control max-w-xs">
                            <label className="label">
                                <span className="label-text dark:text-slate-400">Per Page Show</span>
                            </label>
                            <select className="select select-bordered dark:bg-secondary">
                                <option disabled >5</option>
                                <option>10</option>
                                <option>15</option>
                                <option>20</option>
                            </select>
                        </div>
                    </div>
                </div>
                <h1 className="text-center mt-6">Pending Bookings</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus magni ipsam, doloribus totam ab iste officiis modi eum quos, amet architecto eveniet pariatur omnis consectetur voluptate dicta veritatis in officia inventore odit iusto, ea dolore cum. Beatae ut vitae aut iure dolore magnam error repudiandae excepturi nobis dolorem libero harum quo nisi ipsam laudantium repellat enim blanditiis, tenetur architecto sunt. Quis impedit aliquam architecto officia quaerat sed, necessitatibus reiciendis eaque. Error deserunt fugit ipsum corrupti maiores, similique aperiam non laudantium velit dolore minima quo magnam totam amet recusandae deleniti nemo vero rem eius autem soluta esse, labore reiciendis? A repellat aperiam tempore vero. Doloremque, dolores. Obcaecati dignissimos consequuntur repudiandae! Hic dolore a veritatis ad perspiciatis id quo, ex quaerat facere reprehenderit, quia quidem mollitia temporibus soluta sit assumenda rerum ullam tempora perferendis et. Labore fugiat distinctio minima, cumque iste molestias obcaecati porro blanditiis magnam explicabo exercitationem. Sed quos qui consectetur neque quo ipsa ullam quia itaque cum nesciunt odio voluptates quisquam modi non possimus, distinctio perferendis porro et inventore quam natus doloribus incidunt similique. Voluptas dolor inventore aliquam natus accusantium sed itaque nostrum, eius alias reprehenderit, dignissimos, exercitationem architecto explicabo quis eveniet. Numquam voluptatum molestias quis vero et, ipsam commodi ipsum eum, beatae vel, facilis voluptatibus dicta praesentium libero autem quas a officia quidem aliquid ratione aperiam! Consectetur rerum fugit voluptates eum neque iure libero adipisci vel, amet enim quam soluta iste eos, assumenda culpa maiores quasi impedit obcaecati sapiente ab a. Nobis eos natus, soluta repellat nesciunt iure optio, sapiente veritatis consectetur consequatur minus nam repellendus quae expedita sit, suscipit deserunt eum unde vero quidem sint obcaecati? Fuga sapiente, quam exercitationem animi nostrum, neque sit excepturi corrupti necessitatibus nam perspiciatis repellat at cupiditate repellendus facilis quibusdam inventore voluptatibus laborum possimus earum tempore, soluta eum distinctio? Voluptatem dignissimos molestiae minima porro voluptas nostrum omnis distinctio ipsam architecto? Impedit, suscipit. Error rem velit quidem nisi voluptate quaerat autem dolore alias, consectetur ad quia ipsam iure. Beatae numquam ipsum quas molestias praesentium autem odio placeat est incidunt suscipit perferendis delectus, deleniti quibusdam ratione provident sequi eum animi eius illo quisquam soluta. Aliquam doloremque hic ipsa molestiae autem nesciunt nobis debitis, expedita totam porro reprehenderit sequi excepturi officia est, ex laboriosam, minima fugit quod quidem maiores numquam libero ipsum? Sequi repellat ducimus ipsum ad quo placeat ex commodi labore ea nobis, at porro voluptatem aliquam soluta inventore ratione. Dolor blanditiis vitae rem modi. Eveniet pariatur sequi labore ut quia dignissimos architecto reiciendis dolorum, molestias id tempore distinctio! Eaque quae harum laboriosam, nemo ab, molestiae numquam, veritatis atque pariatur sit omnis soluta explicabo itaque blanditiis fuga eum repellat. Quidem corrupti, voluptatibus repellat quis minus quaerat perferendis neque inventore a dolore quam recusandae at. Id dolore nesciunt autem dolorem, libero omnis ea repellat laudantium eveniet voluptates ex facilis reprehenderit itaque! Doloremque fuga ex sint commodi ullam adipisci voluptatem mollitia natus neque consequatur, similique architecto eaque pariatur, tenetur tempore id laboriosam quae quis quo corporis. Architecto quod similique harum voluptatibus deserunt dolorum dignissimos odit? Amet, ipsum.</p>

            </ContentLayout>
        </DashboardLayout>
    );
};

export default PendingBookings;

PendingBookings.getLayout = function pageLayout(page) {
    return (<>{page}</>)
}