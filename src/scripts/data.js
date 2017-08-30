const R = require('ramda');

const fillDummy = i => {
    // Most feilds are actually radio buttons which are of type
    // checkbox. In this case we would have to specify the
    // name of the field for value. Setting to false at least
    // shows that the checkbox is affected as every radio set
    // is on last option.
    const value = ( i.type === "checkbox" )
        ? true : `${i.name} works!`;
    return { [i.name]: value }
};

exports.genData = list => (
    R.mergeAll( list.map( fillDummy ) )
);
