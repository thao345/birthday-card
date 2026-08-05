// ===== Tùy chỉnh nhanh (đổi tên / lời chúc ở đây) =====
const CONFIG = {
  message: `Chúc mừng sinh nhật Vi ❤️

Vậy là chúng mình đã cùng nhau đi qua 8 tháng. Có thể chưa phải quãng thời gian quá dài, nhưng đủ để anh biết rằng gặp được Em là một điều rất may mắn.

Bước sang tuổi mới, anh không mong gì nhiều ngoài việc Em luôn khỏe mạnh, luôn giữ được nụ cười xinh trên môi, gặp thật nhiều may mắn trong cuộc sống và công việc. Mong mọi điều Em mong ước đều sẽ dần trở thành hiện thực.

Anh muốn sau này, Người cùng em đón Xuân Hạ Thu Đông vẫn là Anh. Chúng mình sẽ cùng nhau đi nhiều nơi hơn, tạo thêm thật nhiều kỷ niệm đẹp và cùng nắm tay vượt qua những điều không dễ dàng trong cuộc sống.

Cảm ơn em đã xuất hiện và trở thành người đặc biệt trong cuộc đời anh.

Chúc mừng sinh nhật Em! ❤️🎂`,
};

document.getElementById('messageText').textContent = CONFIG.message;

// ===== Mở / đóng thiệp =====
const card = document.getElementById('card');
const hint = document.getElementById('hint');
let opened = false;

card.addEventListener('click', () => {
  opened = !opened;
  card.classList.toggle('opened', opened);
  hint.style.opacity = opened ? '0' : '1';
  if (opened) launchBurst();
});

// ===== Hiệu ứng tim/confetti bay lên khi mở thiệp =====
const burstLayer = document.getElementById('burstLayer');
const EMOJIS = ['💖','💕','✨','🎉','💗','🌸'];

function launchBurst(){
  const count = 26;
  for (let i = 0; i < count; i++){
    setTimeout(() => spawnParticle(), i * 45);
  }
}

function spawnParticle(){
  const el = document.createElement('span');
  el.className = 'burst-item';
  el.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
  el.style.left = Math.random() * 100 + 'vw';
  el.style.fontSize = (14 + Math.random() * 18) + 'px';
  el.style.animationDuration = (2.4 + Math.random() * 1.6) + 's';
  burstLayer.appendChild(el);
  setTimeout(() => el.remove(), 4200);
}
