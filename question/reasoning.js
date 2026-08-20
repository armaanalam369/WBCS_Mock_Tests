/* =====================================================================================
   REASONING — QUESTION BANK
   -------------------------------------------------------------------------------------
   This file ONLY contains Reasoning questions. Edit ONLY this file to add/update
   Reasoning questions — you never need to open index.html or any other subject file.

   HOW TO ADD ONE QUESTION:
   Copy a line like the example below, paste it inside the right "sets" array
   (before the closing "]}"), and edit the text:
       {q:"Your question?", opts:["Option A","Option B","Option C","Option D"], correct:1}
   correct: 0 = 1st option is right, 1 = 2nd, 2 = 3rd, 3 = 4th.
   Every question needs a comma "," after it EXCEPT the very last one in that set.

   HOW TO ADD A WHOLE NEW SET (e.g. "Reasoning Set 3"):
   Copy an entire { title: "...", questions: [ ... ] } block below, paste it after
   the last set (still inside the outer "sets: [ ]"), rename the title, and replace
   the questions inside.

   Save this file, then re-upload it to your hosting along with index.html and the
   rest of the "questions" folder. index.html itself never needs to change.
   ===================================================================================== */

const SUBJECT_REASONING = {
  name: "Reasoning",
  icon: "🧩",
  sets: [
    { title: "Reasoning Set 1", questions: [
      {q:"Find the next number: 2, 4, 8, 16, ?", opts:["24","30","32","36"], correct:2},
      {q:"If A=1, B=2, C=3... what is the value of 'CAB'?", opts:["312","321","132","213"], correct:0},
      {q:"Odd one out: Circle, Square, Triangle, Sphere", opts:["Circle","Square","Triangle","Sphere"], correct:3}
    ]}
  ]
};
