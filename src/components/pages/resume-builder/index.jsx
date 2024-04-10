import React from 'react';
import { DownloadOutlined, CheckOutlined } from '@ant-design/icons';
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
import { DEFAULT_INFO, FONT_FAMILY, THEME_COLORS } from './constant';
import { useResumeBuilderStore } from '@/pages/resume-builder';

const RESUME_POSITION = [
  { id: 'education' },
  { id: 'introduction' },
  { id: 'experience' },
  { id: 'personalProject' },
  { id: 'achivement' },
];
const ResumeBuilder = () => {
  const [info, setInfo] = React.useState(DEFAULT_INFO);
  const [loading, setLoading] = React.useState(false);
  const [resumePosition, setResumePosition] = React.useState(RESUME_POSITION);
  const themeColor = useResumeBuilderStore((state) => state.themeColor);
  const fontFamily = useResumeBuilderStore((state) => state.fontFamily);
  const setThemeColor = useResumeBuilderStore((state) => state.setThemeColor);
  const setFontFamily = useResumeBuilderStore((state) => state.setFontFamily);

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
  };

  const handleChangeSettingResume = (key, value) => {
    if (key === 'themeColor') {
      return setThemeColor(value);
    }
    return setFontFamily(value);
  };

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

        <div className={styles.settingResumeWrapper}>
          <div className={styles.functionButton}>
            <button loading={loading} onClick={handleDonwloadPDF} type="button">
              {loading ? (
                'Downloading...'
              ) : (
                <>
                  <DownloadOutlined /> Download
                </>
              )}
            </button>
          </div>
          <div className={styles.settingForm}>
            <p className="font-size-20 text-bold text-font-family" style={{ color: '#493EA8' }}>
              Resume Setting
            </p>
            <div>
              <div className="font-size-16 text-weight-500">Theme Color</div>
              <div className="flex items-center gap-10 flex-wrap mt-5">
                {THEME_COLORS.map((item) => (
                  <button
                    type="button"
                    onClick={() => handleChangeSettingResume('themeColor', item)}
                    key={item}
                    className={styles.themeBlock}
                    style={{ backgroundColor: item }}
                    aria-label="color"
                  >
                    {themeColor === item && <CheckOutlined />}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-30">
              <div className="font-size-16 text-weight-500">Font Family</div>
              <div className="flex items-center gap-10 flex-wrap mt-5">
                {FONT_FAMILY.map((item) => {
                  const isActive = fontFamily === item.value;
                  return (
                    <button
                      className={styles.buttonOption}
                      style={{
                        backgroundColor: isActive ? themeColor : 'white',
                        color: isActive ? 'white' : 'black',
                      }}
                      type="button"
                      onClick={() => handleChangeSettingResume('fontFamily', item.value)}
                      key={item.value}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* <div className="mt-30">
              <div className="font-size-16 text-weight-500">Font Size (pt)</div>
              <div className="flex items-center gap-10 flex-wrap mt-5">
                {FONT_SIZE.map((item) => {
                  const isActive = resumetSetting.fontSize === item;

                  return (
                    <button
                      className={styles.buttonOption}
                      style={{
                        backgroundColor: isActive ? resumetSetting.themeColor : 'white',
                        color: isActive ? 'white' : 'black',
                      }}
                      type="button"
                      onClick={() => console.log('hello')}
                      key={item}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
