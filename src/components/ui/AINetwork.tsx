import Lottie from 'lottie-react';
import animationData from '../../assets/lottie/ai-network.json';

export default function AINetwork() {
  return (
    <div className="absolute inset-0 opacity-30 pointer-events-none">
      <Lottie animationData={animationData} loop />
    </div>
  );
}
