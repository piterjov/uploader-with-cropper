import React, { useState } from 'react';
import CustomCropper from './components/CustomCropper';
import CustomDropzone from './components/CustomDropzone';

function App() {
  const [currentImage, setCurrentImage] = useState<any>()
  const [croppedImage, setCroppedImage] = useState<any>()

  return (
    <div>
      <div>
        <CustomDropzone onDropHandler={(image: File) => setCurrentImage(image) }/>
      </div>
    <div style={{ textAlign: 'center' }}>
        <CustomCropper onCroppedHandler={(croppedImage: string) => setCroppedImage(croppedImage)} imgSrc={currentImage} />
    </div>
    <div>
    <div className="box" style={{ width: "50%", float: "right" }}>
           <h1>Preview</h1>
           <div>
              <img height={300} width={300} alt='' src={croppedImage ?? 'https://dummyimage.com/300.png/09f/fff'} />
           </div>
        </div>
    </div>
    </div>
  );
}

export default App;
