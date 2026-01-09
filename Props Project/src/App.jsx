import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      company: "Google",
      days: "2",
      role: "Frontend Developer",
      level: "Junior",
      pay: "$60k - $80k",
      type: "Remote",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      company: "Microsoft",
      days: "5",
      role: "Backend Engineer",
      level: "Mid-level",
      pay: "$80k - $100k",
      type: "Hybrid",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      company: "Amazon",
      days: "1",
      role: "Full Stack Developer",
      level: "Senior",
      pay: "$100k - $130k",
      type: "OnSite",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
      company: "Meta",
      days: "3",
      role: "React Developer",
      level: "Mid-level",
      pay: "$85k - $110k",
      type: "Remote",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      company: "Netflix",
      days: "4",
      role: "UI Engineer",
      level: "Senior",
      pay: "$110k - $140k",
      type: "Hybrid",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      company: "Apple",
      days: "6",
      role: "iOS Developer",
      level: "Mid-level",
      pay: "$90k - $120k",
      type: "OnSite",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
      company: "Spotify",
      days: "2",
      role: "Frontend Engineer",
      level: "Junior",
      pay: "$70k - $90k",
      type: "Remote",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
      company: "Airbnb",
      days: "7",
      role: "Product Engineer",
      level: "Senior",
      pay: "$105k - $135k",
      type: "Hybrid",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.svg",
      company: "Uber",
      days: "1",
      role: "Platform Engineer",
      level: "Mid-level",
      pay: "$95k - $120k",
      type: "OnSite",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
      company: "LinkedIn",
      days: "3",
      role: "Frontend Architect",
      level: "Senior",
      pay: "$115k - $145k",
      type: "Remote",
    },
  ];


  return (
    <div className="Parent">
      {jobOpenings.map((job, index) => (
        <Card
          key={index}
          img={job.img}
          company={job.company}
          days={job.days}
          role={job.role}
          type={job.type}
          level={job.level}
          pay={job.pay}
        />
      ))}
    </div>
  )
}

export default App