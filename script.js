// A. Cookie Logic (Set on load)
document.cookie = "user=guest; max-age=86400; path=/";

// B. Search Functionality
const searchInput = document.getElementById("search");
if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const value = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            const carName = card.querySelector("h3").textContent.toLowerCase();
            card.style.display = carName.includes(value) ? "block" : "none";
        });
    });
}

// C. Registration Validation
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPass = document.getElementById("confirm-password").value;

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (password !== confirmPass) {
        alert("Passwords do not match!");
        return false;
    }

    // Set a "registered" cookie on success
    document.cookie = `user_name=${encodeURIComponent(name)}; max-age=86400; path=/`;
    document.cookie = "registered=true; max-age=86400; path=/";
    
    alert(`Welcome to the VW family, ${name}! Registration successful.`);
    
    // Redirect to home or models after registration
    window.location.href = "index.html"; 
    return false; // Prevent reload for demo
}

// Pagination State
let currentPage = 1;
const itemsPerPage = 10; // Shows 2 rows of 5 cards

// Search Logic for Products Page
const carSearchInput = document.getElementById('carSearch');
if (carSearchInput) {
    carSearchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = cars.filter(car => car.name.toLowerCase().includes(query));
        currentPage = 1; // Reset to first page on search
        renderGrid(filtered);
    });
}

function renderGrid(data) {
    const grid = document.getElementById('carGrid');
    if (!grid) return;
    
    grid.innerHTML = "";
    
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = data.slice(start, end);

    pageItems.forEach(car => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p class="price">${car.price}</p>
        `;
        card.onclick = () => openModal(car);
        grid.appendChild(card);
    });

    renderPagination(data.length);
}

function renderPagination(totalItems) {
    const nav = document.getElementById('pagination');
    if (!nav) return;

    const totalPages = Math.ceil(totalItems / itemsPerPage);
    nav.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.innerText = i;
        btn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        btn.onclick = () => {
            currentPage = i;
            renderGrid(cars);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        nav.appendChild(btn);
    }
}

// Modal Logic
const modal = document.getElementById('modalOverlay');
function openModal(car) {
    if (!modal) return;
    
    document.getElementById('modalImg').src = car.image;
    document.getElementById('modalTitle').innerText = car.name;
    document.getElementById('modalDesc').innerText = car.desc;
    document.getElementById('modalPrice').innerText = car.price;
    
    document.getElementById('waBtn').onclick = () => {
        const msg = encodeURIComponent(`Hello People's Market, I am interested in the ${car.name}.`);
        window.open(`https://wa.me/254794721461?text=${msg}`);
    };

    modal.style.display = 'flex';
}

const closeModalBtn = document.getElementById('closeModal');
if (closeModalBtn) {
    closeModalBtn.onclick = () => modal.style.display = 'none';
}

window.onclick = (e) => { 
    if (modal && e.target === modal) modal.style.display = 'none'; 
};

// D. Navbar Search Icon Logic
const navSearchTrigger = document.getElementById("navSearchTrigger");
if (navSearchTrigger) {
    navSearchTrigger.addEventListener("click", () => {
        const searchField = document.getElementById('carSearch');
        if (searchField) {
            searchField.scrollIntoView({ behavior: 'smooth', block: 'center' });
            searchField.focus();
        } else {
            window.location.href = "products.html";
        }
    });
}

// Initial Load execution
document.addEventListener('DOMContentLoaded', () => {
    if (typeof cars !== 'undefined') {
        renderGrid(cars);
    }
});