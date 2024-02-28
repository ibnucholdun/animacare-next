import React, { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  onClose: any;
};

const Modal = (props: Props) => {
  const { children, onClose } = props;

  const ref: any = useRef();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  return (
    <div className="fixed w-screen h-screen top-0 z-50 flex items-center justify-center bg-[#00000080]">
      <div
        className="bg-white p-5 w-[50vw] max-h-[80vh] overflow-y-auto"
        ref={ref}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
