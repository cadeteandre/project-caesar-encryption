const inputText = document.querySelector('#inputText') as HTMLInputElement;
const inputKey = document.querySelector('#inputKey') as HTMLInputElement;
const encoderBtn = document.querySelector('#encoderBtn') as HTMLButtonElement;
const decoderBtn = document.querySelector('#decoderBtn') as HTMLButtonElement;
const output = document.querySelector('#output') as HTMLElement;

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const caesarEncryption = (inputTextArr: string[], key: number, encode: boolean) => {

  // Remove spaces
  inputTextArr = inputTextArr.filter((char: string) => char !== ' ');
        inputTextArr.forEach((letter: string, index: number) => {
            if(alphabet.includes(letter)) {
              let letterIndex: number = encode ? alphabet.indexOf(letter) + key : alphabet.indexOf(letter) - key;
              letterIndex = ((letterIndex % 26) + 26) % 26;
              inputTextArr[index] = alphabet[letterIndex];
            }
      })
      
      return inputTextArr.join('');
}

  encoderBtn.addEventListener('click', () => {
    let inputTextArr: string[] = inputText.value.toLowerCase().trim().split('');
    const key: number = Number(inputKey.value);
    const result = document.createElement('p') as HTMLParagraphElement;
    result.textContent = caesarEncryption(inputTextArr, key, true);
    output.appendChild(result);
})

decoderBtn.addEventListener('click', () => {
  let inputTextArr: string[] = inputText.value.toLowerCase().trim().split('');
  const key: number = Number(inputKey.value);
  const result = document.createElement('p') as HTMLParagraphElement;
  result.textContent = caesarEncryption(inputTextArr, key, false);
  output.appendChild(result);
})
