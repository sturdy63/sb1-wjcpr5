import { Battery, Wifi, Signal } from 'lucide-react';

interface StatusBarProps {
  time: Date;
  onControlCenter: () => void;
  onNotificationCenter: () => void;
}

export function StatusBar({ time, onControlCenter, onNotificationCenter }: StatusBarProps) {
  return (
    <div className="bg-black bg-opacity-50 text-white p-2 flex justify-between items-center">
      <div onClick={onNotificationCenter}>
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
      <div className="flex items-center space-x-2" onClick={onControlCenter}>
        <Signal size={16} />
        <Wifi size={16} />
        <Battery size={16} />
      </div>
    </div>
  );
}