import React from "react";
import "./gym.css";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SportsIcon from "@mui/icons-material/Sports";
import PersonIcon from "@mui/icons-material/Person";
import BarChartIcon from "@mui/icons-material/BarChart";

const GymProfile = () => {
  return (
    <div className="ProfileContainer">
      <div className="HeaderSection">
        <img
          className="Avatar"
          src="https://img.freepik.com/premium-photo/3d-rendering-soccer-player-action_853677-33133.jpg"
          alt="User Avatar"
        />
        <h2>John Doe</h2>
        <h3>Premium Member</h3>
        <div className="PersonalDetails">
          <p>
            <strong>Age:</strong> 29
          </p>
          <p>
            <strong>Weight:</strong> 80 kg
          </p>
          <p>
            <strong>Height:</strong> 175 cm
          </p>
        </div>
      </div>

      <div className="InfoSection">
        <div className="InfoCard">
          <FitnessCenterIcon style={{ color: "#f3826f" }} />
          <h4>Fitness Goals</h4>
          <p>Build Muscle, Lose Fat, Improve Stamina</p>
        </div>
        <div className="InfoCard">
          <CalendarTodayIcon style={{ color: "#f3826f" }} />
          <h4>Joined</h4>
          <p>January 15, 2023</p>
        </div>
        <div className="InfoCard">
          <SportsIcon style={{ color: "#f3826f" }} />
          <h4>Achievements</h4>
          <p>Weight Loss: 10 lbs, 5K Marathon</p>
        </div>
      </div>

      <h4 className="SectionHeader">
        <VideoLibraryIcon /> Training Videos
      </h4>
      <div className="HorizontalScroll">
        <div className="VideoCard">
          <img
            className="VideoThumbnail"
            src="https://i.ytimg.com/vi/zrQ0N80RG6w/maxresdefault.jpg"
            alt="Video 1"
          />
          <p>Workout 1</p>
        </div>
        <div className="VideoCard">
          <img
            className="VideoThumbnail"
            src="https://i.ytimg.com/vi/d024otW9dFo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD_jgiqltHpkRGdZvdjMCHBvtFXxg"
            alt="Video 2"
          />
          <p>Workout 2</p>
        </div>
        <div className="VideoCard">
          <img
            className="VideoThumbnail"
            src="https://i.ytimg.com/vi/9P__foatXbM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCbGJ5dAj6H-IA-7vOwlcVFLJT_Fw"
            alt="Video 3"
          />
          <p>Workout 3</p>
        </div>
      </div>

      <h4 className="SectionHeader">
        <AssignmentIcon /> Diet Chart
      </h4>
      <div className="DietChart">
        <p>Breakfast: Oats, Eggs, Coffee</p>
        <p>Lunch: Grilled Chicken, Brown Rice</p>
        <p>Dinner: Fish, Veggies</p>
      </div>

      <h4 className="SectionHeader">
        <PersonIcon /> View Session
      </h4>
      <div className="SessionContainer">
        <p>Next Session: Personal Training - Sept 15, 2024</p>
      </div>

      <h4 className="SectionHeader">
        <SportsIcon /> View Competition
      </h4>
      <div className="CompetitionContainer">
        <p>Upcoming Event: 10K Marathon - Oct 12, 2024</p>
      </div>

      <h4 className="SectionHeader">
        <PersonIcon /> One-to-One Trainer
      </h4>
      <div className="TrainerContainer">
        <p>Trainer: Alex Smith (Strength & Conditioning)</p>
      </div>

      <h4 className="SectionHeader">
        <AssignmentIcon /> Test Repeat Monthly
      </h4>
      <div className="TestContainer">
        <p>Next Fitness Test: Oct 1, 2024</p>
      </div>

      <h4 className="SectionHeader">
        <BarChartIcon /> Health Chart
      </h4>
      <div className="HealthChart">
        <p>Body Fat Percentage: 12%</p>
        <p>Muscle Mass: 35%</p>
        <div className="ProgressBar">
          <div className="ProgressFill" style={{ width: "35%" }} />
        </div>
      </div>

      <h4 className="SectionHeader">
        <BarChartIcon /> Performance Tracker
      </h4>
      <div className="PerformanceTracker">
        <div className="TrackerContainer">
          <div className="TrackerCard">
            <h5>Strength</h5>
            <p>Improved by 20%</p>
          </div>
          <div className="TrackerCard">
            <h5>Endurance</h5>
            <p>Improved by 15%</p>
          </div>
          <div className="TrackerCard">
            <h5>Flexibility</h5>
            <p>Improved by 10%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymProfile;
