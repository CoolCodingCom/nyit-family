import { useState, useRef, useCallback, forwardRef, useImperativeHandle, useEffect } from "react";

import "./ImageUpload.css"

const ImageUpload = forwardRef((props, ref) => {
	const [file, setFile] = useState(null);
	const [previewUrl, setPreviewUrl] = useState("");
  const filePickerRef = useRef();
  const fileReader = new FileReader();

  useImperativeHandle(ref, () => {
    return {
      pickMedia: pickImageHandler,
    };
  });

	useEffect(() => {
		if (!file) {
      setPreviewUrl("");
			return;
		}
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
	}, [file]);

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

	const pickHandler = (event) => {
		let pickedFile;
		if (event.target.files && event.target.files.length === 1) {
			pickedFile = event.target.files[0];
			setFile(pickedFile);
		}
	}

  const CancelImageHandler = () => {
    filePickerRef.current.value="";
    setFile(null);
  }

  return (
    <div>
      <input
        type="file"
        accept=".jpg,.png,.jpeg"
        style={{ display: "none" }}
        ref={filePickerRef}
				onChange={pickHandler}
      />
      <div className="image-upload__preview">
        {previewUrl && <button className="image-upload__edit">Edit</button>}
        {previewUrl && <button className="image-upload__cancel" onClick={CancelImageHandler}>✕</button>}
        {previewUrl && <img src={previewUrl} alt="Preview" />}
      </div>
    </div>
  );
});

export default ImageUpload;
