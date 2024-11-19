const Player = ({
  name,
  team,
  nationality,
  jerseyNumber,
  imageURL,
  position,
  age,
  PAC,
  SHO,
  PAS,
  DRI,
  DEF,
  PHY,
}) => {
  console.log(imageURL);
  return (
    <section>
      <nav className="card col-lg-4 mb-3">
        <div className="card-header" style={{ width: "100%" }}>
          <div className="d-flex">
            <div>
              <p className="card-text">{age}</p>
              <p className="card-text">{position}</p>
              <p className="card-text">{nationality}</p>
              <p className="card-text">{team}</p>
            </div>
            <img src={imageURL} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <div className="name-box d-flex">
              <h5 className="card-name">{name}</h5>
              <p className="jersey-number">{jerseyNumber}</p>
            </div>
            <div className="attribute">
              <div className="att1">
                <p>{PAC} PAC</p>
                <p>{SHO} SHO</p>
                <p>{PAS} PAS</p>
              </div>
              <div className="att2">
                <p>{DRI} DRI</p>
                <p>{DEF} DEF</p>
                <p>{PHY} PHY</p>
              </div>
              <div></div>
            </div>
            <div></div>
            {/* <p className="card-text">{attribute}</p> */}
          </div>
        </div>
      </nav>
    </section>
  );
};

// Set default props in case any attribute is missing
Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageURL: "https://via.placeholder.com/150",
  position: "Unknown",
  PAC: 0,
  SHO: 0,
  PAS: 0,
  DRI: 0,
  DEF: 0,
  PHY: 0,
};

export default Player;
