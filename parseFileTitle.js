const parseFileTitle = filename => {
    const indexOfLastDot = filename.lastIndexOf('.');
    const fileTitle = filename.substring(0, indexOfLastDot === -1 ? filename.length : indexOfLastDot);
    return fileTitle;
}

export default parseFileTitle;
