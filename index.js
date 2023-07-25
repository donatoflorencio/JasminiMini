const images = document.querySelectorAll('#slide img');
    let index = 0;

    function showImage(index) {
      images.forEach((image) => {
        image.classList.remove('active');
      });
      images[index].classList.add('active');
    }

    document.getElementById('prevButton').addEventListener('click', () => {
      index = (index - 1 + images.length) % images.length;
      showImage(index);
    });

    document.getElementById('nextButton').addEventListener('click', () => {
      index = (index + 1) % images.length;
      showImage(index);
    });