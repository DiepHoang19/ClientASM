import logo from './logo.svg';
import './App.css';
import { Public } from './Modules/Public/Public';
import { Admin } from './Modules/Admin/Admin';
import { Sidebar } from './Modules/Shared/Sidebar/Sidebar';
import { Navbar } from './Modules/Shared/Navbar/Navbar';

function App() {
  return (
    <>
      <Sidebar />
      <Public />
      <Admin />
    </>

  );
}

export default App;
