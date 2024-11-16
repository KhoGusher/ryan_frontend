const MapSection = () => {
    return (
      <div className="map-section py-5">
        <div className="text-center mb-4">
          <h2>
            Our <span  style={{ color: 'steelblue' }}>Location</span>
          </h2>
          <p>
            Muwawane Village, Chiwamba EPA, TA Chimutu, Lilongwe, Malawi.
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <iframe
            style={{ border: 0, width: "100%", height: "350px" }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10000!2d33.81568729867308!3d-13.955098130901163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1699545153407"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default MapSection;
  