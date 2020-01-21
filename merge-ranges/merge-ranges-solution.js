// To do this, you’ll need to know when any team is having a meeting.In HiCal, a meeting is stored as objects with integer properties startTime and endTime.These integers represent the number of 30 - minute blocks past 9: 00am.

// For example:

// { startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
// { startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm

// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

// For example, given:

// [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 5 },
//   { startTime: 4, endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9, endTime: 10 },
// ]

// your function would return:

// [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ]


  //what operation is important to us here?
  //insertion? append? prepend? lookup?
  //Brute force o(n^2): we know that if a range's start time is smaller than a range's end time, we can merge the two, where the start time becomes start time, end time of second becomes end time, except for the edge cases where the second end time is less than the first end time as well. We'd have to compare each time range with every other time range.

  //what if we sort first..

function mergeRanges(meetings) {

  // Create a deep copy of the meetings array
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
  const meetingsCopy = JSON.parse(JSON.stringify(meetings));

  // Sort by start time
  const sortedMeetings = meetingsCopy.sort((a, b) => {
    return a.startTime - b.startTime;
  });

  // Initialize mergedMeetings with the earliest meeting
  const mergedMeetings = [sortedMeetings[0]];

  for (let i = 1; i < sortedMeetings.length; i++) {
    const currentMeeting = sortedMeetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    // If the current meeting overlaps with the last merged meeting, use the
    // later end time of the two
    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
    } else {

      // Add the current meeting since it doesn't overlap
      mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings;
}


// Things to consider

// How is this considered an example of using a Greedy Algorithm?
// Is it because at each index of the sortedMeetings, we are looking for the best endtime to use?
// *note*
// Validating that a greedy strategy always gets the best answer is tricky. Either prove that the answer produced by the greedy algorithm is as good as an optimal answer, or run through a rigorous set of test cases to convince your interviewer (and yourself) that it's correct.

// What if we did have an upper bound on the input values ? Could we improve our runtime ? Would it cost us memory ?


//   Could we do this "in place" on the input array and save some space ? What are the pros and cons of doing this in place ?

