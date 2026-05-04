// Live Clock (HH:MM:SS)
function updateLiveClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,'0');
    const minutes = now.getMinutes().toString().padStart(2,'0');
    const seconds = now.getSeconds().toString().padStart(2,'0');
    const clockEl = document.getElementById('liveClock');
    if(clockEl) clockEl.innerText = `${hours}:${minutes}:${seconds}`;
}
updateLiveClock();
setInterval(updateLiveClock, 1000);

// Progress Bars: pastikan CSS variable target digunakan dan jika gagal, set langsung
document.querySelectorAll('.progress-fill').forEach(bar => {
    const targetVal = getComputedStyle(bar).getPropertyValue('--target').trim();
    if(targetVal && targetVal !== '') {
        // sudah dihandle keyframes, tapi untuk fallback jika animation tidak jalan:
        const widthVal = targetVal;
        bar.style.setProperty('--target', widthVal);
        // untuk support lebih lama, biarkan keyframes bekerja
    } else {
        // ambil inline fallback
        let fallback = bar.getAttribute('style')?.match(/--target:\s*([0-9]+%)/);
        if(fallback && fallback[1]) bar.style.setProperty('--target', fallback[1]);
    }
});

// Toast message handler
const toastMsg = document.getElementById('toastMsg');
let toastTimer = null;
function showToast(message) {
    if(toastMsg) {
        toastMsg.innerText = message || "📧 zikriahlul28@gmail.com | 📞 +62 85372735071";
        toastMsg.style.opacity = '1';
        if(toastTimer) clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
            toastMsg.style.opacity = '0';
        }, 3200);
    } else {
        alert(message);
    }
}

// Tombol Hubungi Saya
const contactBtn = document.getElementById('moreInfoBtn');
if(contactBtn) {
    contactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showToast("✨ Halo! Hubungi saya via email: zikriahlul28@gmail.com atau telepon +62 85372735071 ✨");
    });
}

// Social media interaction (preview)
const socialBtns = document.querySelectorAll('.social-btn');
socialBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let platform = '';
        if(btn.querySelector('.fa-instagram')) platform = 'Instagram';
        else if(btn.querySelector('.fa-github')) platform = 'GitHub';
        else if(btn.querySelector('.fa-linkedin-in')) platform = 'LinkedIn';
        else if(btn.querySelector('.fa-twitter')) platform = 'Twitter';
        else if(btn.querySelector('.fa-dribbble')) platform = 'Dribbble';
        showToast(`💼 Terima kasih! Akun ${platform} sedang dikembangkan. Hubungi via email yaa.`);
    });
});

// Avatar fallback jika foto tidak tersedia (support foto 1.jpeg lokal atau fallback)
const avatarEl = document.getElementById('avatarImg');
if(avatarEl) {
    avatarEl.onerror = () => {
        avatarEl.src = 'https://ui-avatars.com/api/?background=0f172a&color=FBBF24&bold=true&size=120&name=Ahlul+Zikri';
    };
    // cek complete status
    if(!avatarEl.complete || avatarEl.naturalWidth === 0) {
        avatarEl.src = avatarEl.src; // trigger retry
    }
}

// inisiasi efek fade dinamis namun tetap rapi
const allSections = document.querySelectorAll('.section');
allSections.forEach((sec, idx) => {
    sec.style.opacity = '0';
    sec.style.transform = 'translateY(8px)';
    sec.style.transition = 'opacity 0.35s ease, transform 0.3s ease';
    setTimeout(() => {
        sec.style.opacity = '1';
        sec.style.transform = 'translateY(0)';
    }, idx * 60);
});

// hover halus untuk project links & tambahan perbaikan pada gambar unsplash statis
const projectLinks = document.querySelectorAll('.project-nexus');
projectLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transition = 'all 0.2s';
    });
});