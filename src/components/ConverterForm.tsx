import React from 'react';
import { Link, AlertCircle, Download } from 'lucide-react';

interface ConverterFormProps {
  url: string;
  isValidUrl: boolean;
  onUrlChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ConverterForm({ url, isValidUrl, onUrlChange, onSubmit }: ConverterFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Link className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={url}
          onChange={onUrlChange}
          placeholder="Collez le lien YouTube ici..."
          className={`w-full pl-10 pr-4 py-3 border ${
            isValidUrl ? 'border-gray-300' : 'border-red-500'
          } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors`}
        />
      </div>

      {!isValidUrl && (
        <div className="flex items-center gap-2 text-red-500">
          <AlertCircle className="h-5 w-5" />
          <span className="text-sm">Veuillez entrer une URL YouTube valide</span>
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
      >
        <Download className="h-5 w-5" />
        Convertir en MP3
      </button>
    </form>
  );
}