import spidercat from '../Images/Spider-cat.jpg'

const cards = () => {
  return (
    <div className='cards'>
      <img src={spidercat} className="card-img-top " alt="Spider-Cat" style={{ maxWidth: '400px'}}></img>
      <div className="card-body">
        <h5 className="card-title">Spider Cat</h5>
        <p className="card-text">
         Press the Button Below to like this image!
        </p>
      </div>
    </div>
  );
};

export default cards;
