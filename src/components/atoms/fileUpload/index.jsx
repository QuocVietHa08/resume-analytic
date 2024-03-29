import React from 'react';
import styles from './styles.module.scss';

const FileUploader = ({ onChangeFile }) => {

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    onChangeFile(droppedFiles[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileInputChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    onChangeFile(selectedFiles[0]);
  };

  return (
    <label htmlFor="upload-file" className={styles.fileUploader} onDrop={handleDrop} onDragOver={handleDragOver}>
      <input className="visbility-hidden" multiple={false} id="upload-file" type="file" accept=".pdf" onChange={handleFileInputChange} />
      <img src="/img/uploadIcon.png" alt="upload-logo" className={styles.uploadIcon} />
      <span className={styles.title}>
        Drag & Drop PDF file or <span>Browser</span>
      </span>
    </label>
  );
};

export default FileUploader;
