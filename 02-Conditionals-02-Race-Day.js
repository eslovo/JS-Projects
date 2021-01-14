// @TITLE Race Day
// @URL   https://www.codecademy.com/courses/introduction-to-javascript/projects/race-day

/*
Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). 
They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

    Early adults receive a race number at or above 1000.
    All others receive a number below 1000.

Start time:

    Adult registrants run at 9:30 am or 11:00 am.
        Early adults run at 9:30 am.
        Late adults run at 11:00 am.
    Youth registrants run at 12:30 pm (regardless of registration).

But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.
*/

/*
  @param int runnerAge
  @param int adultAge
  @param str early/late registration flag
*/
let runnerAge =11;
const adultAge = 18;
let earlyOrLate ='late';

// random racer number
let raceNumber = Math.floor(Math.random() * 1000);

// indicates whether a runner registered early or not
let isRegistered =false;

// race time
let raseTime ='';

// assign number
if(runnerAge >=adultAge){
  // start time
  earlyOrLate ==='early' ? raceTime ='9:30 am' : raceTime ='11:30 am';
  // race number correction
  if(!isRegistered) isRegistered =true; raceNumber +=1000; 
  
} else {
  // youth registrants run at 12:30 pm (regardless of registration)
  raceTime ='12:30 am';
}


// DEBUG
console.log(`runnerAge =${runnerAge}`);
console.log(`raceNumber =${raceNumber}`);
console.log(`isRegistered =${isRegistered}`);
console.log(`earlyOrLate =${earlyOrLate}`);
console.log(`raceTime =${raceTime}`);
