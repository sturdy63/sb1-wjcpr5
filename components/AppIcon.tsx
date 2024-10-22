import Image from 'next/image';

interface AppIconProps {
  name: string;
  icon: string;
  onClick?: () => void;
}

export function AppIcon({ name, icon, onClick }: AppIconProps) {
  return (
    <div className="flex flex-col items-center" onClick={onClick}>
      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
        <Image src={icon} alt={name} width={40} height={40} />
      </div>
      <span className="text-white text-xs mt-1 drop-shadow-md">{name}</span>
    </div>
  );
}