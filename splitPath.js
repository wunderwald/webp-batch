const splitPath = path => {
    const pathParts = path.split('/'); 
    const dir = [...pathParts].filter((p, i) => i < pathParts.length - 1).join('/');
    const fileName = pathParts[pathParts.length-1];
    return [dir, fileName];
};

module.exports = splitPath;
