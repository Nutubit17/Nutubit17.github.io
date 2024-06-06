document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', () => {
        const postTitles = category.nextElementSibling;
        postTitles.style.display = postTitles.style.display === 'none' ? 'block' : 'none';
    });
});

document.getElementById('diary-search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    // Assuming you have a function fetchDiaries that fetches diary entries based on date range
    fetchDiaries(startDate, endDate).then(displayDiaries);
});

function displayDiaries(diaries) {
    const results = document.getElementById('search-results');
    results.innerHTML = '';
    diaries.forEach(diary => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="diary${diary.id}.html">${diary.title}</a>`;
        results.appendChild(li);
    });
}

// Mock fetchDiaries function
function fetchDiaries(start, end) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {id: 1, title: 'Diary 1'},
                {id: 2, title: 'Diary 2'},
                {id: 3, title: 'Diary 3'}
            ]);
        }, 500);
    });
}
