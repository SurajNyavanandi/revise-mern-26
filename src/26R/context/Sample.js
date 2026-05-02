import { useContext } from 'react';
import { LoginContext } from './LoginContextProvider'; // ✅ IMPORT

function Sample() {
  const { details, setDetails } = useContext(LoginContext);

  return (
    <>
      {/* <h5>Jai Shree Rama Om Namah Shivaya</h5>
      <h4>Details: {JSON.stringify(details)}</h4>
      <input type="text" onChange={(e) => setDetails({ ...details, email: e.target.value })} />
      <input type="password" onChange={(e) => setDetails({ ...details, password: e.target.value })} /> */}
    </>
  );
}

export default Sample;