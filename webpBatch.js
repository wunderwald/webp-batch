import discoverImgs from './discoverImgs';
import convert from './convert';

const fs = require('fs');

const webpBatch = ({ dir }) => {
    const isDirDirectory = fs.lstatSync(dir).isDirectory();

    if(!isDirDirectory){
        throw "Path specified in 'dir' must be a directory";
    }

    const imgPaths = discoverImgs(dir);
    const summary = imgPaths.map(path => convert(path));

    return summary;
};

export default webpBatch;