"use client";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

const AnimationLottie = ({ animationFile }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationFile,
    style: {
      width: '95%',
    }
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
