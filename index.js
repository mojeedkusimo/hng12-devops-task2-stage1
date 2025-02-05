const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

const PORT = 3030;

const checkParity = (number) => {

    if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

const fetchFunFact = async (number) => {
    const response = await axios.get(`http://numbersapi.com/${number}/math`);
    return response.data;
}

const getDigitSum = (number) => {

    let sum = 0;
    let isNegative = "";

    for (let x of number) {
        if ( x === "-" ) {
            isNegative = "-";
        } else {

            sum += Number(x);
        }
    }

    return isNegative + sum;
}

const checkIsPrime = (number) => {

    isPrime = true;
    if (number < 0) {
        isPrime = false;
        return isPrime;
    }

    for (let i=2; i < number; i++) {

        if (number % i === 0 || number < 0) {
            isPrime = false;
        }
    }

    return isPrime;
}

const checkIsPerfect = (number) => {

    let isPerfect = false;
    let sum = 0;

    if (number < 0) return isPerfect;

    for (let i = 1; i < number - 1; i++) {
        if ( number % i === 0 ) {
            sum += i;
        }
    }

    if ( sum === number ) isPerfect = true;

    return isPerfect;

}

const checkIsArmstrong = (number) => {

    let isArmstrong = false;

    if (Number(number) < 0) return isArmstrong;

    const numLength = number.length;

    let sum = 0;

    for ( let x of number ) {
        sum += Number(x)**numLength;
    }

    if ( sum === number ) {
        isArmstrong = true;
    }

    return isArmstrong;

}

const properties = [];

app.get("/api/classify-number", async (req, res) => {
    const requestNumber = Number(req.query.number);

    const isInteger = Number.isInteger(requestNumber);

    properties.push(checkParity(requestNumber));

    const fun_fact = await fetchFunFact(requestNumber);

    const digit_sum = getDigitSum(req.query.number);

    const is_prime = checkIsPrime(requestNumber);

    const is_perfect = checkIsPerfect(requestNumber);

    const is_armstrong = checkIsArmstrong(req.query.number);

    try {

        if (isInteger) {

            res.status(200).json({
                number: requestNumber,
                is_prime,
                is_perfect,
                is_armstrong,
                properties,
                fun_fact,
                digit_sum
            });
        } else {
    
            throw "invalid number";

        }

    } catch (e) {
        res.status(400).json({
            "number": e,
            "error": true            
        });
    }

});

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});