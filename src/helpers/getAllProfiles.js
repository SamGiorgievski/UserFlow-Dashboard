import { useQuery, gql } from '@apollo/client';

const getProfiles = gql`
query GetAllProfiles($orderBy: globalOrderBy, $searchString: String, $rows: Int, $page: Int) {
  getAllProfiles(orderBy: $orderBy, searchString: $searchString, rows: $rows, page: $page) {
    size
    profiles {
      id
      first_name
      last_name
      email
      is_verified
      image_url
      description
    }
  }
}
`;  

function GetAllProfiles() {
  const { loading, error, data } = useQuery(getProfiles);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data.getAllProfiles.profiles);

  return data.getAllProfiles.profiles.map(({ description, email, first_name, id, image_url, is_verified, last_name, __typename
  }) => (
    <div key={id}>
      <h3>{first_name}</h3>
      {/* <img width="400" height="250" alt="location-reference" src={`${photo}`} /> */}
      <br />
      <p>{email}</p>
      <br />
    </div>
  ));
}

export default GetAllProfiles;