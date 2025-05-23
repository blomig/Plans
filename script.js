// Partie A : Déclarations et fonction drawPlans()
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const OVERFLOW_FACTOR = 2;

function drawPlans() {
    const D1 = parseFloat(document.getElementById('d1').value);
    const E1 = parseFloat(document.getElementById('e1').value);
    const D2 = parseFloat(document.getElementById('d2').value);
    const E2 = parseFloat(document.getElementById('e2').value);
    const D3 = parseFloat(document.getElementById painless').value);
    const E3 = parseFloat(document.getElementById('e3').value);
    const angle2 = parseFloat(document.getElementById('angle2').value) * Math.PI / 180;
    const angle3 = parseFloat(document.getElementById('angle3').value) * Math.PI / 180;
    const alpha1 = parseFloat(document.getElementById('alpha1').value);
    const alpha2 = parseFloat(document.getElementById('alpha2').value);
    const alpha3 = parseFloat(document.getElementById('alpha3').value);
    const bgColor = document.getElementById('bgColor').value;
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const color3 = document.getElementById('color3').value;

    const tempCanvas1 = document.createElement('canvas');
    tempCanvas1.width = 1000 * OVERFLOW_FACTOR;
    tempCanvas1.height = 1000 * OVERFLOW_FACTOR;
    const tempCtx1 = tempCanvas1.getContext('2d');

    const tempCanvas2 = document.createElement('canvas');
    tempCanvas2.width = 1000 * OVERFLOW_FACTOR;
    tempCanvas2.height = 1000 * OVERFLOW_FACTOR;
    const tempCtx2 = tempCanvas2.getContext('2d');

    const tempCanvas3 = document.createElement('canvas');
    tempCanvas3.width = 1000 * OVERFLOW_FACTOR;
    tempCanvas3.height = 1000 * OVERFLOW_FACTOR;
    const tempCtx3 = tempCanvas3.getContext('2d');

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, 1000, 1000);

    tempCtx1.globalAlpha = alpha1;
    tempCtx1.fillStyle = color1;
    tempCtx1.fillRect(0, 0, tempCanvas1.width, tempCanvas1.height);
    punchHoles(tempCtx1, D1, E1, 0, tempCanvas1.width, tempCanvas1.height);
    tempCtx1.globalAlpha = 1;

    tempCtx2.globalAlpha = alpha2;
    tempCtx2.fillStyle = color2;
    tempCtx2.fillRect(0, 0, tempCanvas2.width, tempCanvas2.height);
    punchHoles(tempCtx2, D2, E2, angle2, tempCanvas2.width, tempCanvas2.height);
    tempCtx2.globalAlpha = 1;

    tempCtx3.globalAlpha = alpha3;
    tempCtx3.fillStyle = color3;
    tempCtx3.fillRect(0, 0, tempCanvas3.width, tempCanvas3.height);
    punchHoles(tempCtx3, D3, E3, angle3, tempCanvas3.width, tempCanvas3.height);
    tempCtx3.globalAlpha = 1;

    const offsetX = (tempCanvas1.width - 1000) / 2;
    const offsetY = (tempCanvas1.height - 1000) / 2;
    ctx.drawImage(tempCanvas1, offsetX, offsetY, 1000, 1000, 0, 0, 1000, 1000);
    ctx.drawImage(tempCanvas2, offsetX, offsetY, 1000, 1000, 0, 0, 1000, 1000);
    ctx.drawImage(tempCanvas3, offsetX, offsetY, 1000, 1000, 0, 0, 1000, 1000);
}

// Partie B : Fonction punchHoles()
function punchHoles(context, diameter, spacing, rotationAngle, canvasWidth, canvasHeight) {
    const height = spacing * Math.sin(Math.PI / 3);
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    context.globalCompositeOperation = 'destination-out';
    context.fillStyle = 'black';
    const maxExtent = Math.max(canvasWidth, canvasHeight) / spacing + 10;
    for (let i = -maxExtent; i <= maxExtent; i++) {
        for (let j = -maxExtent; j <= maxExtent; j++) {
            let x = i * spacing + (j % 2) * spacing / 2;
            let y = j * height;
            const rotatedX = centerX + (x * Math.cos(rotationAngle) - y * Math.sin(rotationAngle));
            const rotatedY = centerY + (x * Math.sin(rotationAngle) + y * Math.cos(rotationAngle));
            context.beginPath();
            context.arc(rotatedX, rotatedY, diameter / 2, 0, 2 * Math.PI);
            context.fill();
        }
    }
    context.globalCompositeOperation = 'source-over';
}

