import { Howl } from 'howler';
import SuccessAudio from '../assets/audio/correct_answer.mp3';
import ErrorAudio from '../assets/audio/wrong_answer.mp3';

const sounds: Record<string, any> = {
  success: new Howl({
    src: [SuccessAudio],
    volume: 0.5
  }),
  error: new Howl({
    src: [ErrorAudio],
    volume: 0.5
  })
}

const playSound = (type: string) : void => {
  if (sounds[type]) {
    sounds[type].play();
  }
}

export default playSound