let hd=document.getElementById("hd");
function draufklickne() {
  hd.innerText="Let's play some music";
}

let audio=document.querySelector("audio");
let synth=new Tone.Synth();
const actx = Tone.context;
let dest=actx.createMediaStreamDestination();
const recorder = new MediaRecorder(dest.stream);
synth.connect(dest);
synth.toDestination();
let chunks=[];
let notes="CDEFGAB".split("").map(n=>`${n}4`);
let note=0;
Tone.Transport.scheduleRepeat(time=>{
  if(note==0){recorder.start();}
  if(note>notes.length){
    synth.triggerRelease(time);
    recorder.stop();
    Tone.Transport.stop();
  } else {
  synth.triggerAttack(notes[note],time);
  note++;}
  },'4n');
recorder.ondataavailable=evt.chunks.push(evt.data);
recorder.onstop=evt=>{
  let blob=new Blob(chunks,{type:'audio/ogg; codecs=opus');
  audio.src=URL.createObjectURL(blob);
}
Tone.Transport.start();
