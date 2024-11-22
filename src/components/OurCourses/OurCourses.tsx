import './OurCourses.scss';
import ButtonDetails from '../../images/ButtonLearn.svg';
import IconStar from '../../images/iconStar.svg';
import IconEn from '../../images/IconEng.svg';
import IconOn from '../../images/IconOnline.svg';
import IconTime from '../../images/IconTime.svg';
import IconTodo from '../../images/IconTodo.svg';
import IconModules from '../../images/Icon-modules.svg';

type CourseModelItemProps = {
  icon: string;
  description: string;
  count: number;
};

const CourseModelItem: React.FC<CourseModelItemProps> = ({ icon, description, count }) => (
  <div className="our-courses__model-item" id={`course${count}`}>
    <img src={icon} alt="model-icon" className="our-courses__model-icon" />
    <p>{description}</p>
  </div>
);

type CourseProps = {
  title: string;
  detailsLink: string;
  time: string;
  modules?: string;
  price: string;
  models: { title: string; items: { description: string }[] }[];
};

const Course: React.FC<CourseProps> = ({
  title,
  detailsLink,
  time,
  modules,
  price,
  models ,
}) => (
  <div className="our-courses__section">
    <div className="our-courses__subtitle-container">
      <div className="our-courses__subtitle-wrapper">
        <img className="our-courses__icon-star" alt="iconStar" src={IconStar} />
        <h3 className="our-courses__subtitle">{title}</h3>
      </div>
      <div className="our-courses__details">
        <a href={detailsLink} className="our-courses__details-link" target="_blank" rel="noopener noreferrer">
          <img src={ButtonDetails} alt="Details" className="our-courses__details-icon" />
          <span>Details</span>
        </a>
      </div>
    </div>

    <div className="our-courses__icons">
      <div>
        <img src={IconTime} alt="Time icon" className="our-courses__icon" />
        <p>{time}</p>
      </div>
      {modules && (
        <div>
          <img src={IconModules} alt="Modules icon" className="our-courses__icon" />
          <p>{modules}</p>
        </div>
      )}
      <div>
        <img src={IconOn} alt="Online icon" className="our-courses__icon" />
        <p>Online</p>
      </div>
      <div>
        <img src={IconEn} alt="English icon" className="our-courses__icon" />
        <p>English</p>
      </div>
    </div>

    <div className="our-courses__program">
      <h4 className="our-courses__program-title">The Three Primary Coaching Program Models:</h4>
      {models.map((model, index) => (
        <div key={index} className="our-courses__model" id={`cour`}>
          <h5 className="our-courses__model-title">{model.title}</h5>
          <div className="our-courses__model-icons">
            {model.items.map((item, idx) => (
              <CourseModelItem key={idx} icon={IconTodo} description={item.description} count={idx + 1} />
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="our-courses__price">
      <p className="our-courses__price-label">Price</p>
      <p className="our-courses__price-amount">{price}</p>
    </div>

    <div className="our-courses__button-container">
      <button className="our-courses__button">Join</button>
    </div>
  </div>
);

const OurCourses: React.FC = () => {
  const coursesData = [
    {
      id: '1',
      title: 'Level 1 (ACC Track) Experiential Executive Coaching Program',
      detailsLink: 'https://example.com',
      time: '60-hour',
      modules: '9 modules',
      price: '$6499',
      models: [
        {
          title: 'Level 1 (ACC Track) Experiential Executive Coaching Program',
          items: [
            { description: 'In-depth exploration of coaching foundations' },
            { description: 'Mastery in effective communication strategies' },
            { description: 'Proficiency in navigating ICF Core Competencies' },
          ],
        },
        {
          title: '3. The Coaching Engagement Model',
          items: [
            { description: 'Provides a structured framework for coaching sessions' },
            { description: 'Progresses from data intake to knowledge acquisition' },
            { description: 'Serves as a roadmap for the engagement, fostering clarity and mutual expectations' },
          ],
        },
      ],
    },
    {
      id: '2',
      title: 'Level 2 Coaching Program',
      detailsLink: 'https://example.com',
      time: '125-hour',
      price: '$8499',
      models: [
        {
          title: '1. The Coaching Certification Model',
          items: [
            { description: 'The program offers three pathways to proficiency: coaching, receiving coaching, or observing coaching sessions' },
            { description: 'Emphasizes three core areas: ICF Ethics, ICF Regulations, and ICF Core Competencies' },
            { description: 'Candidates focus on enhancing skills in performance coaching, behavioral coaching, and perceptual coaching' },
          ],
        },
        {
          title: '2. The Coach’s Learning Model',
          items: [
            { description: 'Illustrates how coaching candidates acquire the necessary skills, tips, tools, and techniques for certification' },
            { description: 'Progresses from data intake to knowledge acquisition, understanding, and ultimately wisdom' },
          ],
        },
        {
          title: '3. The Coaching Engagement Model',
          items: [
            { description: 'Provides a structured framework for coaching sessions' },
            { description: 'Guides coaches and clients through phases of awareness, discovery, goal setting' },
            { description: 'Serves as a roadmap for the engagement, fostering clarity and mutual expectations' },
          ],
        },
      ],
    },
  ];

  return (
    <div className="our-courses" id={"course1"}>
      <h2 className="our-courses__title">Our Courses</h2>
      {coursesData.map((course) => (
        <Course key={course.id} {...course} />
      ))}
    </div>
  );
};

export default OurCourses;