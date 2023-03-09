import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { SIDE_NAVBAR } from '../../../redux/actionTypes/actionTypes';
import { sideNavbar } from '../../../redux/actionCreators/shoppingmallActions';

const SideNavbar = () => {

    // const { sideNav, setSideNav } = useContext(SIDENAV_CONTEXT);
    const dispatch = useDispatch();



    const { isLoading, error, data: featuredCategories } = useQuery('categories', () =>
        fetch('https://backend.dokanbhai.dokanbhai.com:3002/api/add/category').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div>
                <div className='max-h-screen overflow-auto p-4'>
                    <div className='flex justify-between items-center mb-8'>
                        <h2 className='text-xl font-bold '>Categories </h2>
                        <AiFillCloseCircle
                            onClick={() => dispatch(sideNavbar())}
                            className='w-5 h-5' />
                    </div>
                    {
                        featuredCategories.map((category, index) =>
                            <h2
                                key={index + 1}
                                className='mb-8'>{category}</h2>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default SideNavbar;