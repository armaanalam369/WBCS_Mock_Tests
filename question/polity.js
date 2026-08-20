/* =====================================================================================
   INDIAN POLITY — QUESTION BANK
   -------------------------------------------------------------------------------------
   This file ONLY contains Indian Polity questions. Edit ONLY this file to add/update
   Indian Polity questions — you never need to open index.html or any other subject file.

   HOW TO ADD ONE QUESTION:
   Copy a line like the example below, paste it inside the right "sets" array
   (before the closing "]}"), and edit the text:
       {q:"Your question?", opts:["Option A","Option B","Option C","Option D"], correct:1}
   correct: 0 = 1st option is right, 1 = 2nd, 2 = 3rd, 3 = 4th.
   Every question needs a comma "," after it EXCEPT the very last one in that set.

   HOW TO ADD A WHOLE NEW SET (e.g. "Indian Polity Set 3"):
   Copy an entire { title: "...", questions: [ ... ] } block below, paste it after
   the last set (still inside the outer "sets: [ ]"), rename the title, and replace
   the questions inside.

   Save this file, then re-upload it to your hosting along with index.html and the
   rest of the "questions" folder. index.html itself never needs to change.
   ===================================================================================== */

const SUBJECT_POLITY = {
  name: "Indian Polity",
  icon: "⚖️",
  sets: [
    { title: "Indian Polity Set 1", questions: [
      {q:"The Indian Constitution was adopted on:", opts:["15 Aug 1947","26 Jan 1950","26 Nov 1949","2 Oct 1950"], correct:2},
      {q:"Fundamental Rights are given in which Part of the Constitution?", opts:["Part II","Part III","Part IV","Part V"], correct:1},
      {q:"Who is known as the Chief Guardian of the Constitution?", opts:["President","Prime Minister","Supreme Court","Parliament"], correct:2},
      {q:"Which Article deals with Right to Constitutional Remedies?", opts:["Article 30","Article 32","Article 21","Article 19"], correct:1}
    ]}
  ]
};
