/* =====================================================================================
   ENGLISH — QUESTION BANK
   -------------------------------------------------------------------------------------
   This file ONLY contains English questions. Edit ONLY this file to add/update
   English questions — you never need to open index.html or any other subject file.

   HOW TO ADD ONE QUESTION:
   Copy a line like the example below, paste it inside the right "sets" array
   (before the closing "]}"), and edit the text:
       {q:"Your question?", opts:["Option A","Option B","Option C","Option D"], correct:1}
   correct: 0 = 1st option is right, 1 = 2nd, 2 = 3rd, 3 = 4th.
   Every question needs a comma "," after it EXCEPT the very last one in that set.

   HOW TO ADD A WHOLE NEW SET (e.g. "English Set 3"):
   Copy an entire { title: "...", questions: [ ... ] } block below, paste it after
   the last set (still inside the outer "sets: [ ]"), rename the title, and replace
   the questions inside.

   Save this file, then re-upload it to your hosting along with index.html and the
   rest of the "questions" folder. index.html itself never needs to change.
   ===================================================================================== */

const SUBJECT_ENGLISH = {
  name: "English",
  icon: "📘",
  sets: [
    { title: "English Set 1", questions: [
      {q:"Choose the correctly spelt word.", opts:["Recieve","Receive","Receeve","Receve"], correct:1},
      {q:"Synonym of 'Abundant' is:", opts:["Scarce","Plentiful","Rare","Limited"], correct:1},
      {q:"Antonym of 'Ancient' is:", opts:["Old","Modern","Historic","Aged"], correct:1},
      {q:"Fill in the blank: She ____ to the market every day.", opts:["go","goes","going","gone"], correct:1},
      {q:"Identify the correctly punctuated sentence.", opts:["Where are you going.","Where are you going?","where are you going?","Where are you going!"], correct:1}
    ]},
    { title: "English Set 2", questions: [
      {q:"One word substitution: A person who loves books.", opts:["Bibliophile","Philanthropist","Bibliographer","Linguist"], correct:0}
    ]}
  ]
};
