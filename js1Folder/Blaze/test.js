//setup
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(20, 10, 10);
scene.add(camera);

//camera animate
gsap.to(camera.position, {
    keyframes:[
        {duration: 2.5},
        {x: 7, y: 7, z: 7, duration: 2, ease: 'power1.inOut'},
        {duration: 4.5},
        {x: 5, y: 5, z: 5, duration: 1.5, ease: 'power1.inOut'},
        {x: 20, y: 10, z: 10, duration: 0.5, ease: 'power1.inOut'}
    ],
    repeat: -1
});

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const orbitControls = new THREE.OrbitControls(camera, renderer.domElement);



const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight1 = new THREE.PointLight(0xffffff, 1);
pointLight1.position.set(0, 0 , 0);
const pointLightRotateGroup = new THREE.Group();
pointLightRotateGroup.add(pointLight1);

//animation
pointLightRotateGroup.position.set(-20, 5, -20);
gsap.to(pointLightRotateGroup.position, {
    x: 20,
    y: 5,
    z: 20,
    duration: 8.5,
    repeat: -1,
    ease: 'linear',
    yoyo: true
});

scene.add(pointLightRotateGroup);


//flat
const plane1 = new THREE.PlaneGeometry(1.6, 1.6);

const whiteBackground2Side = new THREE.MeshPhongMaterial({ color: 0x333333, transparent: true, opacity: 0 });

const loaderTexture = new THREE.TextureLoader();
const texture = loaderTexture.load('img/nether-bricks.png');
const flatMaterial = new THREE.MeshPhongMaterial({ map: texture });

const flat = new THREE.Mesh(plane1, whiteBackground2Side);
const flat1 = new THREE.Mesh(plane1, flatMaterial);
const widthFlat = 32;
for (let i = 0; i < widthFlat; ++i) {
    for (let j = 0; j < widthFlat; j++) {
        const cloneFlat = flat1.clone();
        cloneFlat.rotation.x = Math.PI / 2;
        cloneFlat.position.x = (i - (widthFlat - 1) / 2) * 1.6;
        cloneFlat.position.z = (j - (widthFlat - 1) / 2) * 1.6;
        cloneFlat.rotation.y = Math.PI;
        scene.add(cloneFlat);
    }
}



/*head*/

//head group
const headBlaze = new THREE.Group();
headBlaze.position.y = 2.4;
scene.add(headBlaze);

//animation
gsap.to(headBlaze.position, {
    keyframes: [
        {y: 2.4, duration: 0, ease: 'power1.inOut'},
        {y: 2.2, duration: 1, ease: 'power1.inOut'},
        {y: 2.6, duration: 1, ease: 'power1.inOut'},
        {y: 2.4, duration: 0.5, ease: 'power1.inOut'},
        {y: 5, duration: 2, ease: 'power1.inOut'},
        {y: 4.8, duration: 1, ease: 'power1.inOut'},
        {y: 5.2, duration: 1, ease: 'power1.inOut'},
        {y: 5, duration: 0.5, ease: 'power1.inOut'},
        {y: 5, duration: 2, ease: 'power1.inOut'},
        {y: 2.4, duration: 2, ease: 'power1.inOut'}
    ],
    repeat: -1
});
gsap.to(headBlaze.rotation, {
    keyframes: [
        {y: 0, duration: 1},
        {y: Math.PI / 4, duration: 1, ease: 'power1.inOut'},
        {duration: 7},
        {y: -Math.PI / 6, duration: 1, ease: 'power1.inOut'},
        {y: 0, duration: 1, ease: 'power1.inOut'},
    ],
    repeat: -1
});


//side blaze
function loadTexture(path, group) {
    const loader = new THREE.TextureLoader();
    loader.load(path, function (texture) {
        const geometry = new THREE.PlaneGeometry(0.8, 0.8); // Adjust size as needed
        const material = new THREE.MeshPhongMaterial({ map: texture });
        const mesh = new THREE.Mesh(geometry, material);
        group.add(mesh);
    });
}

//load pixel face
const face = new THREE.Group();
loadTexture('img/front-face-blaze.png', face);
face.position.z = 0.4;
headBlaze.add(face);

//load pixel bottom head
const bottomHead = new THREE.Group();
loadTexture('img/bottom-head-blaze.png', bottomHead);
bottomHead.rotation.x = Math.PI / 2;
bottomHead.position.y = -0.4;
headBlaze.add(bottomHead);

