const R = require('ramda');

const fillDummy = i => {
    // Most feilds with a type of checkbox are actually radio buttons.
    // To set radiobuttons we have to specify the name of the field
    // as the value or leave false.
    //
    //Setting to false at least shows that the checkbox is affected
    // as every radio set is on last option.
    
    const value = ( i.type === "checkbox" )
        ? true : `${i.name} works!`;
    return { [i.name]: value }
};

exports.genData = list => (
    R.mergeAll( list.map( fillDummy ) )
);
