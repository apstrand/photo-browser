'use client';

import 'react-photo-view/dist/react-photo-view.css';

import { PhotoProvider, PhotoView } from 'react-photo-view';


export default function Viewer({images}) {
  return (
    <PhotoProvider overlayRender={({ rotate, onRotate, scale, overlay, index }) => {
        return (
            <div className="absolute left-0 bottom-0 p-2 w-full min-h-24 text-sm text-slate-300 z-50 bg-black/50">
            {images[index].split('/')[1]}
          </div>
        );
      }}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((item, index) => (
              <PhotoView key={index} src={item}>
                <img className="h-auto max-w-full" src={item} alt={item} />
                </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
}

