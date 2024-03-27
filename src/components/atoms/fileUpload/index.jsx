import React, { useState } from 'react';
import styles from './styles.module.scss';

const FileUploader = () => {
  const [files, setFiles] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles([...files, ...droppedFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileInputChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);
  };

  return (
    <div className={styles.fileUploader} onDrop={handleDrop} onDragOver={handleDragOver}>
      <input className="visbility-hidden" id="upload-file" type="file" onChange={handleFileInputChange} multiple />
      <img src="/img/uploadIcon.png" alt="upload-logo" className={styles.uploadIcon} />
      <label htmlFor='upload-file' className={styles.title}>
        Drag & Drop PDF file or <span>Browser</span>
      </label>
      <div>
        {files.length > 0 && (
          <div className={styles.fileList}>
            {files.map((file, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index} className={styles.fileItem}>
                {file.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
