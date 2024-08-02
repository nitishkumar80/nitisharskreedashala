// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Fade } from 'react-reveal';
// import LottieAnimation from '../LottieAnimation/LottieAnimation';
// import gymAnimation from '../LottieAnimation/jim.json';
// import yogaAnimation from '../LottieAnimation/yoga.json';
// import badmintonAnimation from '../LottieAnimation/baisic.json';
// import swimmingAnimation from '../LottieAnimation/baisic.json';
// import cricketAnimation from '../LottieAnimation/baisic.json';
// import './CSS/Membership.css';

// const membershipPlans = [
//   {
//     id: 1,
//     title: "Basic",
//     description: "A fast-paced racket sport that enhances agility, reflexes, and cardiovascular health.",
//     animation: badmintonAnimation,
//   },
//   {
//     id: 2,
//     title: "Premium",
//     description: "A full-body workout that improves endurance, strength, and flexibility, offering both recreational and competitive benefits.",
//     animation: swimmingAnimation,
//   },
//   {
//     id: 3,
//     title: "Elite",
//     description: "A team sport involving batting, bowling, and fielding, enhancing strategic thinking, coordination, and physical fitness.",
//     animation: cricketAnimation,
//   }
 
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0 },
// };

// const Membership = () => {
//   return (
//     <div className="membership-container">
//       <Fade top>
//         <h1 className="membership-title">Membership Plans</h1>
//       </Fade>
//       <div className="membership-cards">
//         {membershipPlans.map((plan) => (
//           <motion.div
//             key={plan.id}
//             className="membership-card"
//             initial="hidden"
//             animate="visible"
//             variants={cardVariants}
//             transition={{ duration: 0.5, delay: plan.id * 0.2 }}
//           >
//             <Link to={`/member/${plan.id}`} className="membership-card-link">
//               <div className="membership-card-content">
//                 <div className="animation-container">
//                   <LottieAnimation animationData={plan.animation} size={200} />
//                 </div>
//                 <h2 className="membership-card-title">{plan.title}</h2>
//                 <p className="membership-card-description">{plan.description}</p>
//               </div>
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Membership;



import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Fade } from 'react-reveal';
import LottieAnimation from '../LottieAnimation/LottieAnimation';
import gymAnimation from '../LottieAnimation/jim.json';
import yogaAnimation from '../LottieAnimation/yoga.json';
import badmintonAnimation from '../LottieAnimation/baisic.json';
import swimmingAnimation from '../LottieAnimation/running.json';
import cricketAnimation from '../LottieAnimation/Weightlifting.json';
import './CSS/Membership.css';

const membershipPlans = [
  {
    id: 1,
    title: "Basic",
    description: "A fast-paced racket sport that enhances agility, reflexes, and cardiovascular health.",
    price: "$50",
    durations: ["3 months", "6 months", "12 months"],
    animation: badmintonAnimation,
    quote: "Master the basics and elevate your game to the next level!",
  },
  {
    id: 2,
    title: "Premium",
    description: "A full-body workout that improves endurance, strength, and flexibility, offering both recreational and competitive benefits.",
    price: "$100",
    durations: ["3 months", "6 months", "12 months"],
    animation: swimmingAnimation,
    quote: "Push your limits and achieve greatness with every stroke!",
  },
  {
    id: 3,
    title: "Elite",
    description: "A team sport involving batting, bowling, and fielding, enhancing strategic thinking, coordination, and physical fitness.",
    price: "$150",
    durations: ["3 months", "6 months", "12 months"],
    animation: cricketAnimation,
    quote: "Lead your team to victory and conquer the field!",
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Membership = () => {
  return (
    <div className="membership-container">
      <Fade top>
        <h1 className="membership-title">Membership Plans</h1>
      </Fade>
      <div className="membership-cards">
        {membershipPlans.map((plan) => (
          <motion.div
            key={plan.id}
            className="membership-card"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: plan.id * 0.2 }}
          >
            <Link to={`/member/${plan.id}`} className="membership-card-link">
              <div className="membership-card-content">
                <div className="animation-container">
                  <LottieAnimation animationData={plan.animation} size={200} />
                </div>
                <h2 className="membership-card-title">{plan.title}</h2>
                <p className="membership-card-description">{plan.description}</p>
                <p className="membership-card-price">{plan.price}</p>
                <ul className="membership-card-durations">
                  {plan.durations.map((duration, index) => (
                    <li key={index}>{duration}</li>
                  ))}
                </ul>
                <blockquote className="membership-card-quote">
                  "{plan.quote}"
                </blockquote>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
