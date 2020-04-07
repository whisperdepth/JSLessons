
const mergeObjectsV1 = (obj1, obj2) => Object.assign({}, obj1, obj2);

const mergeObjectsV2 = (obj1, obj2) => Object.assign({}, obj2, obj1);

const mergeObjectsV3 = (obj1, obj2) => {
    let merged = {...obj1, ...obj2};
    return merged;
};

const mergeObjectsV4 = (obj1, obj2) => {
    let merged = {...obj2, ...obj1};
    return merged;
};

