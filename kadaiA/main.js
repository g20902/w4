const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'その日の夜は、とても寒かった。 空も暗くなってきたので急いで家へ帰ろうとすると、:insertx:を見つけた。:insertx:に「:inserty:」と話しかけられた。梅子は急な出来事に驚いて :insertz:が、 家に帰ってからさっきの不思議な出来事を思い出して日記に書いた。';
const insertX = ['サンタクロース', 'ミッキー', '迷子の子供'];
const insertY = ['何か欲しいものある？', 'ディズニーランドに帰りたいんだけど行き方知らない？', '早くママに会いたいよ〜'];
const insertZ = ['吹き出してしまった', '無言で突っ立っていた', 'その場から走って逃げた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('梅子', name);
  }

  if (document.getElementById("jp").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
