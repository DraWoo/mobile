// 기본적인 사용 방법
Kakao.Link.createDefaultButton({
    container: ".kakao-link", // 공유하기 기능을 부여할 DOM container
    objectType: "feed", // 피드타입
    content: {
      title: "HAPPY NEW YEAR, 송구영신예배 | 엑소더스 2021",
      description:
        "2020년 12월31일 송구영신예배, 2021년 1월1일-2일 엑소더스 2021",
      imageUrl:
        "https://w.namu.la/s/5a218e413a95f08b57a7b18998c294f9a8c18f2447e7e5ec6d369557b876646c8bf998ec5fd20db50eec75cfa5aeb7defb174242ace627c8d73bd90c86f934a98adb426c8a2f3cb512c7a66b69637bf92ce125f3becd127e0ae6aa7429ab11a2c5e5a9af2dd1895ac4aaebd346c8581d",
      link: {
        webUrl: "https://drawoo.github.io/mobile/", // 카카오 PC에서 확인할 때 연결될 웹 url
        mobileWebUrl: "https://drawoo.github.io/mobile/", // 카카오 앱에서 확인할 때 연결될 웹 url
      },
    },
  });