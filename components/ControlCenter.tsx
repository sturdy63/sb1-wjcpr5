import { Wifi, Bluetooth, Moon, Sun, RotateCw, Cast } from 'lucide-react';

interface ControlCenterProps {
  onClose: () => void;
}

export function ControlCenter({ onClose }: ControlCenterProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center" onClick={onClose}>
      <div className="bg-white bg-opacity-80 backdrop-blur-md w-11/12 rounded-t-3xl p-6" onClick={e => e.stopPropagation()}>
        <div className="grid grid-cols-4 gap-4">
          <ControlButton icon={<Wifi />} label="Wi-Fi" />
          <ControlButton icon={<Bluetooth />} label="Bluetooth" />
          <ControlButton icon={<Moon />} label="Do Not Disturb" />
          <ControlButton icon={<RotateCw />} label="Rotation Lock" />
          <ControlButton icon={<Sun />} label="Brightness" slider />
          <ControlButton icon={<Cast />} label="AirPlay" />
        </div>
      </div>
    </div>
  );
}

function ControlButton({ icon, label, slider = false }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-2">
        {icon}
      </div>
      <span className="text-xs">{label}</span>
      {slider && <div className="w-full h-1 bg-gray-400 rounded-full mt-2"></div>}
    </div>
  );
}