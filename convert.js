import splitPath from './splitPath';
import parseFileTitle from './parseFileTitle';

const CWebp = require('cwebp').CWebp;

const convert = path => {
    const encoder = CWebp(path);
    const [dir, fileName] = splitPath(path);
    const fileTitle = parseFileTitle(fileName);
    const outputPath = `${dir}/${fileTitle}.webp`;

    const error = false;
    encoder.write(outputPath, e => {
        console.error(`Couldn't encode ${path} [Error: ${e}]`);
        error = e;
    });

    return { 
        inputPath: path, 
        outputPath: error ? null : outputPath, 
        success: !error,
    };
};

export default convert;