//load pixel top head
const topHead = new THREE.Group();
loadTexture('img/top-head-blaze.png', topHead);
topHead.rotation.x = -Math.PI / 2;
topHead.position.y = 0.4;
headBlaze.add(topHead);

//load pixel right head
const rightHead = new THREE.Group();
loadTexture('img/right-left-head-blaze.png', rightHead);
rightHead.position.x = 0.4;
rightHead.rotation.y = Math.PI / 2;
headBlaze.add(rightHead);

//load pixel left head
const leftHead = new THREE.Group();
loadTexture('img/right-left-head-blaze.png', leftHead);
leftHead.position.x = -0.4;
leftHead.rotation.y = -Math.PI / 2;
headBlaze.add(leftHead);

//load pixel back head
const backHead = new THREE.Group();
loadTexture('img/back-head-blaze.png', backHead);
backHead.position.z = -0.4;
backHead.rotation.y = Math.PI;
headBlaze.add(backHead);

/*groupStickUp*/
const groupStickUp = new THREE.Group();

//flat up stick
const UpFlatStick = flat.clone();
groupStickUp.add(UpFlatStick);
groupStickUp.rotation.x = Math.PI / 2;
groupStickUp.position.y = -0.2;
headBlaze.add(groupStickUp);

//animation
gsap.to(groupStickUp.position, {
    keyframes: [
        {y: -0.2, duration: 0},
        {y: -0.3, duration: 0.7},
        {y: -0.1, duration: 0.7},
        {y: -0.2, duration: 0.7}
    ],
    repeat: -1
});

/*groupStickCenter*/
const groupStickCenter = new THREE.Group();

//flat center stick
const centerFlatStick = flat.clone();
groupStickCenter.add(centerFlatStick);
groupStickCenter.rotation.x = Math.PI / 2;
groupStickCenter.position.y = -0.6;
headBlaze.add(groupStickCenter);

//animation
gsap.to(groupStickCenter.position, {
    keyframes: [
        {y: -0.6, duration: 0},
        {y: -0.5, duration: 0.7},
        {y: -0.7, duration: 0.7},
        {y: -0.6, duration: 0.7}
    ],
    repeat: -1
});

/*groupStickBottom*/
const groupStickBottom = new THREE.Group();

//flat bottom stick
const bottomFlatStick = flat.clone();
groupStickBottom.add(bottomFlatStick);
groupStickBottom.rotation.x = Math.PI / 2;
groupStickBottom.position.y = -1.4;
headBlaze.add(groupStickBottom);

//animation
gsap.to(groupStickBottom.position, {
    keyframes: [
        {y: -1.4, duration: 0},
        {y: -1.5, duration: 0.7},
        {y: -1.3, duration: 0.7},
        {y: -1.4, duration: 0.7}
    ],
    repeat: -1
});


/*stick box*/
const box2 = new THREE.BoxGeometry(0.2, 0.2, 0.8);
const materialGrid = new THREE.MeshPhongMaterial({ color: 0xffffff, transparent: true, wireframe: true, opacity: 0 });
const stick = new THREE.Mesh(box2, materialGrid);

/*stick group*/
const stickGroup = new THREE.Group();

/*stick group up*/
//stick 1
const stick1 = stick.clone();
const stickGroup1 = stickGroup.clone();
stickGroup1.add(stick1);
stickGroup1.position.y = -0.6;
stickGroup1.position.x = -0.6;
groupStickUp.add(stickGroup1);

//stick 2
const stick2 = stick.clone();
const stickGroup2 = stickGroup.clone();
stickGroup2.add(stick2);
stickGroup2.position.y = -0.6;
stickGroup2.position.x = 0.6;
groupStickUp.add(stickGroup2);

//stick 3
const stick3 = stick.clone();
const stickGroup3 = stickGroup.clone();
stickGroup3.add(stick3);
stickGroup3.position.y = 0.6;
stickGroup3.position.x = -0.6;
groupStickUp.add(stickGroup3);

//stick 4
const stick4 = stick.clone();
const stickGroup4 = stickGroup.clone();
stickGroup4.add(stick4);
stickGroup4.position.y = 0.6;
stickGroup4.position.x = 0.6;
groupStickUp.add(stickGroup4);


//stick 5
const stick5 = stick.clone();
const stickGroup5 = stickGroup.clone();
stickGroup5.add(stick5);
stickGroup5.position.y = -0.5;
stickGroup5.position.x = -0.5;
groupStickCenter.add(stickGroup5);

