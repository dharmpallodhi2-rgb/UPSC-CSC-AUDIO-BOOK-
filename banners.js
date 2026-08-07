const BANNERS_DATA = [
    {
        id: 1,
        imageUrl: "file_00000000ab1c81fa8bbaaded2eaed436.png", 
        link: "#",
        isActive: true
    },
    {
        id: 2,
        imageUrl: "file_0000000003408211ae12fa2946dcbd7d.png", 
        link: "#",
        isActive: true
    },
    {
        id: 3,
        imageUrl: "file_0000000007308211a8d6b66edbf7d2bd.png", 
        link: "#",
        isActive: true
    },
    {
        id: 4,
        imageUrl: "file_00000000347c82118fa0440f3338c36a.png", 
        link: "#",
        isActive: true
    },
    {
        id: 5,
        imageUrl: "file_00000000199c82119f3dd010a3f72d21.png", 
        link: "#",
        isActive: true
    }
];

(function() {
  function inject() {
    if (document.getElementById('banner-track')) {
      if (document.getElementById('banners-16-9-style')) return;
      const css = `
        #banner-track > div { aspect-ratio: 16/9; }
        #banner-track img { width:100%; height:100%; object-fit:cover; display:block; }
        #banner-track { align-items: stretch; }
      `;
      const style = document.createElement('style');
      style.id = 'banners-16-9-style';
      style.innerHTML = css;
      document.head.appendChild(style);
      return;
    }
    document.addEventListener('DOMContentLoaded', () => setTimeout(inject, 50));
    setTimeout(inject, 500);
  }
  inject();
})();
