const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "来自天堂的魔鬼",
        artist: '邓紫棋',
        url: 'http://www.ytmp3.cn/down/33626.mp3',
        cover: '',
      }
    ]
});