//stick 6
const stick6 = stick.clone();
const stickGroup6 = stickGroup.clone();
stickGroup6.add(stick6);
stickGroup6.position.y = -0.5;
stickGroup6.position.x = 0.5;
groupStickCenter.add(stickGroup6);

//stick 7
const stick7 = stick.clone();
const stickGroup7 = stickGroup.clone();
stickGroup7.add(stick7);
stickGroup7.position.y = 0.5;
stickGroup7.position.x = -0.5;
groupStickCenter.add(stickGroup7);

//stick 8
const stick8 = stick.clone();
const stickGroup8 = stickGroup.clone();
stickGroup8.add(stick8);
stickGroup8.position.y = 0.5;
stickGroup8.position.x = 0.5;
groupStickCenter.add(stickGroup8);

//stick 9
const stick9 = stick.clone();
const stickGroup9 = stickGroup.clone();
stickGroup9.add(stick9);
stickGroup9.position.y = -0.3;
stickGroup9.position.x = -0.3;
groupStickBottom.add(stickGroup9);

//stick 10
const stick10 = stick.clone();
const stickGroup10 = stickGroup.clone();
stickGroup10.add(stick10);
stickGroup10.position.y = -0.3;
stickGroup10.position.x = 0.3;
groupStickBottom.add(stickGroup10);

//stick 11
const stick11 = stick.clone();
const stickGroup11 = stickGroup.clone();
stickGroup11.add(stick11);
stickGroup11.position.y = 0.3;
stickGroup11.position.x = -0.3;
groupStickBottom.add(stickGroup11);

//stick 12
const stick12 = stick.clone();
const stickGroup12 = stickGroup.clone();
stickGroup12.add(stick12);
stickGroup12.position.y = 0.3;
stickGroup12.position.x = 0.3;
groupStickBottom.add(stickGroup12);

//side stick
function loadTextureStick(path, group) {
    const loader = new THREE.TextureLoader();
    loader.load(path, function (texture) {
        const geometry = new THREE.PlaneGeometry(0.2, 0.8); // Adjust size as needed
        const material = new THREE.MeshPhongMaterial({ map: texture });
        const mesh = new THREE.Mesh(geometry, material);
        group.add(mesh);
    });
}

//mang group stick
const stickGroups = [
    stickGroup1,
    stickGroup2,
    stickGroup3,
    stickGroup4,
    stickGroup5,
    stickGroup6,
    stickGroup7,
    stickGroup8,
    stickGroup9,
    stickGroup10,
    stickGroup11,
    stickGroup12
];

/*img pixel stick*/
//front
for (let i = 0; i < 12; ++i) {
    const frontStick = new THREE.Group();
    loadTextureStick('img/front-stick-blaze.png', frontStick);
    frontStick.rotation.x = -Math.PI / 2;
    frontStick.position.y = 0.1;
    stickGroups[i].add(frontStick);
}

//right
for (let i = 0; i < 12; ++i) {
    const frontStick = new THREE.Group();
    loadTextureStick('img/right-stick-blaze.png', frontStick);
    frontStick.rotation.x = -Math.PI / 2;
    frontStick.rotation.y = Math.PI / 2;
    frontStick.position.x = 0.1;
    stickGroups[i].add(frontStick);
}

//left
for (let i = 0; i < 12; ++i) {
    const frontStick = new THREE.Group();
    loadTextureStick('img/left-stick-blaze.png', frontStick);
    frontStick.rotation.x = -Math.PI / 2;
    frontStick.rotation.y = -Math.PI / 2;
    frontStick.position.x = -0.1;
    stickGroups[i].add(frontStick);
}

//back
for (let i = 0; i < 12; ++i) {
    const frontStick = new THREE.Group();
    loadTextureStick('img/back-stick-blaze.png', frontStick);
    frontStick.rotation.x = -Math.PI / 2;
    frontStick.rotation.y = Math.PI;
    frontStick.position.y = -0.1;
    stickGroups[i].add(frontStick);
}

/*top and bottom stick*/
function loadTextureUpBottomStick(path, group) {
    const loader = new THREE.TextureLoader();
    loader.load(path, function (texture) {
        const geometry = new THREE.PlaneGeometry(0.2, 0.2); // Adjust size as needed
        const material = new THREE.MeshPhongMaterial({ map: texture });
        const mesh = new THREE.Mesh(geometry, material);
        group.add(mesh);
    });
}

