import { LoadingOutlined } from '@ant-design/icons';

const Loader = ({ isLoading, error, children }) => {
  if (isLoading) {
    return <LoadingOutlined style={{ fontSize: 24 }} spin />;
  } else if (error) {
    return <h4 className="titleNavbar">Los pokemones no están disponibles</h4>
  }
  return children;
};

export default Loader;