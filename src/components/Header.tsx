import React from 'react';
import { Youtube, Music } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Youtube className="w-10 h-10 text-red-600" />
        <Music className="w-8 h-8 text-purple-600" />
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Convertisseur YouTube vers MP3
      </h1>
      <p className="text-gray-600">
        Convertissez vos vidéos YouTube préférées en fichiers audio MP3
      </p>
    </div>
  );
}