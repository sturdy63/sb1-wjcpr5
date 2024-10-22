interface NotificationCenterProps {
  onClose: () => void;
}

export function NotificationCenter({ onClose }: NotificationCenterProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center" onClick={onClose}>
      <div className="bg-white bg-opacity-80 backdrop-blur-md w-11/12 rounded-b-3xl p-6 mt-16" onClick={e => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-4">Notifications</h2>
        <Notification 
          app="Messages" 
          message="John: Hey, are we still on for lunch?" 
          time="5m ago" 
        />
        <Notification 
          app="Calendar" 
          message="Meeting with team at 2:00 PM" 
          time="15m ago" 
        />
        <Notification 
          app="Weather" 
          message="Rain expected this afternoon" 
          time="1h ago" 
        />
      </div>
    </div>
  );
}

function Notification({ app, message, time }) {
  return (
    <div className="bg-white rounded-xl p-4 mb-4 shadow">
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold">{app}</span>
        <span className="text-xs text-gray-500">{time}</span>
      </div>
      <p>{message}</p>
    </div>
  );
}