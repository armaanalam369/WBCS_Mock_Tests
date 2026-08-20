/* =====================================================================================
   PHYSICS — QUESTION BANK
   -------------------------------------------------------------------------------------
   This file ONLY contains Physics questions. Edit ONLY this file to add/update
   Physics questions — you never need to open index.html or any other subject file.

   HOW TO ADD ONE QUESTION:
   Copy a line like the example below, paste it inside the right "sets" array
   (before the closing "]}"), and edit the text:
       {q:"Your question?", opts:["Option A","Option B","Option C","Option D"], correct:1}
   correct: 0 = 1st option is right, 1 = 2nd, 2 = 3rd, 3 = 4th.
   Every question needs a comma "," after it EXCEPT the very last one in that set.

   HOW TO ADD A WHOLE NEW SET (e.g. "Physics Set 3"):
   Copy an entire { title: "...", questions: [ ... ] } block below, paste it after
   the last set (still inside the outer "sets: [ ]"), rename the title, and replace
   the questions inside.

   Save this file, then re-upload it to your hosting along with index.html and the
   rest of the "questions" folder. index.html itself never needs to change.
   ===================================================================================== */

const SUBJECT_PHYSICS = {
  name: "Physics",
  icon: "⚛️",
  sets: [
    { title: "Physics Set 1", questions: [
      {q:"SI unit of electric current is:", opts:["Volt","Ampere","Ohm","Watt"], correct:1}
    ]}
  ]
};
