let hd=document.getElementById("hd");
function draufklickne() {
  hd.innerText="Let's play some music";
}

let audio=document.querySelector("audio");
let synth=new Tone.Synth();
const actx = Tone.context;
synth.toDestination();
let notes="CDEFGAB".split("").map(n=>`${n}4`);
let note=0;
Tone.Transport.scheduleRepeat(time=>{
  synth.triggerAttack(notes[note%notes.length]);
  note++;},'4n');
  