// Partie C : Fonction randomize()
function randomize() {
    const minD1 = parseFloat(document.getElementById('minD1').value);
    const maxD1 = parseFloat(document.getElementById('maxD1').value);
    const minE1 = parseFloat(document.getElementById('minE1').value);
    const maxE1 = parseFloat(document.getElementById('maxE1').value);
    const minD2 = parseFloat(document.getElementById('minD2').value);
    const maxD2 = parseFloat(document.getElementById('maxD2').value);
    const minE2 = parseFloat(document.getElementById('minE2').value);
    const maxE2 = parseFloat(document.getElementById('maxE2').value);
    const minD3 = parseFloat(document.getElementById('minD3').value);
    const maxD3 = parseFloat(document.getElementById('maxD3').value);
    const minE3 = parseFloat(document.getElementById('minE3').value);
    const maxE3 = parseFloat(document.getElementById('maxE3').value);
    const minAlpha = parseFloat(document.getElementById('minAlpha').value);
    const maxAlpha = parseFloat(document.getElementById('maxAlpha').value);

    const D1 = Math.floor(Math.random() * (maxD1 - minD1 + 1)) + minD1;
    const E1 = Math.floor(Math.random() * (maxE1 - (D1 + 1) + 1)) + (D1 + 1);
    document.getElementById('d1').value = D1;
    document.getElementById('e1').value = E1;

    const D2 = Math.floor(Math.random() * (maxD2 - minD2 + 1)) + minD2;
    const E2 = Math.floor(Math.random() * (maxE2 - (D2 + 1) + 1)) + (D2 + 1);
    document.getElementById('d2').value = D2;
    document.getElementById('e2').value = E2;

    const D3 = Math.floor(Math.random() * (maxD3 - minD3 + 1)) + minD3;
    const E3 = Math.floor(Math.random() * (maxE3 - (D3 + 1) + 1)) + (D3 + 1);
    document.getElementById('d3').value = D3;
    document.getElementById('e3').value = E3;

    const angle2 = Math.floor(Math.random() * 361);
    document.getElementById('angle2').value = angle2;
    const angle3 = Math.floor(Math.random() * 361);
    document.getElementById('angle3').value = angle3;

    const alpha1 = parseFloat((Math.random() * (maxAlpha - minAlpha) + minAlpha).toFixed(1));
    const alpha2 = parseFloat((Math.random() * (maxAlpha - minAlpha) + minAlpha).toFixed(1));
    const alpha3 = parseFloat((Math.random() * (maxAlpha - minAlpha) + minAlpha).toFixed(1));
    document.getElementById('alpha1').value = alpha1;
    document.getElementById('alpha2').value = alpha2;
    document.getElementById('alpha3').value = alpha3;

    document.getElementById('bgColor').value = '#FFFFFF';

    const color1 = '#' + Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0');
    const color2 = '#' + Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0');
    const color3 = '#' + Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0');
    document.getElementById('color1').value = color1;
    document.getElementById('color2').value = color2;
    document.getElementById('color3').value = color3;

    updateParamString(D1, E1, color1, D2, E2, color2, angle2, D3, E3, color3, angle3, alpha1, alpha2, alpha3);
    drawPlans();
}

// Partie D : Fonctions updateParamString(), copyToClipboard(), et appel initial
function updateParamString(D1, E1, color1, D2, E2, color2, angle2, D3, E3, color3, angle3, alpha1, alpha2, alpha3) {
    const paramString = `${D1}-${E1}-${color1}-${D2}-${E2}-${color2}-${angle2}-${D3}-${E3}-${color3}-${angle3}-${alpha1}-${alpha2}-${alpha3}`;
    document.getElementById('paramValues').textContent = paramString;
}

function copyToClipboard() {
    const paramString = document.getElementById('paramValues').textContent;
    navigator.clipboard.writeText(paramString).then(() => {
        alert('Paramètres copiés dans le presse-papiers !');
    }).catch(err => {
        console.error('Erreur lors de la copie : ', err);
    });
}

// Dessine une première fois au chargement
drawPlans();
