import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {createBoard} from '../../redux/actions';
import './FieldCreation.css';

const FieldCreation = () => {

  const [selectValue, setSecectValue] = useState(0);
  const [modeOptions, setModeOptions] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    fetch('http://demo1030918.mockable.io/')
    .then(response => response.json())
    .then(result => setModeOptions(result))
    .finally(() => {
      setLoading(false); 
    })
  }, []);

  function handleChange(e) {
    setSecectValue(e.target.value);
  };

  function startGame() {
    dispatch(createBoard(selectValue));
  };

    if (loading) {
      return <p>Data is loading...</p>;
    };

  return (
    <div>
      <div>
        <select name="" id="" onChange={handleChange} defaultValue="" className='select-picker'>
          <option value="" disabled >Pick mode</option>
            {Object.entries(modeOptions).map((el, i) => {
              return (
                <option value={el[1]['field']} key={i}>{el[0]}</option>
              )
            })}
        </select>
        <button className="button-start" onClick={() => startGame()} disabled={!selectValue}>START</button>
      </div>
    </div>
  );
}

export default FieldCreation;