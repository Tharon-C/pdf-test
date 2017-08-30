const R = require('ramda');

const fillDummy = i => {
    const value = (i.type == "checkbox")
        ? true : "It Works!";
    return { [i.name]: value }
};

exports.genData = function(list) {
    return (
        R.mergeAll(list.map(fillDummy))
    )
}
