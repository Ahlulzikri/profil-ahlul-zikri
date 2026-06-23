// Animasi progress bar: dipastikan semua fill lebar sesuai target
document.querySelectorAll('.progress-fill').forEach(fill => {
    const targetWidth = getComputedStyle(fill).getPropertyValue('--target').trim();
    if(targetWidth) {
        fill.style.width = targetWidth;
    } else {
        // fallback jika tidak ada style
        fill.style.width = '70%';
    }
});

// Membuat floating dots background animasi
function createFloatingDots() {
    const container = document.getElementById('bgDots');
    const dotsCount = 28;
    for(let i = 0; i < dotsCount; i++) {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        let size = Math.random() * 50 + 15;
        dot.style.width = size + 'px';
        dot.style.height = size + 'px';
        dot.style.left = Math.random() * 100 + '%';
        dot.style.top = Math.random() * 100 + '%';
        dot.style.animationDuration = 12 + Math.random() * 15 + 's';
        dot.style.animationDelay = Math.random() * 5 + 's';
        dot.style.opacity = Math.random() * 0.4 + 0.1;
        container.appendChild(dot);
    }
}
createFloatingDots();

// live clock animasi (waktu lokal realtime)
function updateClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2,'0');
    let minutes = now.getMinutes().toString().padStart(2,'0');
    let second = now.getSeconds().toString().padStart(2,'0');
    const clockElement = document.getElementById('liveClock');
    if(clockElement) clockElement.innerText = `${hours}:${minutes}:${second}`;
}
updateClock();
setInterval(updateClock, 1000);

// tombol "Hubungi Saya" munculkan alert interaktif dengan animasi notifikasi
const btnContact = document.getElementById('moreInfoBtn');
if(btnContact) {
    btnContact.addEventListener('click', () => {
        // membuat notifikasi custom sederhana dengan animasi
        const notification = document.createElement('div');
        notification.innerText = '📩 Hubungi: ahlul.ahlul@creative.dev atau 📞 +62 85372735071';
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.left = '50%';
        notification.style.transform = 'translateX(-50%)';
        notification.style.backgroundColor = '#1f2937';
        notification.style.color = '#fff';
        notification.style.padding = '12px 24px';
        notification.style.borderRadius = '60px';
        notification.style.fontWeight = '500';
        notification.style.fontSize = '0.9rem';
        notification.style.zIndex = '999';
        notification.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        notification.style.backdropFilter = 'blur(8px)';
        notification.style.animation = 'fadeInUp 0.3s ease';
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transition = 'opacity 0.4s';
            setTimeout(() => notification.remove(), 500);
        }, 3500);
    });
}

// animasi hover pada skill bar tambahan sentuhan (refresh dinamis)
const cards = document.querySelectorAll('.stat-card, .section');
cards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        card.style.transform = 'translateY(-3px)';
        card.style.transition = '0.2s';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0px)';
    });
});

// random avatar ganti efek hover sedikit (interaksi)
const avatar = document.querySelector('.avatar-img');
if(avatar) {
    avatar.addEventListener('click', () => {
        avatar.style.animation = 'none';
        setTimeout(() => { avatar.style.animation = 'gentleFloat 3s infinite ease'; }, 10);
        const messages = ['✨ Hai! Senang berkenalan ✨', '💜 Keep Creative! 💜', '🚀 Portfolio Siap!'];
        const rand = messages[Math.floor(Math.random() * messages.length)];
        const tooltip = document.createElement('div');
        tooltip.innerText = rand;
        tooltip.style.position = 'absolute';
        tooltip.style.background = '#4f46e5';
        tooltip.style.color = 'white';
        tooltip.style.padding = '4px 12px';
        tooltip.style.borderRadius = '40px';
        tooltip.style.fontSize = '12px';
        tooltip.style.top = '-30px';
        tooltip.style.left = '50%';
        tooltip.style.transform = 'translateX(-50%)';
        tooltip.style.whiteSpace = 'nowrap';
        tooltip.style.fontWeight = 'bold';
        tooltip.style.animation = 'fadeInUp 0.2s';
        avatar.parentElement.style.position = 'relative';
        avatar.parentElement.appendChild(tooltip);
        setTimeout(() => tooltip.remove(), 1500);
    });
}

// Efek tambahan: animasi scroll atau greeting di console
console.log("Profil lengkap dengan animasi gerak siap!");
