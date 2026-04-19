const base_url =
  "https://69b94968e69653ffe6a73340.mockapi.io/mehemmed/testimonial";
function elaveET() {
  let title = document.getElementById("title");
  let about = document.getElementById("about");
  let image = document.getElementById("image");
  const titleValue = title.value;
  const aboutValue = about.value;
  const imageValue = image.value;
  const data = {
    title: titleValue,
    job: aboutValue,
    image: imageValue,
  };
  fetch(`${base_url}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then(() => {
    title.value = "";
    about.value = "";
    image.value = "";
    serviceGetir();
  });
}

const serlist = document.getElementById("serlist");

function serviceGetir() {
  fetch(`${base_url}`)
    .then((res) => res.json())
    .then((data) => {
      serlist.innerHTML = data
        .map(
          (item) => `
        <div class="bg-[#0b1739] border border-[#1a2d5a] rounded-2xl px-5 py-4 shadow-md hover:shadow-blue-900/20 transition flex items-center justify-between gap-4">
    
    <div class="flex items-center gap-4 min-w-0">
      
      <img 
        src="${item.image}" 
        alt="${item.title}"
        class="w-14 h-14 rounded-full object-cover border-2 border-[#1a2d5a]"
      >

      <div class="min-w-0">
        <h3 class="text-white text-base font-semibold truncate">
          ${item.title}
        </h3>

        <p class="text-gray-400 text-sm truncate">
          ${item.job}
        </p>
      </div>
    </div>

    <div class="flex items-center gap-2 shrink-0">
      <button onclick="serredakte(${item.id})"
        class="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-medium hover:bg-blue-500 transition">
        Redakte et
      </button>

      <button onclick="sersil(${item.id})"
        class="px-3 py-1.5 rounded-lg bg-red-600/90 text-white text-xs font-medium hover:bg-red-500 transition">
        Sil
      </button>
    </div>

  </div>
      `,
        )
        .join("");
    });
}

function sersil(id) {
  fetch(`${base_url}/${id}`, {
    method: "DELETE",
  }).then(() => {
    serviceGetir();
  });
}

serviceGetir();

let x = 0;

const serupdate1 = document.getElementById("serupdate1");
const serelave1 = document.getElementById("serelave1");

function serredakte(id) {
  let title = document.getElementById("title");
  let about = document.getElementById("about");
  let image = document.getElementById("image");

  serModal();

  fetch(`${base_url}/${id}`)
    .then((res) => res.json())
    .then((data) => {
      title.value = data.title;
      about.value = data.job;
      image.value = data.image;
      x = id;

      serupdate1.classList.remove("hidden");
      serelave1.classList.add("hidden");
    });
}

function serupdate() {
  let title = document.getElementById("title");
  let about = document.getElementById("about");
  let image = document.getElementById("image");

  const data = {
    title: title.value,
    job: about.value,
    image: image.value,
  };

  fetch(`${base_url}/${x}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then(() => {
      console.log("Yeniləndi");
      serviceGetir();

      title.value = "";
      about.value = "";
      image.value = "";
      x = 0;
    });
}

function serModal() {
  sermodal.classList.toggle("hidden");
  let title = document.getElementById("title");
  let about = document.getElementById("about");
  let image = document.getElementById("image");

  title.value = "";
  image.value = "";
  about.value = "";

  serupdate1.classList.add("hidden");
  serelave1.classList.remove("hidden");
}
