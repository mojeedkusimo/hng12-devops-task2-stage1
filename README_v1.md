# DevOps Task Description

## Create an API that takes a number and returns interesting mathematical properties about it, along with a fun fact like below format:

```javascript
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,  // sum of its digits
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

## Setup instructions

1. Execute below command to install dependencies

```bash

npm i 

```

2. Execute below to start the service

```bash

node index.js 

```

3. Request format

```bash

GET: http://localhost:3030/api/classify-number?number=6


```

4. Response format

```javascript
{
  "number": 6,
  "is_prime": false,
  "is_perfect": true,
  "properties": [
    "armstrong",
    "even"
  ],
  "digit_sum": 6,
  "fun_fact": "6 is the second smallest composite number, its proper divisors being 1, 2 and 3."
}
```