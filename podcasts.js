const PODCAST_LIST = [
    { 
        id: 7, 
        category: "Ethics", 
        title: "एथिक्स केस स्टडी हल करने का तरीका", 
        desc: "यूपीएससी परीक्षा में एथिक्स केस स्टडी को सही तरीके से हल करने की संपू�[...]",
        plays: "New", 
        date: "06 Aug 2026", 
        episode: "Episode 07", 
        duration: "Full Audio", 
        image: "file_00000000fd7481faac51cd57a3070f5c.png", 
        audioUrl: "एथिक्स_केस_स्टडी_हल_करने_का_तरीका_compressed.m4a", 
        isPremium: true 
    },
    { id: 6, category: "Economy", title: "GDP का गणित और अर्थव्यवस्था की हकीकत", desc: "जीडीपी की गणना और अर��[...]",
    { id: 1, category: "Geography", title: "एल नीनो और ला नीना का खेल", desc: "एल नीनो और ला नीना का भारतीय मा[...]
    { id: 2, category: "Geography", title: "भारत का आकार, स्थिति, समय और पड़ोस", desc: "भारत का आकार, स्थिति, ��[...]
    { id: 3, category: "Geography", title: "पृथ्वी का इंजन: प्लेट विवर्तनिकी", desc: "प्लेट विवर्तनिकी (Plate Te[...]
    { id: 4, category: "Economy", title: "पैसे का सफ़र: बैंकिंग, RBI और डिजिटल रुपया", desc: "बैंकिंग प्रणाल��[...]
    { id: 5, category: "Polity", title: "भारतीय संविधान के छह मौलिक अधिकार", desc: "समानता, स्वतंत्रता, श�[...]",
];


// Auto-load quizzes.js and wire up the sidebar "UPSC Quiz" button so questions from quizzes.js show in the app
(function(){
  // Create and append script tag for quizzes.js (so index.html doesn't need to be edited)
  try {
    const s = document.createElement('script');
    s.src = 'quizzes.js';
    s.onload = function(){
      // Render function: reads QUIZ_DB and injects a simple quiz UI into #main-content
      window.renderQuiz = window.renderQuiz || function(){
        const mainEl = document.getElementById('main-content');
        if (!mainEl) return;
        if (typeof QUIZ_DB === 'undefined' || !QUIZ_DB) {
          mainEl.innerHTML = '<div class="max-w-7xl mx-auto p-6">Quiz data not loaded. Upload questions in quizzes.js or check the file path.</div>';
          return;
        }

        let html = `<div class="max-w-7xl mx-auto px-4 py-6"><h2 class="text-2xl font-bold mb-4">UPSC Quiz</h2>`;

        Object.keys(QUIZ_DB).forEach(cat => {
          html += `<h3 class="font-bold mt-4 mb-2 text-lg">${cat}</h3>`;
          const list = QUIZ_DB[cat];
          if (!Array.isArray(list) || list.length === 0) {
            html += `<div class="text-sm text-gray-500 mb-3">No questions in this category.</div>`;
            return;
          }

          list.forEach((qObj, idx) => {
            const langKey = Object.keys(qObj)[0];
            const qdata = qObj[langKey] || {};
            const qText = qdata.q || '';
            const options = qdata.options || [];

            html += `<div class="bg-white dark:bg-gray-800 p-4 rounded-xl mb-3 border">
                       <div class="font-medium">${idx+1}. ${qText}</div>
                       <ul class="mt-2 space-y-2">`;
            options.forEach((opt, i) => {
              html += `<li><button class="px-3 py-1 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 transition">${String.fromCharCode(65+i)}. ${opt}</button></li>`;
            });
            html += `</ul></div>`;
          });
        });

        html += `</div>`;
        mainEl.innerHTML = html;
      };

      // Attach click handler to the sidebar Quiz element (looks for the list-check icon and uses its container)
      const icon = document.querySelector('.fa-list-check');
      if (icon) {
        const container = icon.closest('div');
        if (container) {
          container.style.cursor = 'pointer';
          container.addEventListener('click', function(e){
            e.preventDefault();
            // Close drawer if open
            const overlay = document.getElementById('sidebar-overlay');
            const menu = document.getElementById('sidebar-menu');
            if (overlay) overlay.classList.add('opacity-0');
            if (menu) menu.classList.add('-translate-x-full');

            // Render the quiz content
            window.renderQuiz();
          });
        }
      }
    };
    document.head.appendChild(s);
  } catch (err) {
    console.error('Failed to auto-load quizzes.js', err);
  }
})();
