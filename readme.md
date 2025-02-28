# Who Wants to be a Millionaire in the browser

## Welcome to Who Wants to be a Millionaire recreated in JS, HTML, and CSS by Jerry Spann.  

This is a simple ***family oriented version*** that everyone can play reguardless of your skill level and age.

**Simplicity:** Being that this version of Who Wants to be a Millionaire has simple common knoweldge questions, I left out the life-lines do to the fact that the questions are relativaly simple.

**Styling:** Tried to get as close to the original game as possible, but my CSS knowledge is limited at this time and I just went with what I knew.

**Script:**  I used a large array of quesitons, answer choices, and a correct choice object that was randomly chosen and assigned to the neccesary variables. I used logic to determine when a question was answered correctly are incorrectly.  If someone by chance answered wrong the game would stop, show the correct answer and after a pause would show their winnings and an option to play again.

**Works Cited:**

I googled how to set a pause in my code and ***Co-Pilot*** came up with the following block of code.

```function pause(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function executeAfterPause() {
  await pause(10000); // Pause for 10 seconds (10000 milliseconds)
  // Your code here to execute after the pause
}

executeAfterPause();
```
image credit: https://logos.fandom.com/wiki/Who_Wants_to_Be_a_Millionaire%3F_(UK)

audio files from: https://www.soundboard.com/sb/whowantstobeamillionairefull

**To test out the game click the following link:**
https://jerryspann1970.github.io/Project1-quiz-game/

![Who wants to be a millionaire](https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000032694/16b95b875867f950c2ef5a952dfdcf8c21755b34e6cd43cb98e916e087d1ac03)