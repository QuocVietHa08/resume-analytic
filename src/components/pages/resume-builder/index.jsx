import React from 'react';
import { DownloadOutlined, CheckOutlined } from '@ant-design/icons';
import { jsPDF } from 'jspdf';
import { toPng } from 'html-to-image';
import { FONT_FAMILY, RESUME_LAYOUTS, THEME_COLORS } from './constant';
import { useResumeBuilderStore } from '@/pages/resume-builder';
import Resume from './Resume';
import styles from './styles.module.scss';

const ResumeBuilder = () => {
  const [loading, setLoading] = React.useState(false);

  const themeColor = useResumeBuilderStore((state) => state.themeColor);
  const fontFamily = useResumeBuilderStore((state) => state.fontFamily);
  const layout = useResumeBuilderStore((state) => state.layout);
  const setThemeColor = useResumeBuilderStore((state) => state.setThemeColor);
  const setFontFamily = useResumeBuilderStore((state) => state.setFontFamily);
  const setLayout = useResumeBuilderStore((state) => state.setLayout);

  const handleDonwloadPDF = async () => {
    const resume = document.querySelector('#resume');
    setLoading(true);
    await setTimeout(() => {
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
  };

  const handleChangeSettingResume = (key, value) => {
    if (key === 'themeColor') {
      return setThemeColor(value);
    }
    if (key === 'fontFamily') {
      return setFontFamily(value);
    }
    return setLayout(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Resume />

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
                    disabled={loading}
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
                      disabled={loading}
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

            <div className="mt-30">
              <div className="font-size-16 text-weight-500">Layout</div>
              <div className="flex items-center gap-10 flex-wrap mt-5">
                {RESUME_LAYOUTS.map((item) => {
                  const isActive = layout === item.label;
                  return (
                    <button
                      className={styles.buttonOption}
                      disabled={loading}
                      style={{
                        backgroundColor: isActive ? themeColor : 'white',
                        color: isActive ? 'white' : 'black',
                      }}
                      onClick={() => handleChangeSettingResume('layout', item.label)}
                      type="button"
                      key={item.label}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