//up
for (let i = 0; i < 12; ++i) {
    const frontStick = new THREE.Group();
    loadTextureUpBottomStick('img/up-stick-blaze.png', frontStick);
    frontStick.rotation.x = Math.PI;
    frontStick.position.z = -0.4;
    stickGroups[i].add(frontStick);
}

//bottom
for (let i = 0; i < 12; ++i) {
    const frontStick = new THREE.Group();
    loadTextureUpBottomStick('img/bottom-stick-blaze.png', frontStick);
    frontStick.rotation.x = Math.PI * 2;
    frontStick.position.z = 0.4;
    stickGroups[i].add(frontStick);
}

/*rotate stick*/
//up
for (let i = 0; i < 4; ++i) {
    gsap.to(stickGroups[i].rotation, {
        z: -Math.PI * 2,
        duration: 2,
        ease: "linear",
        repeat: -1
    });
}

//center
for (let i = 4; i < 8; ++i) {
    gsap.to(stickGroups[i].rotation, {
        z: Math.PI * 2,
        duration: 4,
        ease: "linear",
        repeat: -1
    });
}

//bottom
for (let i = 8; i < 12; ++i) {
    gsap.to(stickGroups[i].rotation, {
        z: -Math.PI * 2,
        duration: 4,
        ease: "linear",
        repeat: -1
    });
}

/*rotate group stick*/
const groupsOfStick = [
    groupStickUp,
    groupStickCenter,
    groupStickBottom
];

//up
gsap.to(groupsOfStick[0].rotation, {
    z: Math.PI * 2,
    duration: 2,
    ease: "linear",
    repeat: -1
});

//center
gsap.to(groupsOfStick[1].rotation, {
    z: -Math.PI * 2,
    duration: 4,
    ease: "linear",
    repeat: -1
});

//bottom
gsap.to(groupsOfStick[2].rotation, {
    z: Math.PI * 2,
    duration: 4,
    ease: "linear",
    repeat: -1
});

//fire blaze

//ham add texture smoke
function loadTextureSmoke(path, group) {
    const loader = new THREE.TextureLoader();
    loader.load(path, function (texture) {
        const geometry = new THREE.PlaneGeometry(0.8, 0.8);
        const material = new THREE.MeshPhongMaterial({
            map: texture,
            side: THREE.DoubleSide,
            transparent: true
        });
        const mesh = new THREE.Mesh(geometry, material);
        group.add(mesh);
    });
}

//many smoke
const smokeALL = new THREE.Group();

