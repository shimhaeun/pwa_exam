const sCacheName = "hello-pwa"; // 캐시 제목
const aFilesToCache = [ //캐시할 파일 지정
    './',
    './index.html',
    './manifest.json',
    './images/hello-pwa.png'
];
// 서비스워커 실행 & 캐시파일 저장
self.addEventListener("install", pEvent => {
    console.log("서비스 워커 설치 완료!");
    pEvent.waitUntil(
        caches.open(sCacheName)
        .then(pCache => {
            console.log("캐시에 파일 저장 완료!");
            return pCache.addAll(aFilesToCache);
        })
    );
});
// 고유 번호 할당받은 서비스 워커 동작 시작
self.addEventListener('active', pEvent => {
    console.log('서비스워커 동작 시작됨!');
});