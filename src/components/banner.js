import Image from 'next/image'

const Banner = () => {
    return (
      <header className="row mb-4">
        <div className="col-5">
            <img src="/logo.png" alt="Terranova logo"/>
        </div>
        <div className="col-7 mt-5">
            Providing houses all over the world.
        </div>
      </header>
    );
  };
  
  export default Banner;