//smoke I - 1
let countI = 0;
let maxCountI = 10;
function smokeI1Func() {
    //animation smoke p tu I
    const smokeI1 = new THREE.Group();

    const smoke1 = new THREE.Group();
    const smoke2 = new THREE.Group();
    const smoke3 = new THREE.Group();
    const smoke4 = new THREE.Group();
    const smoke5 = new THREE.Group();
    const smoke6 = new THREE.Group();

    const smokesI = [
        smoke1,
        smoke2,
        smoke3,
        smoke4,
        smoke5,
        smoke6
    ];

    const pathI = [
        'img/smoke1/1.png',
        'img/smoke1/2.png',
        'img/smoke1/3.png',
        'img/smoke1/4.png',
        'img/smoke1/5.png',
        'img/smoke1/6.png',
    ];

    gsap.to(smoke1.scale, {
        keyframes: [
            { x: 1, y: 1, z: 1, duration: 0.33 },
            { x: 0, y: 0, z: 0, duration: 0.02 },
            { x: 0, y: 0, z: 0, duration: 1.65 }
        ],
        repeat: -1
    });

    gsap.to(smoke2.scale, {
        keyframes: [
            { x: 1, y: 1, z: 1, duration: 0.66 },
            { x: 0, y: 0, z: 0, duration: 0.02 },
            { x: 0, y: 0, z: 0, duration: 1.32 }
        ],
        repeat: -1
    });

    gsap.to(smoke3.scale, {
        keyframes: [
            { x: 1, y: 1, z: 1, duration: 0.99 },
            { x: 0, y: 0, z: 0, duration: 0.02 },
            { x: 0, y: 0, z: 0, duration: 0.99 }
        ],
        repeat: -1
    });

    gsap.to(smoke4.scale, {
        keyframes: [
            { x: 1, y: 1, z: 1, duration: 1.32 },
            { x: 0, y: 0, z: 0, duration: 0.02 },
            { x: 0, y: 0, z: 0, duration: 0.66 }
        ],
        repeat: -1
    });

    gsap.to(smoke5.scale, {
        keyframes: [
            { x: 1, y: 1, z: 1, duration: 1.65 },
            { x: 0, y: 0, z: 0, duration: 0.02 },
            { x: 0, y: 0, z: 0, duration: 0.33 }
        ],
        repeat: -1
    });

    gsap.to(smoke6.scale, {
        keyframes: [
            { x: 1, y: 1, z: 1, duration: 1.98 },
            { x: 0, y: 0, z: 0, duration: 0.02 },
            { x: 0, y: 0, z: 0, duration: 0 }
        ],
        repeat: -1
    });

    //add smokeI1
    for (let i = 0; i < 6; ++i) {
        loadTextureSmoke(pathI[i], smokesI[i]);
        smokeI1.add(smokesI[i]);
    }

    //add blaze smokeI1
    smokeALL.add(smokeI1);
    headBlaze.add(smokeALL);

    // Khởi tạo giá trị ban đầu
    let xrandom, yrandom, zrandom;

    // Sử dụng GSAP để thực hiện tween và cập nhật lại giá trị ngẫu nhiên sau mỗi lần lặp lại
    let tween = gsap.to(smokeI1.position, {
        keyframes: [
            { x: () => xrandom, y: () => yrandom, z: () => zrandom, duration: 0 },
            { x: () => xrandom, y: () => yrandom + 4, z: () => zrandom, duration: 2 }
        ],
        repeat: -1, // Infinite repeat
        onRepeat: function () {
            // Cập nhật lại giá trị ngẫu nhiên sau mỗi lần lặp lại
            xrandom = (Math.random() * 1.6) - 0.8;
            zrandom = (Math.random() * 1.6) - 0.8;
            yrandom = (Math.random() * 3.2) - 2.4;
            tween.invalidate(); // Đánh dấu tween là không hợp lệ để cập nhật giá trị mới
        }
    });

    countI++; // Tăng bộ đếm
    if (countI >= maxCountI) {
        clearInterval(intervalI); // Dừng setInterval sau khi gọi đủ số lần
    }
}
const intervalI = setInterval(smokeI1Func, 400);

