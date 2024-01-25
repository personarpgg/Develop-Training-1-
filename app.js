function Info(tell) {
    return {
        academyName: "그린컴퓨터트 학원",
        location: "둔산점",
        address: "대전 서구 대덕대로 182 오라클 빌딩 3층",
        classRoomNum: "305",
        telNumber: tell,
        std: [
            "신동현?",
            "신동현!",
            "신동현"
        ]
    };
}

var infoObject = Info("01012345678");

console.log(` ${infoObject.std[2]}은 현재 ${infoObject.address} ${infoObject.location} 주소의 ${infoObject.academyName}에 있는 ${infoObject.classRoomNum}의 강의실에서 훈련중인 ${infoObject.std[1]} 입니다. 전화번호는 ${infoObject.telNumber} 입니다.`);
