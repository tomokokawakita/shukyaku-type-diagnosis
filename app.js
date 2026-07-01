const types = {
  writing:{name:"文章発信タイプ",icon:"✎",catch:"言葉で想いをほどき、信頼を育てる人。",title:"考えを言葉にして、じっくり信頼を積み重ねられるタイプ",description:"あなたは、誰かの悩みや自分の経験を丁寧に言葉にすることが得意。流行を追うよりも、共感される文章を少しずつ蓄えるほど魅力が伝わります。あなたの言葉を待つ人に届く、息の長い発信がぴったりです。",methods:["note・ブログ","X","Instagramの文章投稿","メールマガジン","LINE配信"],contents:["お客様の悩みを言葉にする投稿","体験から得た気づきや失敗談","ノウハウを物語にした記事"],steps:["よく相談される悩みを3つ書き出す","そのうち1つを300文字の投稿にする","プロフィールからLINEへの入口を整える"],avoid:["毎日、短い投稿を無理に量産すること","映える写真だけで勝負しようとすること"],route:["共感できる投稿","プロフィール","LINE・メルマガ","相談・商品案内"]},
  visual:{name:"ビジュアル発信タイプ",icon:"◐",catch:"世界観で惹きつけ、ひと目で魅力を届ける人。",title:"色・写真・デザインで、ブランドの空気ごと伝えられるタイプ",description:"あなたは、言葉だけでは伝わらない雰囲気や変化を、目に見えるかたちにするのが得意。統一感のある発信やビフォーアフターが、お客様の「こんなふうになりたい」を自然に引き出します。",methods:["Instagram","Pinterest","ショート動画","Canvaテンプレート","商品紹介投稿"],contents:["お客様のビフォーアフター","サービスの利用シーン","色や写真で伝える世界観投稿"],steps:["ブランドに使う色を3色に絞る","実績や変化が伝わる画像を1枚作る","プロフィールの写真と説明を統一する"],avoid:["長文を毎回ひねり出すこと","複数SNSで違う世界観を作ること"],route:["世界観の伝わる投稿","無料テンプレート","LINE登録","商品・講座案内"]},
  live:{name:"会話・ライブタイプ",icon:"◌",catch:"話すほど魅力が伝わり、信頼をつくれる人。",title:"相手の反応を受け取りながら、本来の力を発揮するタイプ",description:"あなたは、一方的に発信するよりも会話の中で相手の気持ちを引き出すのが得意。声や表情から伝わる温度が、そのまま信頼になります。少人数のライブや相談会から始めると、無理なく成果につながります。",methods:["Instagramライブ","Zoomセミナー","無料相談会","YouTube","音声配信"],contents:["お悩み回答ライブ","事例紹介インタビュー","少人数の体験会・セミナー"],steps:["よく聞かれる質問を1つ選ぶ","15分のミニライブを告知する","参加者へ相談会の案内を届ける"],avoid:["完璧な台本を作り込むこと","顔を出さず文章だけで伝え切ること"],route:["ミニライブ・相談会","LINE登録","体験セッション","講座・サービス"]},
  stock:{name:"ストック型コンテンツタイプ",icon:"▤",catch:"役立つ知恵を積み上げ、あとから何度も届ける人。",title:"一度つくった良質なコンテンツを、長く資産にできるタイプ",description:"あなたは、ひとつのテーマを深く掘り下げ、わかりやすく整理する力があります。投稿数を競うより、検索され続ける記事や動画を丁寧に作るほうが成果につながります。時間を味方につけられるタイプです。",methods:["ブログ・SEO","YouTube","Pinterest","Kindle","note・教材販売"],contents:["検索される悩み解決記事","初心者向け解説コンテンツ","比較・レビュー・よくある質問"],steps:["お客様が検索する質問を10個集める","1問を1記事または1動画にする","記事から無料PDFへの入口をつくる"],avoid:["毎日のSNS投稿を義務にすること","一度作ったコンテンツを放置すること"],route:["検索される記事・動画","無料PDF","LINE・メルマガ","教材・サービス"]},
  system:{name:"自動化・導線設計タイプ",icon:"⌘",catch:"仕組みを整えて、少ない力で成果を育てる人。",title:"がんばり続けなくても回る「集客の流れ」をつくれるタイプ",description:"あなたは、毎日SNSを頑張るより、最初に導線を整えて自動で信頼が育つ仕組みを作るのが得意。数字を見ながら小さく改善すると、発信量に頼らず安定した集客につながります。",methods:["LINE公式アカウント","メールマガジン","ステップ配信","無料プレゼント導線","販売ページ"],contents:["無料診断・チェックリスト","LINE登録特典","自動ウェビナー・ステップメール"],steps:["サービスに合う無料特典を1つ決める","登録後に届く3通のメッセージを作る","SNSプロフィールに登録導線を1つ置く"],avoid:["毎日無理にリールを投稿すること","流行の発信法をすべて試すこと"],route:["無料プレゼント","LINE登録","ステップ配信","商品・個別相談"]},
  community:{name:"コミュニティ・紹介タイプ",icon:"∞",catch:"つながりを育て、信頼の輪を広げる人。",title:"人と人の間にあたたかな場をつくり、自然な紹介を生むタイプ",description:"あなたは、人の魅力に気づき、仲間をつなぐことが得意。一人で黙々と投稿するより、交流会やコラボで存在感が伝わります。売り込む前に関係を育てることで、口コミや紹介がゆっくり広がります。",methods:["コミュニティ運営","交流会・お茶会","紹介制度","コラボ企画","Facebook・Discord"],contents:["お客様同士がつながる場づくり","仲間とのコラボ配信","参加者の声・成功事例の紹介"],steps:["既存のお客様3人に近況を聞く","小さな交流会を1回企画する","紹介しやすいサービス説明を1枚にする"],avoid:["一人で発信を抱え込むこと","関係ができる前にすぐ販売すること"],route:["交流会・コラボ","小さなコミュニティ","信頼関係","紹介・継続サービス"]}
};

