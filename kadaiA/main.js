const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'その日の夜は華氏32度で、とても寒かった。 空も暗くなってきたので急いで家へ帰ろうとすると、:insertx:を見つけた。:insertx:に「:inserty:」と話しかけられた。梅子は急な出来事に驚いて:insertz:。そして家に帰ってからさっきの不思議な出来事を思い出して日記に書いた。';
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
    const temperature =  `摂氏${Math.round((32-32) * 5 / 9)}`;
    newStory = newStory.replace('華氏32', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
