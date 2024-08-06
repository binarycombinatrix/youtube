// components/Toast.tsx
import React, { useState, useEffect } from "react";
import styles from "./Toast.module.css";

interface ToastProps {
  message: string;
  type: "success" | "error" | "info";
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, type, duration = 3000 }) => {
  //   const [isVisible, setIsVisible] = useState(false);

  //   useEffect(() => {
  //     setIsVisible(true);
  //     const timer = setTimeout(() => {
  //       setIsVisible(false);
  //     }, duration);

  //     return () => clearTimeout(timer);
  //   });

  return (
    <div
      className={`${styles.toast} ${styles[type]} ${styles.visible}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      {message}
    </div>
  );
};

export default Toast;