const questions=[
  {text:"自分の考えや経験を、文章にすることが好きです。",scores:{writing:3,stock:1}},
  {text:"人から「話すと分かりやすい」と言われることがあります。",scores:{live:3,community:1}},
  {text:"Canvaや画像づくり、写真、世界観づくりが好きです。",scores:{visual:3}},
  {text:"ひとつのテーマを長くコツコツ続けることは、比較的苦ではありません。",scores:{stock:3,writing:1}},
  {text:"ライブ配信やZoomで人と話すことに、あまり抵抗がありません。",scores:{live:3}},
  {text:"人の悩みを聞いて、言葉にしてあげることが得意です。",scores:{writing:2,live:1}},
  {text:"同じ作業を繰り返すより、仕組みをつくって自動化したいです。",scores:{system:3,stock:1}},
  {text:"一度つくったコンテンツを、何度も活用したいと思います。",scores:{stock:2,system:2}},
  {text:"数字を見ながら、やり方を改善することに興味があります。",scores:{system:3}},
  {text:"人と人をつないだり、安心できる場をつくることが好きです。",scores:{community:3}},
  {text:"交流会やお茶会、イベントの企画にワクワクします。",scores:{community:3,live:1}},
  {text:"顔出しや声出しには、比較的抵抗が少ないです。",scores:{live:2,visual:1}},
  {text:"毎日のSNS投稿より、検索されるコンテンツを作るほうが好きです。",scores:{stock:3,writing:1}},
  {text:"まず商品を売るより、人との信頼関係をつくるほうが得意です。",scores:{community:3,live:1}},
  {text:"投稿を見た人が次に何をするか、導線を考えるのが好きです。",scores:{system:3}},
  {text:"仕事や商品の魅力を、画像や動画で分かりやすく見せるのが好きです。",scores:{visual:3}}
];
const labels=["とても当てはまる","まあ当てはまる","どちらでもない","あまり当てはまらない","まったく当てはまらない"];
const values=[4,3,2,1,0];
let current=0,answers=[],ranked=[];
const $=s=>document.querySelector(s);
function show(id){document.querySelectorAll('.screen').forEach(el=>el.classList.remove('active'));$('#'+id).classList.add('active');window.scrollTo({top:0,behavior:'smooth'})}
function renderQuestion(){const q=questions[current];$('#current-number').textContent=current+1;$('#question-number').textContent=String(current+1).padStart(2,'0');$('#question-text').textContent=q.text;$('#progress-bar').style.width=((current+1)/questions.length*100)+'%';$('#back-button').disabled=current===0;const list=$('#answer-list');list.innerHTML='';labels.forEach((label,i)=>{const b=document.createElement('button');b.className='answer-option'+(answers[current]===i?' selected':'');b.textContent=label;b.onclick=()=>choose(i);list.appendChild(b)})}
function choose(i){answers[current]=i;document.querySelectorAll('.answer-option').forEach((el,n)=>el.classList.toggle('selected',n===i));setTimeout(()=>{if(current<questions.length-1){current++;renderQuestion()}else finish()},180)}
function finish(){show('loading');const totals=Object.fromEntries(Object.keys(types).map(k=>[k,0])),maximums=Object.fromEntries(Object.keys(types).map(k=>[k,0]));questions.forEach((q,i)=>Object.entries(q.scores).forEach(([key,w])=>{totals[key]+=values[answers[i]]*w;maximums[key]+=values[0]*w}));const normalized=Object.fromEntries(Object.keys(types).map(k=>[k,totals[k]/maximums[k]]));ranked=Object.entries(normalized).sort((a,b)=>b[1]-a[1]).map(x=>x[0]);setTimeout(()=>renderResult(ranked[0]),1500)}
function renderResult(key){const t=types[key],subs=ranked.slice(1,3).map(k=>types[k].name);$('#result-icon').textContent=t.icon;$('#result-name').textContent=t.name;$('#result-catch').textContent=t.catch;$('#result-title').textContent=t.title;$('#result-description').textContent=t.description;$('#subtype-names').textContent=subs.join(' × ');$('#subtype-note').textContent='この2つの強みを組み合わせると、あなたらしい集客導線がさらに育ちます。';$('#method-list').innerHTML=t.methods.map(x=>`<span>${x}</span>`).join('');$('#content-list').innerHTML=t.contents.map(x=>`<li>${x}</li>`).join('');$('#steps-list').innerHTML=t.steps.map((x,i)=>`<div class="step"><b>0${i+1}</b><p>${x}</p></div>`).join('');$('#avoid-list').innerHTML=t.avoid.map(x=>`<li>${x}</li>`).join('');$('#route-list').innerHTML=t.route.map(x=>`<div class="route-step">${x}</div>`).join('');const appUrl='https://tomokokawakita.github.io/shukyaku-type-diagnosis/';const shareText=`私の集客タイプは「${t.name}」でした！\n${t.catch}\n#あなたにぴったりの集客診断`;$('#x-share').href=`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(appUrl)}`;$('#line-share').href=`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(appUrl)}&text=${encodeURIComponent(shareText)}`;show('result')}
function reset(){current=0;answers=[];ranked=[];renderQuestion();show('start')}
$('#start-button').onclick=()=>{renderQuestion();show('quiz')};$('#back-button').onclick=()=>{if(current>0){current--;renderQuestion()}};$('#quit-button').onclick=reset;$('#restart-button').onclick=reset;
