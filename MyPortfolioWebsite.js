document.addEventListener('DOMContentLoaded', function() {
        const twoButton = document.getElementById('twodButton');
        const threeButton = document.getElementById('threeButton');
        const smButton = document.getElementById('SMButton');
        const twoDiv = document.getElementById('twoddiv');
        const threeDiv = document.getElementById('threeddiv');
        const smDiv = document.getElementById('smdiv');

        twoButton.addEventListener('click', function() {
            if (twoDiv.style.display === 'none') {
                twoDiv.style.display = 'block';
                twoButton.style.backgroundColor = '#dfdfdf';
                threeButton.style.backgroundColor = 'white';
                smButton.style.backgroundColor = 'white';
                threeDiv.style.display = 'none'
                smDiv.style.display = 'none'
            } else {
                twoDiv.style.display = 'none'; // Optional: to toggle visibility
                twoButton.style.backgroundColor = 'white';
                threeButton.style.backgroundColor = 'white';
                smButton.style.backgroundColor = 'white';
            }
        });
    });

document.addEventListener('DOMContentLoaded', function() {
        const threeButton = document.getElementById('threeButton');
        const twoButton = document.getElementById('twodButton');
        const smButton = document.getElementById('SMButton');
        const threeDiv = document.getElementById('threeddiv');
        const twoDiv = document.getElementById('twoddiv');
        const smDiv = document.getElementById('smdiv');

        threeButton.addEventListener('click', function() {
            if (threeDiv.style.display === 'none') {
                threeDiv.style.display = 'block'; // Or 'inline-block', 'flex', etc.
                threeButton.style.backgroundColor = '#dfdfdf';
                twoButton.style.backgroundColor = 'white';
                smButton.style.backgroundColor = 'white';
                twoDiv.style.display = 'none'
                smDiv.style.display = 'none'
            } else {
                threeDiv.style.display = 'none'; // Optional: to toggle visibility
                threeButton.style.backgroundColor = 'white';
                twoButton.style.backgroundColor = 'white';
                smButton.style.backgroundColor = 'white';
            }
        });
    });

document.addEventListener('DOMContentLoaded', function() {
        const smButton = document.getElementById('SMButton');
        const threeButton = document.getElementById('threeButton');
        const twoButton = document.getElementById('twodButton');
        const smDiv = document.getElementById('smdiv');
        const twoDiv = document.getElementById('twoddiv');
        const threeDiv = document.getElementById('threeddiv');

        smButton.addEventListener('click', function() {
            if (smDiv.style.display === 'none') {
                smDiv.style.display = 'block'; // Or 'inline-block', 'flex', etc.
                smButton.style.backgroundColor = '#dfdfdf';
                threeButton.style.backgroundColor = 'white';
                twoButton.style.backgroundColor = 'white';
                threeDiv.style.display = 'none'
                twoDiv.style.display = 'none'
            } else {
                smDiv.style.display = 'none'; // Optional: to toggle visibility
                smButton.style.backgroundColor = 'white';
                threeButton.style.backgroundColor = 'white';
                twoButton.style.backgroundColor = 'white';
            }
        });
    });


document.addEventListener('DOMContentLoaded', function() {
        const charButton = document.getElementById('charrButton');
        const eniButton = document.getElementById('eniiButton');
        const charDiv = document.getElementById('charrdiv');
        const eniDiv = document.getElementById('eniidiv');

        charButton.addEventListener('click', function() {
            if (charDiv.style.display === 'none') {
                charDiv.style.display = 'block';
                charButton.style.backgroundColor = '#dfdfdf';
                eniButton.style.backgroundColor = 'white';
                eniDiv.style.display = 'none'
            } else {
                charDiv.style.display = 'none'; // Optional: to toggle visibility
                eniDiv.style.display = 'none';
                charButton.style.backgroundColor = 'white';
                eniButton.style.backgroundColor = 'white';
            }
        });
    });

document.addEventListener('DOMContentLoaded', function() {
        const charButton = document.getElementById('charrButton');
        const eniButton = document.getElementById('eniiButton');
        const charDiv = document.getElementById('charrdiv');
        const eniDiv = document.getElementById('eniidiv');

        eniButton.addEventListener('click', function() {
            if (eniDiv.style.display === 'none') {
                eniDiv.style.display = 'block';
                eniButton.style.backgroundColor = '#dfdfdf';
                charButton.style.backgroundColor = 'white';
                charDiv.style.display = 'none'
            } else {
                charDiv.style.display = 'none'; // Optional: to toggle visibility
                eniDiv.style.display = 'none';
                charButton.style.backgroundColor = 'white';
                eniButton.style.backgroundColor = 'white';
            }
        });
    });

document.addEventListener('DOMContentLoaded', function() {
        const livvButton = document.getElementById('livButton');
        const vfxxButton = document.getElementById('vfxButton');
        const livvDiv = document.getElementById('livdiv');
        const vfxxDiv = document.getElementById('vfxdiv');

        livvButton.addEventListener('click', function() {
            if (livvDiv.style.display === 'none') {
                livvDiv.style.display = 'block';
                livvButton.style.backgroundColor = '#dfdfdf';
                vfxxButton.style.backgroundColor = 'white';
                vfxxDiv.style.display = 'none'
            } else {
                livvDiv.style.display = 'none'; // Optional: to toggle visibility
                vfxxDiv.style.display = 'none';
                livvButton.style.backgroundColor = 'white';
                vfxxButton.style.backgroundColor = 'white';
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const livvButton = document.getElementById('livButton');
        const vfxxButton = document.getElementById('vfxButton');
        const livvDiv = document.getElementById('livdiv');
        const vfxxDiv = document.getElementById('vfxdiv');

        vfxxButton.addEventListener('click', function() {
            if (vfxxDiv.style.display === 'none') {
                vfxxDiv.style.display = 'block';
                vfxxButton.style.backgroundColor = '#dfdfdf';
                livvButton.style.backgroundColor = 'white';
                livvDiv.style.display = 'none'
            } else {
                vfxxDiv.style.display = 'none'; // Optional: to toggle visibility
                livvDiv.style.display = 'none';
                vfxxButton.style.backgroundColor = 'white';
                livvButton.style.backgroundColor = 'white';
            }
        });
    });