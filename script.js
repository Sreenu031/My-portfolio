
const educationData = [
    {
      title: "Btech in AI&DS",
      institute: "Velagapudi Ramakrishna Siddhartha Engineering College",
      marks: "8.6 CGPA",
      period: "2023 - 2026"
    },
    {
      title: "Diploma in Computer Science",
      institute: "Goverment Polytechnical College,Srikakulam",
      marks: "90%",
      period: "2020 - 2023"
    },
    {
      title: "10th Standard",
      institute: "ZPHS, Giduthur",
      marks: "100%",
      period: "2020"
    }
  ];

  // Function to create qualification item
  function createQualificationItem(data, index) {
    const isEven = index % 2 === 0;
    return `
      <div class="qualification__data">
        ${isEven ? `
          <div class="qualification__info">
            <h3 class="qualification__title-role">${data.title}</h3>
            <p class="qualification__subtitle-institute">${data.institute}</p>
            <p class="qualification__subtitle-institute">Score:${data.marks}</p>
            <div class="qualification__calendar">
              ${data.period}
            </div>
          </div>
          <div>
            <span class="qualification__rounder"></span>
          </div>
          <div></div>
        ` : `
          <div></div>
          <div>
            <span class="qualification__rounder"></span>
          </div>
          <div class="qualification__info">
            <h3 class="qualification__title-role">${data.title}</h3>
            <p class="qualification__subtitle-institute">${data.institute}</p>
             <p class="qualification__subtitle-institute">Score:${data.marks}</p>
            <div class="qualification__calendar">
              ${data.period}
            </div>
          </div>
        `}
      </div>
    `;
  }

  // Function to render education timeline
  function renderEducationTimeline() {
    const educationContent = document.querySelector('#education');
    educationContent.innerHTML = educationData
      .map((item, index) => createQualificationItem(item, index))
      .join('');
  }

  // Initial render
  renderEducationTimeline();

  // Tab switching functionality
  const tabs = document.querySelectorAll('.qualification__button');
  const contents = document.querySelectorAll('.qualification__content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.target);
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      target.classList.add('active');
    });
  });

  // Function to add new education
  function addEducation(title, institute, period) {
    educationData.push({ title, institute, period });
    renderEducationTimeline();
  }