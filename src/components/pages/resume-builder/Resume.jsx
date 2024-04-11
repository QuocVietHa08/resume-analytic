import React, { useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Header from './Header';
import Education from './Education';
import Introduction from './Introduction';
import Experience from './Experience';
import PersonalProject from './PersonalProject';
import Achivement from './Achivement';
import { DEFAULT_INFO } from './constant';

import styles from './styles.module.scss';
import { useResumeBuilderStore } from '@/pages/resume-builder';

const RESUME_POSITION = [
  { id: 'education' },
  { id: 'introduction' },
  { id: 'experience' },
  { id: 'personalProject' },
  { id: 'achivement' },
];

const BASIC_RESUME_POSITION = [{ id: 'experience' }, { id: 'personalProject' }, { id: 'achivement' }];

const Resume = () => {
  const [info, setInfo] = React.useState(DEFAULT_INFO);
  const [resumePosition, setResumePosition] = React.useState(RESUME_POSITION);
  const layout = useResumeBuilderStore((state) => state.layout);

  useEffect(() => {
    if (layout === 'Basic') {
      setResumePosition(BASIC_RESUME_POSITION);
      return;
    }
    setResumePosition(RESUME_POSITION);
  }, [layout]);

  const handleChangeInfo = (newInfo, key) => {
    const updateValue = { ...info, [key]: newInfo };
    setInfo(updateValue);
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

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(resumePosition);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setResumePosition(items);
  };

  if (layout === 'Basic') {
    return (
      <div id="resume" className={styles.resumeBasicLayout}>
        <div className={styles.resumeLeft}>
          <Header info={info.header} onChangeInfo={handleChangeInfo} />
          <Introduction info={info.introduction} onChangeInfo={handleChangeInfo} />
          <Education info={info.education} onChangeInfo={handleChangeInfo} />
        </div>
        <div className={styles.resumeRight}>
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
      </div>
    );
  }

  return (
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
  );
};

export default Resume;
