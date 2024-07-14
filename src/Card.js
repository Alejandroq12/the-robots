
const Card = () => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-2'>
      <h1>The Robots</h1>
      <img alt='Robots photo' src='https://robohash.org/test?size=200x200' />
      <div>
        <h2>Jane Doe</h2>
        <p>jane.doe@gmail.com</p>
      </div>
    </div>
  );
}

export default Card;