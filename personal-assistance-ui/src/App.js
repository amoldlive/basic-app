import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
//import bulma CSS
import "bulma/css/bulma.css";

function App() {
  return (
    <div >
      <div className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Assistance Programme</p>
        </div>
      </div>
      
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="siri"
                handle="@helloSiri"
                description="It is AI Assistance programe developed by Apple"
                image={SiriImage}
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="alexa"
                handle="@amazonAlexa"
                description="It is AI Assistance programe developed by Amazon"
                image={AlexaImage}
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="bixby"
                handle="@iambixby"
                description="It is AI Assistance programe developed by Samsung"
                image={CortanaImage}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default App;
