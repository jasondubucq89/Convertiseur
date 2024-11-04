import React, { useState } from 'react';
import { Music, Link, AlertCircle, Download, Youtube } from 'lucide-react';

function App() {
  const [url, setUrl] = useState('');
  const [isValidUrl, setIsValidUrl] = useState(true);

  const validateYoutubeUrl = (url: string) => {
    const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
    return regex.test(url);
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    setUrl(newUrl);
    setIsValidUrl(validateYoutubeUrl(newUrl) || newUrl === '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateYoutubeUrl(url)) {
      setIsValidUrl(false);
      return;
    }
    // Here you would integrate with your backend conversion service
    alert('Backend integration required for actual conversion');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Youtube className="w-10 h-10 text-red-600" />
              <Music className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              YouTube to MP3 Converter
            </h1>
            <p className="text-gray-600">
              Convert your favorite YouTube videos to MP3 audio files
            </p>
          </div>

          {/* Converter Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Link className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={url}
                onChange={handleUrlChange}
                placeholder="Paste YouTube URL here..."
                className={`w-full pl-10 pr-4 py-3 border ${
                  isValidUrl ? 'border-gray-300' : 'border-red-500'
                } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors`}
              />
            </div>

            {!isValidUrl && (
              <div className="flex items-center gap-2 text-red-500">
                <AlertCircle className="h-5 w-5" />
                <span className="text-sm">Please enter a valid YouTube URL</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Download className="h-5 w-5" />
              Convert to MP3
            </button>
          </form>

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Feature
              icon={<Music className="h-6 w-6 text-purple-600" />}
              title="High Quality"
              description="Get the best audio quality for your music"
            />
            <Feature
              icon={<Download className="h-6 w-6 text-purple-600" />}
              title="Fast Download"
              description="Quick conversion and download process"
            />
            <Feature
              icon={<AlertCircle className="h-6 w-6 text-purple-600" />}
              title="Safe & Free"
              description="100% safe and free to use"
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-6 text-gray-400 text-sm">
          <p>For personal use only. Please respect YouTube's terms of service.</p>
        </footer>
      </div>
    </div>
  );
}

function Feature({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-3">{icon}</div>
      <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default App;