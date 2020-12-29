const fs = require('fs');

const discoverImgs = dir => {
    const files = fs.readdirSync(dir).filter(path => fs.lstatSync(path).isFile());
    const imgFileTypes = ['jpg', 'jpeg', 'png', 'tiff', 'webp'];
    const imgFiles = files.filter(path => imgFileTypes.some(type => path.toLowerCase().endsWith(type)));
    return imgFiles;
}

module.exports = discoverImgs;