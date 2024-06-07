import {
  useState,
  useRef,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";

import "./ImageUpload.css";

const ImageUpload = forwardRef((props, ref) => {
  const [fileList, setFileList] = useState([]);
  const [previewUrlList, setPreviewUrlList] = useState([]);
  const [deletedIndex, setDeletedIndex] = useState(-1);
  const filePickerRef = useRef();
  const fileReader = new FileReader();

  useImperativeHandle(ref, () => {
    return {
      pickMedia: pickImageHandler,
    };
  });

  useEffect(() => {
    if (fileList.length === 0) {
      setPreviewUrlList([]);
      return;
    }
    if (fileList.length < previewUrlList.length) {
      setPreviewUrlList((previousUrlList) =>
        previousUrlList.filter((_, i) => i !== deletedIndex)
      );
      setDeletedIndex(-1);
      return;
    }
    fileReader.onload = () => {
      setPreviewUrlList((previousUrlList) => [
        ...previousUrlList,
        fileReader.result,
      ]);
    };
    fileReader.readAsDataURL(fileList[fileList.length - 1]);
    filePickerRef.current.value = "";
  }, [fileList]);

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  const pickHandler = (event) => {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFileList((previousFile) => [...previousFile, pickedFile]);
    }
  };

  const CancelImageHandler = (index) => {
    setFileList((previousFile) => previousFile.filter((_, i) => i !== index));
    setDeletedIndex(index);
  };

  return (
    <div>
      <input
        type="file"
        accept=".jpg,.png,.jpeg"
        style={{ display: "none" }}
        ref={filePickerRef}
        onChange={pickHandler}
      />
      <div className="image-upload__list">
        {previewUrlList.length > 2 && (
          <button
            className="image-upload__arrowleft"
            onClick={() => CancelImageHandler(index)}
          >
            {String.fromCharCode(0x2B05)}
          </button>
        )}
        {previewUrlList.map((previewUrlItem, index) => (
          <div className="image-upload__preview">
            {previewUrlList.length > 0 && (
              <button className="image-upload__edit">Edit</button>
            )}
            {previewUrlList.length > 0 && (
              <button
                className="image-upload__cancel"
                onClick={() => CancelImageHandler(index)}
              >
                ✕
              </button>
            )}
            {previewUrlList.length > 0 && (
              <img src={previewUrlItem} alt="Preview" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

export default ImageUpload;
