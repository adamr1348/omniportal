const faker = require('faker');
const fs = require('fs');
const schoolFile = fs.createWriteStream('./seed_fils/schoolsSeed.csv');
const subjectFile = fs.createWriteStream('./seed_files/subjectsSeed.csv');
const classFile = fs.createWriteStream("./seed_files/classesSeed.csv");

const schools       = ['UCLA', 'USC', 'UCSB', 'Stanford', 'Harvard', 'Yale', 'Oxford', 'Brown', 'Pepperdine', 'New College'];
const subjects      = ['HIST', 'COMP', 'MATH', 'PHIL', 'ENG', 'STAT', 'CHEM', 'BIO', 'POLI'];
const courseNums    = ['1A', '2B', '3C', '4D', '5E', '6F', '7G', '8H'];
const units         = [1, 2, 3, 4, 5, 6, 7];
const terms         = ['quarter', 'semester'];
const classesHeader = 'school|subject|courseNum|title|description|units|termType|price|startDate|endDate\n'

const oneClassEntry = () => {
    let entry = {
        school      : schools[Math.floor(Math.random() * 10)],
        subject     : subjects[Math.floor(Math.random() * 9)],
        courseNum   : courseNums[Math.floor(Math.random() * 8)],
        title       : faker.commerce.productName(),
        description : faker.lorem.paragraph(),
        units       : units[Math.floor(Math.random() * 7)],
        termType    : terms[Math.round(Math.random())],
        price       : '$' + (Math.floor(Math.random() * 30) + 31),
        startDate   : faker.date.future().toISOString().split('T')[0],
        endDate     : faker.date.future().toISOString().split('T')[0]
    };

    return Object.values(entry).join('|');
}


function streamFunc(max, writer, callback, headerline) {
    let x = max;
    write();
  
    function write() {
      let ok = true;
      do {
        if (x % 1000 === 0) {
            console.log(x + ' entries to go')
        }
        if (x === max) {
          x--;
          writer.write(
            headerline
          );
        } else {
            x--
        }
        if (x === 0) {
          // last time!
          var str = callback()
          writer.write(str);
        } else {
          // See if we should continue, or wait.
          // Don't pass the callback, because we're not done yet.
          var str = callback() + "\n";
          ok = writer.write(str);
        }
      } while (x > 0 && ok);
      if (x > 0) {
        // had to stop early!
        // write some more once it drains
        writer.once("drain", write);
      }
    }
}

streamFunc(1000000, classFile, oneClassEntry, classesHeader)