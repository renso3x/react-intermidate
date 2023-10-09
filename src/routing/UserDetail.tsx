import { useParams, useSearchParams } from "react-router-dom";

const UserDetail = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(params);
  console.log(searchParams.toString());
  return <p>User {params.id}</p>;
};

export default UserDetail;
