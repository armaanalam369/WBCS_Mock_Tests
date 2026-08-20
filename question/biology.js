/* =====================================================================================
   BIOLOGY — QUESTION BANK
   -------------------------------------------------------------------------------------
   This file ONLY contains Biology questions. Edit ONLY this file to add/update
   Biology questions — you never need to open index.html or any other subject file.

   HOW TO ADD ONE QUESTION:
   Copy a line like the example below, paste it inside the right "sets" array
   (before the closing "]}"), and edit the text:
       {q:"Your question?", opts:["Option A","Option B","Option C","Option D"], correct:1}
   correct: 0 = 1st option is right, 1 = 2nd, 2 = 3rd, 3 = 4th.
   Every question needs a comma "," after it EXCEPT the very last one in that set.

   HOW TO ADD A WHOLE NEW SET (e.g. "Biology Set 3"):
   Copy an entire { title: "...", questions: [ ... ] } block below, paste it after
   the last set (still inside the outer "sets: [ ]"), rename the title, and replace
   the questions inside.

   Save this file, then re-upload it to your hosting along with index.html and the
   rest of the "questions" folder. index.html itself never needs to change.
   ===================================================================================== */

const SUBJECT_BIOLOGY = {
  name: "Biology",
  icon: "🧬",
  sets: [
    { title: "Biology Set 1", questions: [
      {q:"The powerhouse of the cell is:", opts:["Nucleus","Ribosome","Mitochondria","Golgi body"], correct:2},
      {q:"Vitamin C deficiency causes:", opts:["Rickets","Scurvy","Night blindness","Beriberi"], correct:1}
    ]}
  ]
};
