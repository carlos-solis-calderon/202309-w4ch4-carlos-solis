import { useContext } from 'react';
import { App } from '../App/App';

export function Display() {
  const { phone } = useContext(App);

  return <span className="number">{phone}</span>;
}
