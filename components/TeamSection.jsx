import Link from "next/link";

const TeamSection = () => {


  const Team = [
    {
      id: 1,
      image: 'assets/img/team/team-1.jpg',
      name: 'Jacqueline Haynes',
      role: "Managing Director",
      bio: "Biography"
    },
    {
      id: 2,
      image: 'assets/img/team/team-2.jpg',
      name: 'Lyndon Mlinde',
      role: "Operations Lead",
      bio: "Biography"
    },
    {
      id: 3,
      image: 'assets/img/team/team-3.jpg',
      name: 'Pachawo Bisani',
      role: "Data Manager",
      bio: "Biography"
    },
    {
      id: 4,
      image: 'assets/img/team/team-4.jpg',
      name: 'Atusaghe Mushani',
      role: "Legal Manager",
      bio: "Biography"
    },
    {
      id: 5,
      image: 'assets/img/team/team-5.jpg',
      name: 'Clement Namanyah',
      role: "Partnerships Manager",
      bio: "Biography"
    },
  ]
  return (
    <section id="team" className="team section-bg">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>
            Our <strong>Team</strong>
          </h2>
        </div>

        <div className="row justify-content-center">
          {Team.map ((teams)=>(

<div key={teams.id} className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up">
              <div className="member-img text-center">
                <img
                  src={teams.image}
                  className="img-fluid"
                  alt={teams.name}
                />
              </div>
              <div className="member-info text-start mt-3">
                <h4 className="text-primary">{teams.name}</h4>
                <span className="fs-5">{teams.role}</span>
                <Link
                  href="#"
                  className="text-primary mt-2 d-block text-decoration-none fw-bold"
                >
                  {teams.bio}
                </Link>
              </div>
            </div>
          </div>
          ))}
          

        </div>
      </div>
    </section>
  );
};

export default TeamSection;
