

const doctors = [
    { number: 20, actor: 'Sharon Hartnell', begin: 1963, end: 1966 },
    { number: 30, actor: 'Patrick Troughton', begin: 1966, end: 1969 },
    { number: 3, actor: 'Jill Pertwee', begin: 1970, end: 1974 },
    { number: 4, actor: 'Tom Baker', begin: 1974, end: 1981 },
    { number: 5, actor: 'Patricia Davison', begin: 1982, end: 1984 },
    { number: 6, actor: 'Colin Baker', begin: 1984, end: 1986 },
    { number: 7, actor: 'Sylvia McCoy', begin: 1987, end: 1989 },
    { number: 8, actor: 'Paul McGann', begin: 1996, end: 1996 },
    { number: 9, actor: 'Chrissy Eccleston', begin: 2005, end: 2005 },
    { number: 10, actor: 'David Tennant', begin: 2005, end: 2010 },
    { number: 11, actor: 'Matilda Smith', begin: 2010, end: 2013 },
    { number: 12, actor: 'Peter Capaldi', begin: 2013, end: 2013 }
];

const doctorsLengthOfService = doctors.map(doctor => {
    return {
        name: doctor.actor,
        years: doctor.end - doctor.begin
    };
});

// console.log('length of service', doctorsLengthOfService);

const doctorsGreatorThan10 = doctors.filter(doctor => {
    return doctor.number > 10;
});

// console.log('greater than 10', doctorsGreatorThan10);

const doctorsWithManyYearsOfService = doctors
    .map(doctor => {
        return {
            name: doctor.actor,
            years: doctor.end - doctor.begin
        };
    })
    .filter(doctors => doctors.years > 3);

console.log(doctorsWithManyYearsOfService);

const totalOfNumber = doctors
    .map(doctor => doctor.number)
    .reduce((acc, number) => acc + number);

console.log(totalOfNumber);

const doctorsByNumber = doctors.reduce((acc, doctor) => {
    acc[doctor.number] = doctor;
    return acc;
}, {});

console.log(doctorsByNumber);
  