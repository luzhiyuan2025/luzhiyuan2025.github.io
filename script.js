document.addEventListener('DOMContentLoaded', function() {
    const wishBtn = document.getElementById('wishBtn');
    const musicBtn = document.getElementById('musicBtn');
    const birthdaySong = document.getElementById('birthdaySong');
    const floatingHeartsContainer = document.getElementById('floatingHearts');
    const starsContainer = document.querySelector('.stars');
    
    // 创建星空背景
    function createStars() {
        const starCount = 200;
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            // 随机位置
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            star.style.left = `${x}%`;
            star.style.top = `${y}%`;
            
            // 随机大小
            const size = Math.random() * 3 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            
            // 随机动画时长
            const duration = Math.random() * 5 + 3;
            star.style.setProperty('--duration', `${duration}s`);
            
            // 随机延迟
            const delay = Math.random() * 5;
            star.style.animationDelay = `${delay}s`;
            
            starsContainer.appendChild(star);
        }
    }
    
    // 创建浮动的爱心
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.classList.add('floating-heart');
        
        // 随机位置
        const startX = Math.random() * window.innerWidth;
        heart.style.left = `${startX}px`;
        
        // 随机大小
        const size = Math.random() * 30 + 15;
        heart.style.fontSize = `${size}px`;
        
        // 随机颜色
        const colors = ['#ff6b6b', '#ff8e8e', '#ff5252', '#ff7b7b', '#ffb6c1', '#ffa0b0'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.color = color;
        
        // 随机动画时长
        const duration = Math.random() * 4 + 3;
        heart.style.animationDuration = `${duration}s`;
        
        // 随机旋转
        const rotation = Math.random() * 360;
        heart.style.transform = `rotate(${rotation}deg)`;
        
        floatingHeartsContainer.appendChild(heart);
        
        // 动画结束后移除元素
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
    
    // 创建多个浮动爱心
    function createMultipleHearts(count) {
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                createFloatingHeart();
            }, i * 200);
        }
    }
    
    // 按钮点击事件
    wishBtn.addEventListener('click', function() {
        // 添加按钮点击效果
        this.textContent = '💝 祝福已送达! 💝';
        this.classList.add('clicked');
        
        // 创建大量浮动爱心
        createMultipleHearts(50);
        
        // 显示祝福消息
        showWishMessage();
        
        // 3秒后恢复按钮
        setTimeout(() => {
            this.textContent = '💖 再送一次祝福 💖';
            this.classList.remove('clicked');
        }, 3000);
    });
    
    // 音乐控制按钮事件
    musicBtn.addEventListener('click', function() {
        if (birthdaySong.paused) {
            // 这里可以设置真实的生日歌曲链接
            // birthdaySong.src = '生日歌曲链接';
            // birthdaySong.play();
            this.textContent = '⏸️ 暂停生日歌';
            // 添加音乐播放提示
            showMusicMessage();
        } else {
            birthdaySong.pause();
            this.textContent = '▶️ 播放生日歌';
        }
    });
    
    // 显示祝福消息
    function showWishMessage() {
        // 创建祝福消息元素
        const wishMessage = document.createElement('div');
        wishMessage.innerHTML = `
            <div class="wish-popup">
                <h2>🌟 祝舒琪生日快乐! 🌟</h2>
                <p>✨ 愿你的人生如星辰般璀璨 ✨</p>
                <p>💖 愿你的笑容永远灿烂如花 💖</p>
                <p>🎂 愿你的每一天都充满惊喜 🎂</p>
                <p>🌈 愿你的未来比彩虹更绚烂 🌈</p>
            </div>
        `;
        wishMessage.classList.add('wish-message');
        
        document.body.appendChild(wishMessage);
        
        // 8秒后自动消失
        setTimeout(() => {
            wishMessage.style.opacity = '0';
            setTimeout(() => {
                wishMessage.remove();
            }, 1000);
        }, 8000);
    }
    
    // 显示音乐消息
    function showMusicMessage() {
        const musicMessage = document.createElement('div');
        musicMessage.innerHTML = '<div class="wish-popup"><h2>🎶 生日快乐歌已准备就绪! 🎶</h2><p>由于版权原因，这里使用系统默认提示音</p><p>请想象美妙的生日歌声...</p></div>';
        musicMessage.classList.add('wish-message');
        
        document.body.appendChild(musicMessage);
        
        // 5秒后自动消失
        setTimeout(() => {
            musicMessage.style.opacity = '0';
            setTimeout(() => {
                musicMessage.remove();
            }, 1000);
        }, 5000);
    }
    
    // 页面加载时创建一些初始爱心
    createMultipleHearts(20);
    
    // 创建星空背景
    createStars();
    
    // 定期创建浮动爱心
    setInterval(() => {
        createFloatingHeart();
    }, 800);
    
    // 添加特殊效果：每10秒创建一波爱心雨
    setInterval(() => {
        createMultipleHearts(15);
    }, 10000);
});