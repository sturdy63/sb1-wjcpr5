interface LockScreenProps {
  onUnlock: () => void;
  time: Date;
}

export function LockScreen({ onUnlock, time }: LockScreenProps) {
  return (
    <div className="h-screen bg-cover bg-center flex flex-col justify-between p-8" style={{backgroundImage: "url('/lock-screen.jpg')"}}>
      <div className="text-white text-center mt-16">
        <div className="text-6xl font-thin">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
        <div className="text-xl mt-2">
          {time.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
        </div>
      </div>
      <div 
        className="w-full py-4 text-center text-white bg-white bg-opacity-30 backdrop-blur-md rounded-2xl"
        onClick={onUnlock}
      >
        Swipe up to unlock
      </div>
    </div>
  );
}