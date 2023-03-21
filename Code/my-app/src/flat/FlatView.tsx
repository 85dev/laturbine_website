import { Flat } from './Flat';

interface Props {
  flat: Flat;
}

function ReloadButton() {
    function handleClick() {
        window.location.reload();
      }

      return (
        <button className='button--reload' onClick={handleClick}>Reload</button>
      );
}

function FlatView({ flat }: Props) {
  return (
    <div className='flat--selected'>
      <h1>{flat.name}</h1>
      <div className="flat--details">
        <hr />
      <img src={flat.picture} alt={flat.name} className='img--details' />
        <p>Localisation : {flat.location}</p>
        <p>Prix : ${flat.price} par nuit</p>
      </div>
      <ReloadButton />
    </div>
  );
}

export default FlatView;
