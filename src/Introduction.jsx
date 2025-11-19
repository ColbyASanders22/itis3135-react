import "./intro.css";
import "./Header";

export default function Introduction() {
  document.title = "About Me | Colby Sanders || Clever Salmon";

  return (
    <main>
      <Header />
      <h1>About Me</h1>
      <h2>Colby Sanders || Clever Salmon</h2>

      <figure>
        <img
          src="/images/skitrip.jpg"
          alt="About me – ski trip in Jackson Hole, WY"
          className="profile-pic"
        />
        <figcaption>Jackson Hole, WY 2025</figcaption>
      </figure>

      <p>
        Hello! My name is Colby Sanders and I am a Junior majoring in Computer
        Science with a concentration in cybersecurity. I am 23 years old and
        originally from Raleigh, North Carolina. I lived in Charlotte for a year
        in 2020, then moved back a year ago. After graduating I plan to pursue a
        Masters Degree in cybersecurity as well.
      </p>

      <ul>
        <li className="classes">
          <strong>Personal Background:</strong> Hobbies I enjoy in my free time
          include going to the gym, walking my dog, playing video games, hanging
          out with friends, watching sports, watching movies/TV, and more!
        </li>

        <li className="classes">
          <strong>Professional Background:</strong> I began my career in 2021 by
          working at Charlotte Beer Garden and have had various different
          serving jobs since then. This past summer, I was fortunate enough to
          have the opportunity to do an Externship with Snapchat that consisted
          of us creating different AR lenses.
        </li>

        <li className="classes">
          <strong>Academic Background:</strong> I am currently a junior and I
          transferred here from Wake Tech. I am pursuing a major in computer
          science with a concentration in cybersecurity.
        </li>

        <li className="classes">
          <strong>Courses I'm taking and why</strong>
        </li>
      </ul>

      <ol>
        <li>
          ITSC 3146 - Intro Oper Syst &amp; Networking: I am taking this course
          because I am interested in networking and how everything is
          interconnected.
        </li>
        <li>
          ITSC 2175 - Logic and Algorithms: I am taking this course because I am
          curious how algorithms work as they can be extremely useful in real
          world applications.
        </li>
        <li>
          ITIS 3135 - Front-End Web App Development: I am interested in this
          because I am interested in making web applications.
        </li>
        <li>
          ITSC 3160 - Database Design &amp; Implementation: I am taking this
          course because databases are another extremely useful tool in the real
          world and it is important to make sure that they are implemented
          properly.
        </li>
        <li>
          MATH 2164 - Matrices &amp; Linear Algebra: I am taking this course
          because it is a part of the curriculum. I am not a big math fan,
          unfortunately.
        </li>
      </ol>

      <div className="steve">
        <blockquote>
          “The only way to do great work is to love what you do” - Steve Jobs
        </blockquote>
        <hr />
      </div>
    </main>
  );
}
