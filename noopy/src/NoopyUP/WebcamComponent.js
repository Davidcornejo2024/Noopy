import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";

export function WebcamComponent() {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  
  const videoConstraints = {
    facingMode: "user",
  }; 

  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const startRecording = () => {
    const stream = webcamRef.current.stream;
    if (!stream) {
      console.error("No se pudo obtener el flujo de video.");
      return;
    }

    const recorder = new MediaRecorder(stream, {
      mimeType: "video/webm",
    });

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        setRecordedChunks((prev) => [...prev, event.data]);
      }
    };

    recorder.start();
    setMediaRecorder(recorder);
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorder.stop();
    setRecording(false);

    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "video.webm";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  useEffect(() => {
    if (webcamRef.current) {
      console.log("Webcam stream:", webcamRef.current.stream);
    }
  }, [webcamRef]);

  return (
    <div>
      <h1>Webcam App</h1>
      <Webcam
        audio={true}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        onUserMediaError={(err) => console.error("Error con la webcam:", err)}
      />

      <div style={{ marginTop: "20px" }}>
        <button onClick={capturePhoto}>Capturar Foto</button>
        {recording ? (
          <button onClick={stopRecording}>Detener Grabación</button>
        ) : (
          <button onClick={startRecording}>Iniciar Grabación</button>
        )}
      </div>

      {capturedImage && (
        <div>
          <h3>Foto Capturada:</h3>
          <img src={capturedImage} alt="Capturada" />
        </div>
      )}
    </div>
  );
}
