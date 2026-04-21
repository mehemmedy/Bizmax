const base_url = "https://api142.nurlandev.click/api/services";
function elaveET() {
  let title = document.getElementById("title");
  let about = document.getElementById("about");
  // let image = document.getElementById("image");
  const titleValue = title.value;
  const aboutValue = about.value;
  // const imageValue = image.value;
  const data = {
    title: titleValue,
    description: aboutValue,
    // image: imageValue,
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
    // image.value = "";
    serviceGetir();
  });
}

const serlist = document.getElementById("serlist");

function serviceGetir() {
  fetch(`${base_url}`)
    .then((res) => res.json())
    .then((data) => {
      serlist.innerHTML = data.data
        .map(
          (item) => `
        <div class="bg-[#0b1739] border border-[#1a2d5a] rounded-3xl overflow-hidden shadow-lg hover:shadow-blue-900/20 transition-all duration-300">
          
          <div class="h-[220px] overflow-hidden">
            <img 
              src="https://api142.nurlandev.click/public/${item.image}" 
              alt="${item.title}"
              class="w-full h-full object-cover  transition-all duration-500"
            >
            
          </div>

          <div class="p-5">
            <div class="flex items-center justify-between gap-3 mb-3">
              <h3 class="text-white text-lg font-semibold line-clamp-1">
                ${item.title}
              </h3>
             
            </div>

            <p class="text-gray-400 text-sm leading-6 mb-4 line-clamp-3">
              ${item.description}
            </p>

            <div class="flex items-center justify-between pt-4 border-t border-[#1a2d5a]">
              <button onclick="serredakte(${item.id})" class="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition">
                Redakte et
              </button>

              <button onclick="sersil(${item.id})" class="px-4 py-2 rounded-xl bg-red-600/90 text-white text-sm font-medium hover:bg-red-500 transition">
                Sil
              </button>
            </div>
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
  serModal();
  fetch(`${base_url}`)
    .then((res) => res.json())
    .then((data) => {
      const item = data.data.find((item) => item.id == id);

      title.value = item.title;
      about.value = item.description;
      x = id;
      serupdate1.classList.remove("hidden");
      serelave1.classList.add("hidden");
    });
}

function serupdate() {
  let title = document.getElementById("title");
  let about = document.getElementById("about");

  const data = {
    title: title.value,
    description: about.value,
  };

  fetch(`${base_url}/${x}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then((data) => {
    console.log("Yeniləndi:");

    serviceGetir();
    title.value = "";
    about.value = "";
    serupdate1.classList.add("hidden");
    serelave1.classList.remove("hidden");
    x = 0;
  });
}

function serModal() {
  sermodal.classList.toggle("hidden");
  let title = document.getElementById("title");
  let about = document.getElementById("about");
  let image = document.getElementById("image");

  title.value = "";
  // image.value = "";
  about.value = "";

  serupdate1.classList.add("hidden");
  serelave1.classList.remove("hidden");
}
