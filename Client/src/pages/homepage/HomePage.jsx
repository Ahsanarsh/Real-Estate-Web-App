import Navbar from "../../components/navbar/Navbar";
import SearchBar from "../../components/searchbar/SearchBar";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="homepage">
      <div className="textcontainer">
        <div className="wraper">
          <h1>Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
            molestias sapiente tempora at facere voluptas temporibus neque
            distinctio? Officia libero eius obcaecati, harum autem est dolorem.
            Tempore a cumque pariatur.
          </p>
          <SearchBar />
          <div className="stats">
            <div className="stat">
              <h2>16+</h2>
              <h4>Years Of Experience</h4>
            </div>
            <div className="stat">
              <h2>200</h2>
              <h4>Awards Gained</h4>
            </div>
            <div className="stat">
              <h2>1200+</h2>
              <h4>Property Ready</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="imgcontainer">
        <img src="./bg.png" alt="Background" />
      </div>
    </div>
  );
}

export default HomePage;
