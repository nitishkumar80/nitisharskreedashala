import React from "react";
import styled from "styled-components";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SubscriptionIcon from "@mui/icons-material/Subscriptions";

const MemberProfile = () => {
  return (
    <ProfileContainer>
      {/* Personal Details Section */}
      <HeaderSection>
        <Avatar
          src="https://t4.ftcdn.net/jpg/05/11/55/91/360_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg"
          alt="Member Avatar"
        />
        <h2>John Doe</h2>
       
      </HeaderSection>

      {/* Video Container */}
      <SectionHeader>
        <VideoLibraryIcon /> Training Videos
      </SectionHeader>
      <VideoContainer>
        <VideoCard>
          <VideoThumbnail
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fitness-training-youtube-thumbnail-design-template-129a539e3d0534c992daa93ea87e232d_screen.jpg?ts=1627633294"
            alt="Video 1"
          />
          <p>Training Video 1</p>
        </VideoCard>
        <VideoCard>
          <VideoThumbnail
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/improve-your-training-youtube-thumbnail-desig-design-template-e0574b1bbab8f122025edf3448842e6a_screen.jpg?ts=1604314169"
            alt="Video 2"
          />
          <p>Training Video 2</p>
        </VideoCard>
      </VideoContainer>

      {/* View Session */}
      <SectionHeader>
        <AccountCircleIcon /> View Sessions
      </SectionHeader>
      <SessionContainer>
        <SessionCard>
          <VideoThumbnail
            src="https://media.gettyimages.com/id/1439810396/video/manchester-city-squad-stretching-during-open-training-session.jpg?s=640x640&k=20&c=X5gYqM6p9hB11k3GDqYt940YbllgFvwWMmgR-hmYs-g="
            alt="Session 1"
          />
          <p>Session 1</p>
        </SessionCard>
        <SessionCard>
          <VideoThumbnail
            src="https://media.gettyimages.com/id/1439810396/video/manchester-city-squad-stretching-during-open-training-session.jpg?s=640x640&k=20&c=X5gYqM6p9hB11k3GDqYt940YbllgFvwWMmgR-hmYs-g="
            alt="Session 2"
          />
          <p>Session 2</p>
        </SessionCard>
        <SessionCard>
          <VideoThumbnail
            src="https://media.gettyimages.com/id/1439810396/video/manchester-city-squad-stretching-during-open-training-session.jpg?s=640x640&k=20&c=X5gYqM6p9hB11k3GDqYt940YbllgFvwWMmgR-hmYs-g="
            alt="Session 3"
          />
          <p>Session 3</p>
        </SessionCard>
      
        {/* Add more SessionCards */}
      </SessionContainer>

      {/* View Tournament */}
      <SectionHeader>
        <FitnessCenterIcon /> View Tournament
      </SectionHeader>
      <TournamentContainer>
        <TournamentCard>
          <VideoThumbnail
            src="https://ss-i.thgim.com/public/incoming/a4m111/article68598760.ece/alternates/FREE_1200/_2S36985.jpg"
            alt="Tournament 1"
          />
          <p>Tournament 1</p>
        </TournamentCard>
        <TournamentCard>
          <VideoThumbnail
            src="https://www.prokabaddi.com/static-assets/waf-images/0d/a9/35/16-9/fPzcglYTYH.jpg?v=2.18&w=600"
            alt="Tournament 2"
          />
          <p>Tournament 2</p>
        </TournamentCard>
        <TournamentCard>
          <VideoThumbnail
            src="https://www.shutterstock.com/image-vector/concept-sportsman-playing-kabaddi-banner-260nw-1446274064.jpg"
            alt="Tournament 3"
          />
          <p>Tournament 3</p>
        </TournamentCard>
        {/* Add more TournamentCards */}
      </TournamentContainer>

      {/* Health Tracking */}
      <SectionHeader>
        <FitnessCenterIcon /> Health Tracking
      </SectionHeader>
      <HealthCard>
        <p>Weight Progress: 80kg -> 75kg</p>
        <ProgressBar>
          <ProgressFill style={{ width: "60%" }} />
        </ProgressBar>
      </HealthCard>

      {/* View Diet Plan */}
      <SectionHeader>
        <AssignmentIcon /> Diet Plan
      </SectionHeader>
      <DietCard>
        <p>Morning: Oats, Eggs</p>
        <p>Afternoon: Chicken, Rice</p>
        <p>Evening: Fish, Veggies</p>
      </DietCard>

      {/* Plan Description */}
      <SectionHeader>
        <AssignmentIcon /> Plan Description
      </SectionHeader>
      <PlanDescription>
        <p>This plan helps improve endurance and muscle strength...</p>
      </PlanDescription>

      {/* Change Subscription Plan */}
      <SectionHeader>
        <SubscriptionIcon /> Change Subscription Plan
      </SectionHeader>
      <ChangePlanCard>
        <p>Current Plan: Gold</p>
        <button>Upgrade to Platinum</button>
      </ChangePlanCard>
    </ProfileContainer>
  );
};

// Styled Components

const ProfileContainer = styled.div`
  margin: 2rem auto;
  padding: 1.5rem;
  margin-top: 150px;
  max-width: 900px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.2rem;
  }
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const SectionHeader = styled.h4`
  margin: 2rem 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 1rem;
  overflow-x: auto; /* Enable horizontal scrolling */
  scroll-snap-type: x mandatory; /* Smooth scroll behavior */

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const VideoCard = styled.div`
  min-width: 200px;
  flex-shrink: 0;
  scroll-snap-align: start; /* Snap each card */
  text-align: center;
`;

const VideoThumbnail = styled.img`
  width: 200px;
  height: 120px;
  border-radius: 8px;
`;

const SessionContainer = styled(VideoContainer)``;

const SessionCard = styled(VideoCard)``;


const TournamentContainer = styled(VideoContainer)``;

const TournamentCard = styled(VideoCard)``;

const HealthCard = styled.div`
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 0.5rem;
`;

const ProgressFill = styled.div`
  height: 100%;
  background-color: #76c7c0;
  transition: width 0.3s ease;
`;

const DietCard = styled.div`
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
`;

const PlanDescription = styled.div`
  background-color: #e0e0e0;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
`;

const ChangePlanCard = styled.div`
  background-color: #e9f5f9;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  text-align: center;
  button {
    background-color: #76c7c0;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
  }
`;

export default MemberProfile;
