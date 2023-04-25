import React, { useState, useRef, useCallback, useMemo } from 'react';
import ImageCapture from 'react-image-data-capture';


const Chatgt = () => {

  const [imgSrc, setImgSrc] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const onCapture = (imageData) => {
    // read as webP
    setImgSrc(imageData.webP);
    // console.log(imageData.webP)
    // read as file
    setImgFile(imageData.file);
    console.log(imageData)

    // read as blob
    // imageData.blob
  };

  const onError = useCallback((error) => { console.log(error) }, []);
  
  // Use useMemo to avoid unexpected behaviour while rerendering
  const config = useMemo(() => ({ video: true }), []);

  // imgFile can be used as a file upload field form submission
  const formData = new FormData();
  formData.append("file", imgFile);
  fetch('/upload', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));


  return (
    // <div>
    //   <video ref={videoRef} autoPlay />
    //   <canvas ref={canvasRef} />
    //   <button onClick={captureImage}>Capture</button>
    //   <button onClick={sendImage}>Send</button>
    // </div>

    <>
      <ImageCapture
        onCapture={onCapture}
        onError={onError}
        width={300}
        userMediaConfig={config}
      />

      <h1>Hello world</h1>

      {imgSrc &&
        <div>
          <div>Captured Image:</div>
          <img src={imgSrc} alt="captured-img" />
        </div>
      }
    </>
  )
    }


export default Chatgt;

