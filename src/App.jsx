import './App.css';
import List from './components/List';
import { data } from './components/data';

export default function App() {
  return (
    <List list={data} />
  );
}
