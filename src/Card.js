
const Card = ({ id, name, email}) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-2'>
      <h1>The Robots</h1>
      <img alt='Robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{ name }</h2>
        <p>{ email }</p>
      </div>
    </div>
  );
}

export default Card;