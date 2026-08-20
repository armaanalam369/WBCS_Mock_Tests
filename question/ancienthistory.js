/* =====================================================================================
   ANCIENT HISTORY — QUESTION BANK
   -------------------------------------------------------------------------------------
   This file ONLY contains Ancient History questions. Edit ONLY this file to add/update
   Ancient History questions — you never need to open index.html or any other subject file.

   HOW TO ADD ONE QUESTION:
   Copy a line like the example below, paste it inside the right "sets" array
   (before the closing "]}"), and edit the text:
       {q:"Your question?", opts:["Option A","Option B","Option C","Option D"], correct:1}
   correct: 0 = 1st option is right, 1 = 2nd, 2 = 3rd, 3 = 4th.
   Every question needs a comma "," after it EXCEPT the very last one in that set.

   HOW TO ADD A WHOLE NEW SET (e.g. "Ancient History Set 3"):
   Copy an entire { title: "...", questions: [ ... ] } block below, paste it after
   the last set (still inside the outer "sets: [ ]"), rename the title, and replace
   the questions inside.

   Save this file, then re-upload it to your hosting along with index.html and the
   rest of the "questions" folder. index.html itself never needs to change.
   ===================================================================================== */

const SUBJECT_ANCIENTHISTORY = {
  name: "Ancient History",
  icon: "🏺",
  sets: [
    { title: "Ancient History Set 1", questions: [
      {q:"Who founded the Maurya Empire?", opts:["Ashoka","Chandragupta Maurya","Bimbisara","Samudragupta"], correct:1},
      {q:"Which Veda contains hymns dedicated to Agni and Indra?", opts:["Samaveda","Yajurveda","Rigveda","Atharvaveda"], correct:2},
      {q:"Nalanda University flourished mainly under the patronage of:", opts:["Mauryas","Guptas","Cholas","Mughals"], correct:1}
    ]}
  ]
};
