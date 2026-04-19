let cards = document.getElementById('cards')
fetch('https://69b94968e69653ffe6a73340.mockapi.io/mehemmed/testimonial')
    .then(res => res.json())
    .then(data => {
        cards.innerHTML = data.map(item =>
            `
                    <div class="tcard mx-auto">
                        <div class="bg-white p-4 shadow-2xs rounded-2xl flex flex-col border gap-3">
                            <div class="w-16 h-16 rounded-full border overflow-hidden">
                                <img src="${item.image}" class="" alt="">
                            </div>
                            <div class="text-[#e9a132] flex">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p class="text-[#666] text-[16px] max-w-xs">I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone</p>
                            <div>
                                <h3 class="text-[18px] font-semibold">${item.title}</h3>
                                <p class="text-[16px] text-[#666]">${item.job}</p>
                            </div>
                        </div>
                    </div>
        `
        ).join('')
    })