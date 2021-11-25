import './HoverResult.css';
import {useSelector} from 'react-redux';
const HoverResult = () => {
  let hovers = useSelector(state => state.square.hovers)
  return(
    <div className='container'>
      <h1>Hover squares</h1>

      {hovers.map((el, i) => {
        return (
          <div className='hover-item' key={i}>
            <p>row {el['row']} col {el['col']}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HoverResult;