let countII = 0;
let maxCountII = 10;
//smoke II - 1
function smokeII1Func() {
    //II
    const smokeII1 = new THREE.Group();

    const smoke7 = new THREE.Group();
    const smoke8 = new THREE.Group();
    const smoke9 = new THREE.Group();
    const smoke10 = new THREE.Group();
    const smoke11 = new THREE.Group();
    const smoke12 = new THREE.Group();

    const smokesII = [
        smoke7,
        smoke8,
        smoke9,
        smoke10,
        smoke11,
        smoke12
    ];

    const pathII = [
        'img/smoke2/1.png',
        'img/smoke2/2.png',
        'img/smoke2/3.png',
        'img/smoke2/4.png',
        'img/smoke2/5.png',
        'img/smoke2/6.png',
    ];
    gsap.to(smoke7.scale, {
        keyframes: [
            { x: 1, y: 1, z: 1, duration: 0.33 },
            { x: 0, y: 0, z: 0, duration: 0.02 },
            { x: 0, y: 0, z: 0, duration: 1.65 }
        ],
        repeat: -1
    });

    gsap.to(smoke8.scale, {
        keyframes: [
            { x: 1, y: 1, z: 1, duration: 0.66 },
            { x: 0, y: 0, z: 0, duration: 0.02 },
            { x: 0, y: 0, z: 0, duration: 1.32 }
        ],
        repeat: -1
    });

    gsap.to(smoke9.scale, {
        keyframes: [
            { x: 1, y: 1, z: 1, duration: 0.99 },
            { x: 0, y: 0, z: 0, duration: 0.02 },
            { x: 0, y: 0, z: 0, duration: 0.99 }
        ],
        repeat: -1
    });

    gsap.to(smoke10.scale, {
        keyframes: [
            { x: 1, y: 1, z: 1, duration: 1.32 },
            { x: 0, y: 0, z: 0, duration: 0.02 },
            { x: 0, y: 0, z: 0, duration: 0.66 }
        ],
        repeat: -1
    });

    gsap.to(smoke11.scale, {
        keyframes: [
            { x: 1, y: 1, z: 1, duration: 1.65 },
            { x: 0, y: 0, z: 0, duration: 0.02 },
            { x: 0, y: 0, z: 0, duration: 0.33 }
        ],
        repeat: -1
    });

    gsap.to(smoke12.scale, {
        keyframes: [
            { x: 1, y: 1, z: 1, duration: 1.98 },
            { x: 0, y: 0, z: 0, duration: 0.02 },
            { x: 0, y: 0, z: 0, duration: 0 }
        ],
        repeat: -1
    });

    //add smokeII1
    for (let i = 0; i < 6; ++i) {
        loadTextureSmoke(pathII[i], smokesII[i]);
        smokeII1.add(smokesII[i]);
    }


    //add blaze smokeII1
    smokeALL.add(smokeII1);
    headBlaze.add(smokeALL);

    // Khởi tạo giá trị ban đầu
    let xrandom, yrandom, zrandom;

    // Sử dụng GSAP để thực hiện tween và cập nhật lại giá trị ngẫu nhiên sau mỗi lần lặp lại
    let tween = gsap.to(smokeII1.position, {
        keyframes: [
            { x: () => xrandom, y: () => yrandom, z: () => zrandom, duration: 0 },
            { x: () => xrandom, y: () => yrandom + 4, z: () => zrandom, duration: 2 }
        ],
        repeat: -1, // Infinite repeat
        onRepeat: function () {
            // Cập nhật lại giá trị ngẫu nhiên sau mỗi lần lặp lại
            xrandom = (Math.random() * 1.6) - 0.8;
            zrandom = (Math.random() * 1.6) - 0.8;
            yrandom = (Math.random() * 3.2) - 2.4;
            tween.invalidate(); // Đánh dấu tween là không hợp lệ để cập nhật giá trị mới
        }
    });

    countII++; // Tăng bộ đếm
    if (countII >= maxCountII) {
        clearInterval(intervalII); // Dừng setInterval sau khi gọi đủ số lần
    }
    
}
const intervalII = setInterval(smokeII1Func, 100);

let count = 0;
let maxCount = 3;
//fire ball
function summonFireBall() {
    const loadFireBall = new THREE.TextureLoader();
const fireBallTextture = loadFireBall.load('img/fire-ball.png');
const materialFireBall = new THREE.MeshPhongMaterial({map: fireBallTextture, transparent: true});
const meshGridFireBall = new THREE.PlaneGeometry(1.2, 1.2);
const meshFireBall = new THREE.Mesh(meshGridFireBall, materialFireBall);
const groupFireBall = new THREE.Group();
groupFireBall.add(meshFireBall);
headBlaze.add(groupFireBall);

gsap.to(groupFireBall.scale, {
    keyframes: [
        {x: 0, y: 0, z: 0, duration: 0},
        {x: 0, y: 0, z: 0, duration: 6},
        {x: 1, y: 1, z: 1, duration: 0.1},
        {x: 1, y: 1, z: 1, duration: 4.9}
    ],
    repeat: -1
});
gsap.to(groupFireBall.position, {
    keyframes: [
        {x: 0, y: 0, z: 0, duration: 0},
        {x: 0, y: 0, z: 0, duration: 6},
        {x: 0, y: 0, z: 0, duration: 0.1},
        {x: 0, y: 100, z: 500, duration: 4.9, ease: 'power1.in'}
    ],
    repeat: -1
});

count++; // Tăng bộ đếm
    if (count >= maxCount) {
        clearInterval(interval); // Dừng setInterval sau khi gọi đủ số lần
        count = 0;
    }

}

const interval = setInterval(summonFireBall, 400);

function sceneAnimate() {
    requestAnimationFrame(sceneAnimate);
    orbitControls.update();
    renderer.render(scene, camera);
    
    // Tính tọa độ x và z của smokeALL và camera
    const headDeg = headBlaze.rotation.y;
    const smokeX = smokeALL.position.x;
    const smokeZ = smokeALL.position.z;
    const cameraX = camera.position.x;
    const cameraZ = camera.position.z;

    // Tính góc quay cần thiết để smokeALL hướng về phía camera
    const angle = Math.atan2(cameraZ - smokeZ, cameraX - smokeX);
    // Cập nhật góc quay của smokeALL
    smokeALL.rotation.y = -angle - Math.PI / 2 - headDeg;
}
sceneAnimate();

