import Image from 'next/image'

const Banner = () => {
    return (
      <header className="row mb-4 mt-3">
        <div className="col-3">
            <img src="/logo.png" alt="Terranova logo" class="img-logo" />
        </div>
        <div className="col-9 d-flex align-items-center">
            <h4 className="align-middle">Providing houses all over the world.</h4>
        </div>
      </header>
    );
  };
  
  export default Banner;