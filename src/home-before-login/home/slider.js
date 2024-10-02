document.addEventListener("DOMContentLoaded", function() {
  const slidesContainer = document.getElementById('slides-container');

  const data = [
    {
      id: 1,
      img: "../../assets/img/Logo_AHM.png",
      namaPerusahaan: "test1",
      jumlahPekerjaan: 10,
    },
    {
      id: 2,
      img: '../../assets/img/Logo_AHM.png',
      namaPerusahaan: "test2",
      jumlahPekerjaan: 10,
    },
    {
      id: 3,
      img: '../../assets/img/Logo_AHM.png',
      namaPerusahaan: "test3",
      jumlahPekerjaan: 10,
    },
    {
      id: 4,
      img: '../../assets/img/Logo_AHM.png',
      namaPerusahaan: "test4",
      jumlahPekerjaan: 10,
    },
    {
      id: 5,
      img: '../../assets/img/Logo_AHM.png',
      namaPerusahaan: "test5",
      jumlahPekerjaan: 10,
    },
    {
      id: 6,
      img: '../../assets/img/Logo_AHM.png',
      namaPerusahaan: "test6",
      jumlahPekerjaan: 10,
    },
    {
      id: 7,
      img: '../../assets/img/Logo_AHM.png',
      namaPerusahaan: "test7",
      jumlahPekerjaan: 10,
    },
    {
      id: 8,
      img: '../../assets/img/Logo_AHM.png',
      namaPerusahaan: "test8",
      jumlahPekerjaan: 10,
    },
    {
      id: 9,
      img: '../../assets/img/Logo_AHM.png',
      namaPerusahaan: "test9",
      jumlahPekerjaan: 10,
    },
    {
      id: 10,
      img: '../../assets/img/Logo_AHM.png',
      namaPerusahaan: "test10",
      jumlahPekerjaan: 10,
    },
  ];

  // Fungsi untuk membuat slide
  function createSlide(company) {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    slide.style.border = '2px solid black'; 
    slide.style.width = '294px'; 

    const img = document.createElement('img');
    img.src = company.img;
    img.alt = company.namaPerusahaan;

    const companyInfo = document.createElement('div');
    companyInfo.classList.add('company-info');

    const companyName = document.createElement('h2');
    companyName.textContent = company.namaPerusahaan;

    const jobCount = document.createElement('p');
    jobCount.textContent = `Jumlah Pekerjaan: ${company.jumlahPekerjaan}`;

    companyInfo.appendChild(companyName);
    companyInfo.appendChild(jobCount);
    slide.appendChild(img);
    slide.appendChild(companyInfo);

    return slide;
  }

  data.forEach((company) => {
    const slide = createSlide(company);
    slidesContainer.appendChild(slide);
  });

  let currentIndex = 0;
  const slideWidth = 294; 
  const totalSlides = data.length; 

  const moveSlides = () => {
    currentIndex++;
    if (currentIndex >= totalSlides) {
      currentIndex = 0; 
    }
    slidesContainer.style.transition = 'transform .5s ease-out'; 
    slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  };

  setInterval(moveSlides, 1000); 
});
