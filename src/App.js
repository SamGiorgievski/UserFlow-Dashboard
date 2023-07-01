import './App.css';
import { useQuery, gql } from '@apollo/client';

function App() {

  const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
  `;  

  function DisplayLocations() {
    const { loading, error, data } = useQuery(GET_LOCATIONS);
    // console.log(useQuery(GET_LOCATIONS));

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return data.locations.map(({ id, name, description, photo }) => (
      <div key={id}>
        <h3>{name}</h3>
        <img width="400" height="250" alt="location-reference" src={`${photo}`} />
        <br />
        <b>About this location:</b>
        <p>{description}</p>
        <br />
      </div>
    ));
  }

  return (
    <div>
      <h2>Viral Nation FE Project</h2>
      <br/>
      <DisplayLocations />
    </div>
  );
}

export default App;
