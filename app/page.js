import chokidar from 'chokidar';
import Viewer from './viewer';

var photos = [];

const watcher = chokidar.watch("public/Photos", {
  ignored: /(^|[\/\\])\../, // Ignore dotfiles
  persistent: true
});

watcher.on('all', (op, path) => {
  console.log('watch', op, path);
  const file = path.split('/').splice(1).join("/");
  if (file.endsWith(".jpg")) {
    photos.push(`${file}`);
  }
});


export default function Page() {
 
  const images = photos.sort().reverse();

  return <Viewer images={images}/>;
}