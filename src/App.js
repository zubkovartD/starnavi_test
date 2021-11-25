import FieldCreation from './components/FieldCreation/FieldCreation';
import Field from './components/Field/Field';
import HoverResult from './components/HoverResult/HoverResult';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <FieldCreation />
        <Field />
      </div>
      <div>
        <HoverResult />
      </div>
    </div>
  );
};

export default App;
