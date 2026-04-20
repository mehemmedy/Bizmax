// ! Testimonial
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

// ! Team members

let teammembers = document.getElementById('teammembers')

const tm = [
    {
        name: 'Ralph Edwards',
        job: 'Web designer',
        image: 'img/team_member_1.jpeg'
    },
    {
        name: 'Wade Warren',
        job: 'Marketing Coordinator',
        image: 'img/team_member_2.jpeg'
    },
    {
        name: 'Jane Cooper',
        job: 'Creative Designer',
        image: 'img/team_member_3.jpeg'
    }
]

teammembers.innerHTML = tm.map(item =>
    `
                    <div class="w-full max-w-sm mx-auto group">
    <div class="relative overflow-hidden rounded-[30px] aspect-[3/4]">
        <img src="${item.image}"
            class="w-full h-full object-cover">
        <div
            class="absolute bottom-0 w-full bg-[#111] text-white text-center py-4 sm:py-6 transition-all duration-300 group-hover:opacity-0">
            <h3 class="text-lg sm:text-xl font-semibold">${item.name}</h3>
            <p class="text-xs sm:text-sm">${item.job}</p>
        </div>
        <div class="absolute bottom-0 w-full
                bg-orange-400 text-white text-center p-4 sm:p-6
                translate-y-full 
                group-hover:translate-y-0
                transition-all duration-500">
            <div class="flex justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-500 flex items-center justify-center cursor-pointer hover:bg-blue-500 duration-200">
                    <i class="fa-brands fa-facebook-f"></i>
                </div>
                <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-500 flex items-center justify-center cursor-pointer hover:bg-blue-400 duration-200">
                    <i class="fa-brands fa-twitter"></i>
                </div>
                <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-500 flex items-center justify-center cursor-pointer hover:bg-pink-400 duration-200">
                    <i class="fa-brands fa-dribbble"></i>
                </div>
            </div>
            <h3 class="text-lg sm:text-xl font-semibold">${item.name}</h3>
            <p class="text-xs sm:text-sm">${item.job}</p>
        </div>
    </div>
</div>
    `
).join('')


// ! Blogs

let blogs = document.getElementById('blogs')

const bdata = [
    {
        img:'img/post-details-1.jpeg',
        title:'What services does your business provide?'
    },
    {
        img:'img/post-details-2.jpg',
        title:'Introducing the latest tech features for you'
    },
    {
        img:'img/post-details-3.jpg',
        title:'The creative studio program coming soon'
    }
]

blogs.innerHTML = bdata.map(item => 
    `               <div class="max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
                        <img class="h-64 w-full object-cover overflow-hidden hover:opacity-50" src="${item.img}" alt="Business team" />
                        <div class="p-6">
                            <div class="mb-4 flex items-center space-x-6 text-sm text-gray-500">
                                <div class="flex items-center">
                                    <svg class="mr-2 h-4 w-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                                    </svg>
                                    <span>By admin</span>
                                </div>
                                <div class="flex items-center">
                                    <svg class="mr-2 h-4 w-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z">
                                        </path>
                                    </svg>
                                    <span>3 comments</span>
                                </div>
                            </div>
                            <h3 class="mb-3 text-xl font-bold text-gray-900 leading-tight hover:text-[#e9a132] duration-300 cursor-pointer">
                                ${item.title}
                            </h3>
                            <p class="mb-6 text-gray-600 leading-relaxed">
                                We provide a range of digital marketing solutions including website design.
                            </p>
                        </div>
                        <div
                            class="flex items-center justify-between border-t border-gray-100 bg-gray-50 px-6 py-4 transition-colors hover:bg-[#e9a132] cursor-pointer">
                            <span class="font-semibold text-gray-900">Read More</span>
                            <div class="rounded-full bg-orange-400 p-1 text-white">
                                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
`
).join('')