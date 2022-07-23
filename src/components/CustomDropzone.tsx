import React, {useCallback, useMemo} from 'react'
import {useDropzone} from 'react-dropzone'


const baseStyle = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  
  const focusedStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };
const CustomDropzone = ({onDropHandler}: {onDropHandler: (image: File) => void}) => {
      const {
        getRootProps,
        getInputProps, 
        isFocused,
        isDragAccept,
        isDragReject
    } = useDropzone({accept: {'image/*': []}, onDrop: (files: File[]) => {console.log(files);onDropHandler(files[0])}})
    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
      }), [
        isFocused,
        isDragAccept,
        isDragReject
      ]);
    
      return (
        <div className="container">
        <div {...getRootProps({style: style})}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
      </div>
    )
}


export default CustomDropzone;
 