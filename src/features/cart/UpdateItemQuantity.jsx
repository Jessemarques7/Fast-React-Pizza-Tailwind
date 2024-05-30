import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decleaseItemQuantity, incleaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className=" flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decleaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(incleaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
