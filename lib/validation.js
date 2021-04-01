const numberInputValidation = {
    validate: input => {
        if (!input) {
            console.log(`
!!!!! Please enter a number !!!!!`)
            return false;
        }
        else {
            return true;
        }
    },
    filter: input => {
        if (Number.isNaN(input) || Number(input) <= 0) {
            return '';
        }
        else {
            return Number(input);
        }
    }

}

const emailInputValidation = {
    validate: function (email) {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
            return true;
        } 
        else {
            console.log(`
    Please enter a valid email.`)
            return false;
        }
    }
};

module.exports = {numberInputValidation, emailInputValidation}