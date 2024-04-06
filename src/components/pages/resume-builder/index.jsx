import React from 'react';
import Header from './Header';
import styles from './styles.module.scss';
import Education from './Education';
import Introduction from './Introduction';
import Experience from './Experience';
import PersonalProject from './PersonalProject';
import Achivement from './Achivement';
import FormResume from './FormResume';

const ResumeBuilder = () => {
  const [info, setInfo] = React.useState({
    header: {
      name: 'Ha Quoc Viet',
      email: 'quocvietha08@gmail.com',
      phone: '0123456789',
      address: 'My Dinh, Ha Noi, Viet Nam',
      avatar: 'https://avatars.githubusercontent.com/u/56016006?v=4',
      role: 'Frontend Developer',
      gitHubLink: 'https://github.com/QuocVietHa08',
      website: 'https://haquocviet.hashnode.dev/',
    },
    education: {
      school: 'Hanoi University of Science and Technology',
      major: 'Information Technology',
      degree: 'Bachelor',
      startDate: '2016',
      endDate: '2021',
    },
    introduction: {
      content: `Experienced Frontend Engineer with three years of hands-on experience building user-friendly websites and web apps. Skilled in HTML, CSS, and JavaScript frameworks like React and Angular. I'm good at turning design ideas into working code that looks great and runs smoothly. I enjoy solving problems and making sure websites work well on different devices and browsers. I love learning new things and keeping up with the latest trends in frontend development. As a team player, I enjoy collaborating with others to create awesome digital experiences.`,
    },
    experience: [
      {
        id: 1,
        company: 'Company A',
        location: 'Hanoi, Vietnam',
        role: 'Frontend Developer',
        startDate: '2019',
        endDate: '2021',
        description: [
          `Developed and maintained the company's website using React.`,
          `Worked closely with the design team to turn mockups into responsive web pages.`,
          `Optimized website performance and improved user experience.`,
        ],
        projects: [
          {
            id: 1,
            name: 'Project A',
            description: `A web app that helps users track their daily water intake. Built with React and styled with CSS. Users can log in, set daily water intake goals, and track their progress.`,
          },
          {
            id: 2,
            name: 'Project B',
            description: `A portfolio website showcasing my work as a frontend developer. Built with HTML, CSS, and JavaScript. Includes a gallery of projects, contact form, and resume.`,
          },
        ],
      },
      {
        id: 2,
        company: 'Company B',
        location: 'Hanoi, Vietnam',
        role: 'Web Developer',
        startDate: '2017',
        endDate: '2019',
        description: [
          `Built and maintained websites for clients using HTML, CSS, and JavaScript.`,
          `Collaborated with the design team to create visually appealing websites.`,
          ` Ensured websites were responsive and worked well on different devices.`,
        ],
        projects: [
          {
            id: 1,
            name: 'Project A',
            description: `A web app that helps users track their daily water intake. Built with React and styled with CSS. Users can log in, set daily water intake goals, and track their progress.`,
          },
          {
            id: 2,
            name: 'Project B',
            description: `A portfolio website showcasing my work as a frontend developer. Built with HTML, CSS, and JavaScript. Includes a gallery of projects, contact form, and resume.`,
          },
        ],
      },
    ],
    personalProject: [
      {
        id: 1,
        name: 'Project A',
        description: `A web app that helps users track their daily water intake. Built with React and styled with CSS. Users can log in, set daily water intake goals, and track their progress.`,
      },
      {
        id: 2,
        name: 'Project B',
        description: `A portfolio website showcasing my work as a frontend developer. Built with HTML, CSS, and JavaScript. Includes a gallery of projects, contact form, and resume.`,
      },
    ],
    achivement: [
      {
        id: 1,
        name: 'Best Employee of the Year',
        description: 'Awarded for outstanding performance and dedication to the company.',
        startDate: '2020',
        endDate: '2021',
      },
      {
        id: 2,
        name: 'Top Performer',
        description: 'Recognized for exceeding performance goals and delivering high-quality work.',
        startDate: '2019',
        endDate: '2020',
      },
    ],
  });

  const handleChangeInfo = (newInfo) => {
    console.log('newinfo', newInfo)
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.resume}>
          <Header info={info.header} />
          <Education info={info.education} />
          <Introduction info={info.introduction} />
          <Experience info={info.experience} />
          <PersonalProject info={info.personalProject} />
          <Achivement info={info.achivement} />
        </div>
        <div className={styles.formContainer}>
          <FormResume info={info} onChangeInfo={handleChangeInfo} />
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;

