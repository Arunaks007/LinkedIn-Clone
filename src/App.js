import "./styles.css";
import linkedLogo from "../src/assets/linkedin.png";
import HomeLogo from "../src/assets/home.png";
import myNetwork from "../src/assets/profile.png";
import jobs from "../src/assets/suitcase.png";
import messaging from "../src/assets/chat.png";
import notifications from "../src/assets/notification.png";
import avatar from "../src/assets/avatar.png";

import photo from "../src/assets/picture.png";
import video from "../src/assets/video.png";
import event from "../src/assets/event.png";
import writeArticle from "../src/assets/writing.png";

import save from "../src/assets/save.png";

import post from "../src/assets/linkedPost.jfif";

const newsArr = [
  "This week's top newsletters",
  "Amazon to cut another 9,000 jobs",
  "UBS to buy Credit Suisse for $3B",
  "Manufacturing gets tech savvy",
  "Kabira Mobility raises $50M"
];

export default function App() {
  return (
    <div className="App">
      <header>
        <div className="searchLogo">
          <img className="linked-logo" src={linkedLogo} alt="LinkedIn Logo" />
          <input type="text" placeholder="Search" />
        </div>
        <nav>
          <ul>
            <li>
              <center>
                <img src={HomeLogo} alt="" />
              </center>
              <span>Home</span>
            </li>
            <li>
              <center>
                <img src={myNetwork} alt="" />
              </center>
              <span>My Network</span>
            </li>
            <li>
              <center>
                <img src={jobs} alt="" />
              </center>
              <span>Jobs</span>
            </li>
            <li>
              <center>
                <img src={messaging} alt="" />
              </center>
              <span>Messaging</span>
            </li>
            <li>
              <center>
                <img src={notifications} alt="" />
              </center>
              <span>Notifications</span>
            </li>
            <li>
              <center>
                <img src={avatar} alt="" />
              </center>
              <span>Me</span>
            </li>
          </ul>
        </nav>
      </header>
      <div className="bodyPage" style={{ paddingTop: "70px" }}>
        <div className="profile-layout">
          <section className="user-details">
            <img src={avatar} alt="" />
            <label>
              <h3>Arunkumar Saravanan</h3>
              <p style={{ color: "grey" }}>Test Engineer (SDET)</p>
            </label>
          </section>
          <section className="stats">
            <label>
              <p>Who's viewed your profile</p>
              <p>36</p>
            </label>
            <label>
              <p>Impressions of your posts</p>
              <p>6</p>
            </label>
          </section>
          <section className="premium">
            <p style={{ color: "grey" }}>Access exclusive tools & insights</p>
            <u>Try Premium for free</u>
          </section>
          <section className="savedItem">
            <img src={save} alt="" />
            <label style={{ opacity: "0.8" }}>My items</label>
          </section>
        </div>
        <div className="post-layout postSection">
          <div className="postSection" style={{ backgroundColor: "white" }}>
            <section>
              <img src={avatar} alt="" />
              <input type="text" placeholder="Start a post" />
            </section>
            <ul>
              <li>
                <img
                  style={{ width: "23px", height: "23px" }}
                  src={photo}
                  alt=""
                />
                <center>Photo</center>
              </li>
              <li>
                <img
                  style={{ width: "20px", height: "20px" }}
                  src={video}
                  alt=""
                />
                <center>Video</center>
              </li>
              <li>
                <img
                  src={event}
                  style={{ width: "20px", height: "20px" }}
                  alt=""
                />
                <center>Event</center>
              </li>
              <li>
                <img
                  src={writeArticle}
                  style={{ width: "20px", height: "20px" }}
                  alt=""
                />
                <center>Write article</center>
              </li>
            </ul>
          </div>
          <div className="posts">
            <section id="section1">
              <img src={avatar} alt="" />
              <div>
                <label>Rahul Shetty</label>
                <p>Teacher over 650k+ QA Students</p>
                <p>9h</p>
              </div>
              <label style={{ marginLeft: "56%" }}>X</label>
            </section>
            <section id="section2">
              <p>
                Playwright Cucumber JS Framework Topics are added to the Course.
                Feel free to jump in to update your skills. #playwright
                #cucumber #playwrightcucumber. If you want to enroll in this Hot
                skill tutorial, Just search for Playwright in Udemy.
              </p>
            </section>
            <section id="section3">
              <img src={post} alt="" />
            </section>
          </div>
        </div>
        <div className="news-section">
          <label>LinkedIn News</label>
          <ul>
            {newsArr.map((val) => {
              return (
                <li>
                  {val}
                  <span>
                    Top news
                    <li>
                      <span>2536 readers</span>
                    </li>
                  </span>
                </li>
              );
            })}
          </ul>
          <span style={{ marginLeft: "24px" }}>Show more</span>
        </div>
      </div>
    </div>
  );
}
