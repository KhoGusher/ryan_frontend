// import React from 'react';
// import Link from 'next/link';

// const ServicesForm = () => {
//   // const services = [
//   //   {
//   //     id: 1,
//   //     icon: 'bx bx-briefcase',
//   //     title: 'Management Services',
//   //     description:
//   //       'This involves recruitment services, director services, company incorporation services and general administration services.',
//   //   },
//   //   {
//   //     id: 2,
//   //     icon: 'bx bx-line-chart',
//   //     title: 'Venture Capital Financing',
//   //     description:
//   //       'This involves market research, deal sourcing, due diligence and portfolio management.',
//   //   },
//   //   {
//   //     id: 3,
//   //     icon: 'bx bx-credit-card',
//   //     title: 'Debt Financing',
//   //     description:
//   //       'This involves Project financing, order financing and cashflow planning and management.',
//   //   },
//   //   {
//   //     id: 4,
//   //     icon: 'bx bx-basket',
//   //     title: 'Private Equity Financing',
//   //     description:
//   //       'This involves provision of management support services, operations redesign, financial restructuring and strategic guidance.',
//   //   },
//   // ];

//   return (





//     // <section id="services" className="services section-bg">
//     //   <div className="container" data-aos="fade-up">
//     //     <h2 className="text-center py-3">
//     //       What <span style={{ color: 'steelblue' }}>We Do</span>
//     //     </h2>
//     //     <div className="row">
//     //       {services.map((service) => (
//     //         <div
//     //           key={service.id}
//     //           className="col-lg-3 col-md-6 d-flex align-items-stretch"
//     //           data-aos="zoom-in"
//     //           data-aos-delay={100 * service.id}
//     //         >
//     //           <div className="icon-box iconbox-blue">
//     //             <div className="icon">
//     //               <svg
//     //                 width="100"
//     //                 height="100"
//     //                 viewBox="0 0 600 600"
//     //                 xmlns="http://www.w3.org/2000/svg"
//     //               >
//     //                 <path
//     //                   stroke="none"
//     //                   strokeWidth="0"
//     //                   fill="#f5f5f5"
//     //                   d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
//     //                 ></path>
//     //               </svg>
//     //               <i className={service.icon}></i>
//     //             </div>
//     //             <h4>
//     //               <Link href="#" className='text-decoration-none'>{service.title}</Link>
//     //             </h4>
//     //             <p>{service.description}</p>
//     //           </div>
//     //         </div>
//     //       ))}
//     //     </div>
//     //   </div>
//     // </section>
//   );
// };

// export default ServicesForm;

import Image from "next/image";
export default function ServicesForm() {
  const services = [
    {
      title: "Management Services",
      image: "/assets/img/1.jpg",
    },
    {
      title: "Venture Capital Financing",
      image: "/assets/img/2.jpg",
    },
    {
      title: "Debt Financing",
      image: "/assets/img/1.jpg",
    },
    {
      title: "Private Equity Financing",
      image: "/assets/img/4.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="px-4 text-start">
        <h3 className="text-sm font-semibold uppercase text-gray-500">What We Do</h3>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">Delivering for Our Clients</h1>




        <div className="row justify-content-center mt-10 py-2">
          {services.map ((service)=>(

<div key={service.title} className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up">
              <div className="member-img text-start">
              <Image
                  src={service.image}
                  className="rounded-sm"
                  alt={service.title}
                  width={500}
                  height={500}
                />
              </div>
              <div className="member-info text-start mt-3">
                <h4 className="text-black">{service.title}</h4>

              </div>
            </div>
          </div>
          ))}
          

        </div>



      </div>
    </div>
  );
}
