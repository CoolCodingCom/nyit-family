import {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";

import "./ImageUpload.css";

const ImageUpload = forwardRef((props, ref) => {
  const [fileList, setFileList] = useState([]);
  const [previewUrlList, setPreviewUrlList] = useState([]);
  const [deletedIndex, setDeletedIndex] = useState(-1);
  const [leftMost, setleftMost] = useState(true);
  const imageListRef = useRef();
  const rightButtonRef = useRef();
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
      props.onInput(fileList);
      return;
    }
    if (fileList.length < previewUrlList.length) {
      setPreviewUrlList((previousUrlList) =>
        previousUrlList.filter((_, i) => i !== deletedIndex)
      );
      setDeletedIndex(-1);
      props.onInput(fileList);
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
    props.onInput(fileList); // pass all the files to its parental component
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

  const horizontalScrollHandler = (element, speed, step) => {
    const tolerance = 1;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      // console.log(element.scrollLeft);
      // console.log(element.scrollWidth - element.clientWidth);
      if (
        element.scrollLeft === 0 ||
        element.scrollWidth - element.clientWidth - element.scrollLeft <=
          tolerance
      ) {
        clearInterval(slideTimer);
        if (element.scrollLeft === 0) {
          setleftMost(true);
        } else {
          setleftMost(false);
        }
      }
    }, speed);
  };

  return (
    <div className="image-upload__container">
      <input
        type="file"
        accept=".jpg,.png,.jpeg"
        style={{ display: "none" }}
        ref={filePickerRef}
        onChange={pickHandler}
      />
      {previewUrlList.length > 2 && leftMost && (
        <button
          type="button"
          className="image-upload__arrowleft"
          onClick={() => horizontalScrollHandler(imageListRef.current, 10, 20)}
        >
          {String.fromCharCode(0x2b60)}
        </button>
      )}
      {previewUrlList.length > 2 && !leftMost && (
        <button
          type="button"
          className="image-upload__arrowright"
          onClick={() => horizontalScrollHandler(imageListRef.current, 10, -20)}
          ref={rightButtonRef}
        >
          {String.fromCharCode(0x2b62)}
        </button>
      )}
      <div className="image-upload__list" ref={imageListRef}>
        {previewUrlList.map((previewUrlItem, index) => (
          <div className="image-upload__preview">
            {previewUrlList.length > 0 && (
              <button type="button" className="image-upload__edit">
                Edit
              </button>
            )}
            {previewUrlList.length > 0 && (
              <button
                type="button"
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
