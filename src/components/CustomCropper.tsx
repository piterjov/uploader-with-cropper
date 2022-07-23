import Cropper from 'react-cropper';
import React, { useRef } from 'react';
import "cropperjs/dist/cropper.css";

const CustomCropper = ({imgSrc, onCroppedHandler}: {imgSrc: File, onCroppedHandler: (image: string) => void}) => {
    const cropperRef = useRef<any>(null);
    const _crop = () => {
        if (cropperRef && typeof cropperRef.current !== 'undefined') {
            onCroppedHandler(cropperRef.current.cropper.getCroppedCanvas().toDataURL())          
        }
      };
    return (
        <>
          <Cropper
                src={imgSrc ? URL.createObjectURL(imgSrc) : 'https://dummyimage.com/300.png/09f/fff'}
                viewMode={2}
                style={{ height: 400, width: '100%' }}
                initialAspectRatio={1}
                background={false}
                responsive={true}
                minCropBoxHeight={10}
                autoCropArea={1}
                checkOrientation={false}
                guides={true}
                minCropBoxWidth={10}
                ref={cropperRef}
        />
           <button style={{ height: '50px', width: '150px', margin: '20px' }} onClick={_crop}>Crop this image</button>
   
     </>
    )
}

export default CustomCropper;