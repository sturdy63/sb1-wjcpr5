'use client';

import { useState, useEffect } from 'react';
import { AppIcon } from '@/components/AppIcon';
import { AppWindow } from '@/components/AppWindow';
import { StatusBar } from '@/components/StatusBar';
import { Dock } from '@/components/Dock';
import { LockScreen } from '@/components/LockScreen';
import { ControlCenter } from '@/components/ControlCenter';
import { NotificationCenter } from '@/components/NotificationCenter';

const apps = [
  { id: 'messages', name: 'Messages', icon: '/icons/messages.png' },
  { id: 'facetime', name: 'FaceTime', icon: '/icons/facetime.png' },
  { id: 'calendar', name: 'Calendar', icon: '/icons/calendar.png' },
  { id: 'photos', name: 'Photos', icon: '/icons/photos.png' },
  { id: 'camera', name: 'Camera', icon: '/icons/camera.png' },
  { id: 'weather', name: 'Weather', icon: '/icons/weather.png' },
  { id: 'clock', name: 'Clock', icon: '/icons/clock.png' },
  { id: 'maps', name: 'Maps', icon: '/icons/maps.png' },
  { id: 'notes', name: 'Notes', icon: '/icons/notes.png' },
  { id: 'settings', name: 'Settings', icon: '/icons/settings.png' },
];

export default function Home() {
  const [openApp, setOpenApp] = useState(null);
  const [isLocked, setIsLocked] = useState(true);
  const [showControlCenter, setShowControlCenter] = useState(false);
  const [showNotificationCenter, setShowNotificationCenter] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (isLocked) {
    return <LockScreen onUnlock={() => setIsLocked(false)} time={time} />;
  }

  return (
    <div className="h-full w-full bg-cover bg-center flex flex-col" style={{backgroundImage: "url('/ios-background.jpg')"}}>
      <StatusBar 
        time={time} 
        onControlCenter={() => setShowControlCenter(true)}
        onNotificationCenter={() => setShowNotificationCenter(true)}
      />
      
      <main className="flex-grow flex flex-col justify-start pt-8 overflow-y-auto">
        <div className="grid grid-cols-4 gap-6 p-4">
          {apps.map((app) => (
            <AppIcon 
              key={app.id}
              name={app.name}
              icon={app.icon}
              onClick={() => setOpenApp(app.id)}
            />
          ))}
        </div>
      </main>

      <Dock />

      {openApp && (
        <AppWindow 
          appId={openApp} 
          onClose={() => setOpenApp(null)}
        />
      )}

      {showControlCenter && (
        <ControlCenter onClose={() => setShowControlCenter(false)} />
      )}

      {showNotificationCenter && (
        <NotificationCenter onClose={() => setShowNotificationCenter(false)} />
      )}
    </div>
  );
}