 let globalVolume = 0.5;
 let bassmode
 bassmode = false

 function setAndPlayAudio(src) {
    let audio = new Audio(src);
    audio.volume = globalVolume;
    audio.play();
}

function playC() {
    document.getElementById('currentnote').textContent = 'C';
    if (bassmode ===  true) {
        setAndPlayAudio('bassc.wav');
    } else if(bassmode === false) {
        setAndPlayAudio('c.wav');
    }
    audio.play();
}

function playD() {
    document.getElementById('currentnote').textContent = 'D';
    if (bassmode ===  true) {
        setAndPlayAudio('bassd.wav');
    } else if(bassmode ===  false) {
        setAndPlayAudio('d.wav');
    }
    audio.play();
}

function playE() {
    document.getElementById('currentnote').textContent = 'E';
    if (bassmode ===  true) {
        setAndPlayAudio('basse.mp3');
    } else if(bassmode ===  false) {
        setAndPlayAudio('e.wav');
    }
    audio.play();
}

function playF() {
    document.getElementById('currentnote').textContent = 'F';
    if (bassmode ===  true) {
        setAndPlayAudio('bassf.wav');
    } else if(bassmode ===  false) {
        setAndPlayAudio('f.wav');
    }
    audio.play();
}

function playG() {
    document.getElementById('currentnote').textContent = 'G';
    if (bassmode ===  true) {
        setAndPlayAudio('bassg.mp3');
    } else if(bassmode === false) {
        setAndPlayAudio('g.wav');
    }
    audio.play();
}

function playA() {
    document.getElementById('currentnote').textContent = 'A';
   if (bassmode ===  true) {
        setAndPlayAudio('bassa.wav');
    } else if(bassmode ===  false) {
        setAndPlayAudio('a.wav');
    }
    audio.play();
}

function playB() {
    document.getElementById('currentnote').textContent = 'B';
    if (bassmode ===  true) {
        setAndPlayAudio('bassb.mp3');
    } else if(bassmode ===  false) {
        setAndPlayAudio('b.wav');
    }
    audio.play();
}

function playDb() {
    document.getElementById('currentnote').textContent = 'Db/C#';
    setAndPlayAudio('c-sharp.wav');
    audio.play();
}

function playEb() {
    document.getElementById('currentnote').textContent = 'Eb/D#';
    setAndPlayAudio('d-sharp.wav');
    audio.play();
}

function playGb() {
    document.getElementById('currentnote').textContent = 'Gb/F#';
   setAndPlayAudio('f-sharp.wav');
    audio.play();
}

function playAb() {
    document.getElementById('currentnote').textContent = 'Ab/G#';
   setAndPlayAudio('g-sharp.wav');
    audio.play();
}

function playBb() {
    document.getElementById('currentnote').textContent = 'Bb/A#';
    setAndPlayAudio('a-sharp.wav');
    audio.play();
}

function drum() {
    document.getElementById('currentnote').textContent = 'Drum';
    setAndPlayAudio('bass-drum.mp3');
    audio.play();
}
function cymbol() {
    document.getElementById('currentnote').textContent = 'Cymbol';
    setAndPlayAudio('cymbol.mp3');
    audio.play();
}

function triangle() {
    document.getElementById('currentnote').textContent = 'Triangle';
    setAndPlayAudio('triangle.mp3');
    audio.play();
}

function maracas() {
    document.getElementById('currentnote').textContent = 'Maracas';
    setAndPlayAudio('maracas.mp3');
    audio.play();
}

function increaseVolume() {
    if (globalVolume < 1.0) {
        globalVolume = Math.min(globalVolume + 0.1, 1.0);
    }
    document.getElementById('currentnote').textContent = Math.round([globalVolume * 100]) + '%';
}

function decreaseVolume() {
    if (globalVolume > 0.0) {
        globalVolume = Math.max(globalVolume - 0.1, 0.0);
    }
    document.getElementById('currentnote').textContent = Math.round([globalVolume * 100]) + '%';
}

function metronome() {
    let i = true
    setAndPlayAudio('metronome.mp3')
    document.getElementById('currentnote').textContent = 'Metro ON';
    document.getElementById('metronomediv').style.backgroundColor = 'rgba(255, 77, 77, 0.847)'
    document.getElementById('metronomediv').style.boxShadow = 'inset 2px 5px 10px #a30101d8, 0px 0px 6px rgba(255, 77, 77, 0.847)'
    while (i == true) {
        audio.play()
    }
}

function metronome2x() {
    setAndPlayAudio('metronome.mp3')
    document.getElementById('currentnote').textContent = 'Metro 2X';
}

function bass() {
    bassmode = true
    document.getElementById('currentnote').textContent = 'bass';
    document.getElementById('bassdiv').style.backgroundColor = 'red'
    document.getElementById('bassdiv').style.boxShadow = 'inset 2px 5px 10px #a30101d8, 0px 0px 6px rgba(255, 77, 77, 0.847)'
    document.getElementById('sopdiv').style.boxShadow = 'inset 1px 2px 7px #7b7b7bd8'
    document.getElementById('sopdiv').style.backgroundColor = 'rgba(255, 255, 255, 0)'
}

function sop() {
    bassmode = false
    document.getElementById('currentnote').textContent = 'treble';
    document.getElementById('sopdiv').style.backgroundColor = 'red'
    document.getElementById('sopdiv').style.boxShadow = 'inset 2px 5px 10px #a30101d8, 0px 0px 6px rgba(255, 77, 77, 0.847)'
    document.getElementById('bassdiv').style.boxShadow = 'inset 1px 2px 7px #7b7b7bd8'
    document.getElementById('bassdiv').style.backgroundColor = 'rgba(255, 255, 255, 0)'
}
