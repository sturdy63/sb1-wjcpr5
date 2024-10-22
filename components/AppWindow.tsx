import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface AppWindowProps {
  appId: string;
  onClose: () => void;
}

export function AppWindow({ appId, onClose }: AppWindowProps) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setIsClosing(false);
  }, [appId]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
      <div className={`bg-white w-11/12 h-5/6 rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 ${isClosing ? 'scale-95' : 'scale-100'}`}>
        <div className="bg-gray-100 p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">{appId}</h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="p-4 h-full overflow-auto">
          <AppContent appId={appId} />
        </div>
      </div>
    </div>
  );
}

function AppContent({ appId }) {
  switch (appId) {
    case 'messages':
      return <MessagesApp />;
    case 'calendar':
      return <CalendarApp />;
    case 'settings':
      return <SettingsApp />;
    default:
      return <p>This is the {appId} app. Content coming soon!</p>;
  }
}

function MessagesApp() {
  return (
    <div>
      <div className="border-b pb-2 mb-4">
        <input type="text" placeholder="Search" className="w-full p-2 rounded-lg bg-gray-100" />
      </div>
      <div className="space-y-4">
        <MessageItem name="John Doe" message="Hey, how's it going?" time="10:30 AM" />
        <MessageItem name="Jane Smith" message="Don't forget about our meeting!" time="Yesterday" />
        <MessageItem name="Bob Johnson" message="Check out this cool article" time="2d ago" />
      </div>
    </div>
  );
}

function MessageItem({ name, message, time }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
        {name[0]}
      </div>
      <div className="flex-grow">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{message}</p>
      </div>
      <span className="text-xs text-gray-400">{time}</span>
    </div>
  );
}

function CalendarApp() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">June 2023</h2>
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-semibold">{day}</div>
        ))}
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} className="text-center p-2 border rounded-lg">
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

function SettingsApp() {
  return (
    <div className="space-y-4">
      <SettingsItem icon="🔔" title="Notifications" />
      <SettingsItem icon="🔒" title="Privacy" />
      <SettingsItem icon="🔊" title="Sounds" />
      <SettingsItem icon="🔆" title="Display & Brightness" />
      <SettingsItem icon="🔋" title="Battery" />
    </div>
  );
}

function SettingsItem({ icon, title }) {
  return (
    <div className="flex items-center space-x-4 p-3 bg-gray-100 rounded-lg">
      <span className="text-2xl">{icon}</span>
      <span className="text-lg">{title}</span>
    </div>
  );
}