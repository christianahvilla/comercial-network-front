import {useSelector} from 'react-redux';

const ShopTable = () => {
  const shops = useSelector((state) => state.shopState.shops);

  console.log(shops);
};

export default ShopTable;
