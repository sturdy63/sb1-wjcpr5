import { AppIcon } from './AppIcon';

export function Dock() {
  return (
    <div className="flex justify-around bg-white bg-opacity-30 backdrop-blur-md p-4 rounded-t-3xl">
      <AppIcon name="Phone" icon="/icons/phone.png" />
      <AppIcon name="Safari" icon="/icons/safari.png" />
      <AppIcon name="Mail" icon="/icons/mail.png" />
      <AppIcon name="Music" icon="/icons/music.png" />
    </div>
  );
}