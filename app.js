window.addEventListener('scroll', function () {
  let scrollTopBtn = document.getElementById('scrollTopBtn');
  if (window.scrollY > 100) {
    // 스크롤이 100px 이상 되면 보이기
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

// const activeModalButton = document.querySelector('sub-form-btn');
// const modal = document.querySelector('dialog');

// activeModalButton.addEventListener('click', (e) => {
//   modal.showModal();
// });

// modal.addEventListener('click', (e) => {
//   if (e.target === e.currentTarget) modal.close();
// });
