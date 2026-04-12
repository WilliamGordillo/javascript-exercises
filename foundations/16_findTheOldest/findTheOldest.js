const findTheOldest = function(people) {
    let oldest_person = null;
    let max_age = -Infinity;

    for (const person of people) {
         const currentYear = new Date().getFullYear();
        const deathYear = person.yearOfDeath || currentYear;

        const age = deathYear - person.yearOfBirth

        if (age > max_age) {
            max_age = age;
            oldest_person = person;
        }
    }

    return oldest_person;
};

// Do not edit below this line
module.exports = findTheOldest;
