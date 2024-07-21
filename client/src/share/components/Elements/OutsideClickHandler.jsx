import React, { useEffect, useRef } from 'react';

import style from "./OutsideClickHandler.module.css";

const OutsideClickHandler = ({ children, onOutsideClick }) => {
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                onOutsideClick();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onOutsideClick]);

    return <div className={`${style.outclick__wrapper}`} ref={wrapperRef}>{children}</div>;
};

export default OutsideClickHandler;