document.addEventListener('DOMContentLoaded', function() {
    const wishBtn = document.getElementById('wishBtn');
    const container = document.querySelector('.container');
    const body = document.body;
    
    // 创建浮动的爱心
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.classList.add('floating-heart');
        
        // 随机位置
        const startX = Math.random() * window.innerWidth;
        heart.style.left = `${startX}px`;
        
        // 随机大小
        const size = Math.random() * 30 + 10;
        heart.style.fontSize = `${size}px`;
        
        // 随机颜色
        const colors = ['#ff6b6b', '#ff8e8e', '#ff5252', '#ff7b7b'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.color = color;
        
        // 随机动画时长
        const duration = Math.random() * 3 + 4;
        heart.style.animationDuration = `${duration}s`;
        
        document.body.appendChild(heart);
        
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
            }, i * 300);
        }
    }
    
    // 按钮点击事件
    wishBtn.addEventListener('click', function() {
        // 添加按钮点击效果
        this.textContent = '祝福已送达!';
        this.style.background = 'linear-gradient(to right, #4caf50, #8bc34a)';
        
        // 创建大量浮动爱心
        createMultipleHearts(30);
        
        // 显示祝福消息
        showWishMessage();
        
        // 3秒后恢复按钮
        setTimeout(() => {
            this.textContent = '再送一次祝福';
            this.style.background = 'linear-gradient(to right, #ff6b6b, #ff8e8e)';
        }, 3000);
    });
    
    // 显示祝福消息
    function showWishMessage() {
        // 创建祝福消息元素
        const wishMessage = document.createElement('div');
        wishMessage.innerHTML = `
            <div class="wish-popup">
                <h2>🎉 生日快乐! 🎉</h2>
                <p>愿你拥有美好的一年</p>
                <p>健康、快乐、成功!</p>
            </div>
        `;
        wishMessage.classList.add('wish-message');
        
        document.body.appendChild(wishMessage);
        
        // 5秒后自动消失
        setTimeout(() => {
            wishMessage.style.opacity = '0';
            setTimeout(() => {
                wishMessage.remove();
            }, 1000);
        }, 5000);
    }
    
    // 页面加载时创建一些初始爱心
    createMultipleHearts(15);
    
    // 定期创建浮动爱心
    setInterval(() => {
        createFloatingHeart();
    }, 1000);
});