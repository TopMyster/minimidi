 let globalVolume = 0.5;

        function setAndPlayAudio(src) {
            let audio = new Audio(src);
            audio.volume = globalVolume;
            audio.play();
        }

function playC() {
    document.getElementById('currentnote').textContent = 'C';
    setAndPlayAudio('c.wav');
    audio.play();
}

function playD() {
    document.getElementById('currentnote').textContent = 'D';
    setAndPlayAudio('d.wav');
    audio.play();
}

function playE() {
    document.getElementById('currentnote').textContent = 'E';
    setAndPlayAudio('e.wav');
    audio.play();
}

function playF() {
    document.getElementById('currentnote').textContent = 'F';
    setAndPlayAudio('f.wav');
    audio.play();
}

function playG() {
    document.getElementById('currentnote').textContent = 'G';
    setAndPlayAudio('g.wav');
    audio.play();
}

function playA() {
    document.getElementById('currentnote').textContent = 'A';
    setAndPlayAudio('a.wav');
    audio.play();
}

function playB() {
    document.getElementById('currentnote').textContent = 'B';
    setAndPlayAudio('b.wav');
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