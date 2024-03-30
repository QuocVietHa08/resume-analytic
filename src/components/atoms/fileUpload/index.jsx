import React from 'react';
import { message } from 'antd';

import styles from './styles.module.scss';

const FileUploader = ({ onChangeFile }) => {
  const [isDragOver, setIsDragOver] = React.useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    const droppedFile = droppedFiles[0];
    if (droppedFile.type !== 'application/pdf') {
      message.error('Please drop a PDF file.');
      setIsDragOver(false);
      return;
    }
    onChangeFile(droppedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragEnd = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleFileInputChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    onChangeFile(selectedFiles[0]);
  };

  return (
    <label
      htmlFor="upload-file"
      className={`${styles.fileUploader} ${isDragOver ? styles.dragOver : ''}`}
      onDragEnd={handleDragEnd}
      onDragLeave={handleDragEnd}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <input className="visbility-hidden" multiple={false} id="upload-file" type="file" accept=".pdf" onChange={handleFileInputChange} />
      <img src={isDragOver ? "/img/downloadIcon.png" : "/img/uploadIcon.png"} alt="upload-logo" className={styles.uploadIcon} />
      <span className={styles.title}>
        {isDragOver ? (
          <div>Drop PDF file here</div>
        ) : (
          <div>
            Drag & Drop PDF file or <span>Browser</span>
          </div>
        )}
      </span>
    </label>
  );
};

export default FileUploader;
