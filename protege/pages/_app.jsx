/* eslint-disable react/prop-types */
import '../styles/globals.css';

function MyApp({ Component }) {
  const new1 = 'Steven';
  console.log(`How are you, ${new1}?`);
  return <Component />;
}

export default MyApp;
