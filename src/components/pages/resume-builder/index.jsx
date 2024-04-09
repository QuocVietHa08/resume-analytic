import React from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { jsPDF } from 'jspdf';
import { toPng } from 'html-to-image';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Header from './Header';
import styles from './styles.module.scss';
import Education from './Education';
import Introduction from './Introduction';
import Experience from './Experience';
import PersonalProject from './PersonalProject';
import Achivement from './Achivement';

const DEFAULT_INFO = {
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
  education: [
    {
      school: 'Hanoi University of Science and Technology',
      major: 'Information Technology',
      startDate: '2016',
      endDate: '2021',
    },
  ],
  introduction: `Experienced Frontend Engineer with three years of hands-on experience building user-friendly websites and web apps. Skilled in HTML, CSS, and JavaScript frameworks like React and Angular. I'm good at turning design ideas into working code that looks great and runs smoothly. I enjoy solving problems and making sure websites work well on different devices and browsers. I love learning new things and keeping up with the latest trends in frontend development. As a team player, I enjoy collaborating with others to create awesome digital experiences.`,
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
};

const RESUME_POSITION = [
  { id: 'education'},
  { id: 'introduction'},
  { id: 'experience'},
  { id: 'personalProject'},
  { id: 'achivement'}
]
const ResumeBuilder = () => {
  const [info, setInfo] = React.useState(DEFAULT_INFO);
  const [loading, setLoading] = React.useState(false);
  const [resumePosition, setResumePosition] = React.useState(RESUME_POSITION);

  const handleChangeInfo = (newInfo, key) => {
    const updateValue = { ...info, [key]: newInfo };
    setInfo(updateValue);
  };

  const handleDonwloadPDF = () => {
    const resume = document.querySelector('#resume');
    setLoading(true);
    setTimeout(() => {
      toPng(resume).then((dataUrl) => {
        // eslint-disable-next-line new-cap
        const pdf = new jsPDF('p', 'mm', 'a4');
        const width = pdf.internal.pageSize.getWidth();
        const height = pdf.internal.pageSize.getHeight();
        pdf.addImage(dataUrl, 'PNG', 0, 0, width, height, undefined, 'FAST');
        setLoading(false);
        pdf.save('resume.pdf');
      });
    }, 1000);
    setLoading(false);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(resumePosition);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setResumePosition(items);
  };

  const handleRenderResumePosition = () => {
    return resumePosition.map((item, index) => {
      switch (item.id) {
        case 'education':
          return <Education key={item.id} index={index} info={info.education} onChangeInfo={handleChangeInfo} />;
        case 'introduction':
          return <Introduction key={item.id} index={index} info={info.introduction} onChangeInfo={handleChangeInfo} />;
        case 'experience':
          return <Experience key={item.id} index={index} info={info.experience} onChangeInfo={handleChangeInfo} />;
        case 'personalProject':
          return <PersonalProject key={item.id} index={index} info={info.personalProject} onChangeInfo={handleChangeInfo} />;
        case 'achivement':
          return <Achivement key={item.id} index={index} info={info.achivement} onChangeInfo={handleChangeInfo} />;
        default:
          return null;
      }
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div id="resume" className={styles.resume}>
          <Header info={info.header} onChangeInfo={handleChangeInfo} />
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="board">
              {(provided, snapshot) => (
                <div
                  style={{
                    backgroundColor: snapshot.isDraggingOver ? 'white' : 'white',
                  }}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {handleRenderResumePosition()}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        <ul className={styles.functionButton}>
          <li>
            <button loading={loading} onClick={handleDonwloadPDF} type="button">
              {loading ? (
                'Downloading...'
              ) : (
                <>
                  <DownloadOutlined /> Download
                </>
              )}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResumeBuilder;
