import { useState, useEffect } from "react";
//import "./Timing.scss";
import ReactPlayer from "react-player/lazy";
import { SpeedGameIntro } from "../text/Intros";
import { SpeedGameTestInfo } from "../text/TestInfos";

const SpeedGame = () => {
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <div className="timing-section">
          <SpeedGameIntro />
          <div className="btn-and-message higher">
            <div>
              <input
                type="button"
                value="  Start game"
                className="formBtn add"
              />
              <input
                type="button"
                value="  End game"
                className="formBtn delete"
              />

              {/* <MainBtn
                classProp="button start-btn"
                clickProp={this.handleStart}
              >
                Start game
              </MainBtn>

              <MainBtn
                classProp={this.state.stopClass}
                clickProp={this.handleStop}
              >
                End game
              </MainBtn> */}
            </div>

            {/* <div className={this.state.messageClass}>
              <h4>{this.state.message}</h4> <p>{this.state.messageSmall}</p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="col-12 col-md-5">
        <SpeedGameTestInfo />

        {/* <div className="video_section">
          <ReactPlayer
            controls
            url="https://www.youtube.com/embed/92CUwz7s4sM"
            width="280px"
            height="180px"
          />
        </div> */}
      </div>
    </div>
  );
};

export default SpeedGame;

// class Speed extends Component {
//   //class based

//   state = {
//     isRunning: false,
//     stopClass: "button stop-btn",
//     message: "",
//     messageSmall: "",
//     messageClass: "message", //invisible

//     count: 0,
//     startCount: 0,
//     interval: null
//   };

//   handleStart = () => {
//     if (!this.state.isRunning) {
//       let startCount = Math.floor(Math.random() * 10000) + 1000; //random nr 1-10s
//       // console.log('random' + startCount);

//       this.setState({
//         count: startCount, //start counting down at randomnr
//         stopClass: "button stop-btn",
//         message: "", //reset
//         messageSmall: "",
//         messageClass: "message", //invisible
//         isRunning: true
//       });
//       this.intervalUpdate();
//     }
//   };

//   intervalUpdate = () => {
//     let myInterval = setInterval(() => {
//       //this.myInterval

//       // console.log("My count" + this.state.count);
//       this.setState({
//         count: this.state.count - 100, // count down every second
//         interval: myInterval
//       });
//       if (this.state.count < 0) {
//         this.setState({
//           stopClass: "button stop-btn show"
//         });
//       }
//     }, 100);
//   };

//   handleStop = () => {
//     if (this.state.isRunning) {
//       // console.log('count ' + -this.state.count);

//       clearInterval(this.state.interval);

//       this.setState({
//         isRunning: false
//       });
//     }
//     this.message();
//   };

//   message = () => {
//     let countOutput = -this.state.count;
//     let messageNew;
//     let messageSmallNew;

//     if (countOutput < 0) {
//       messageNew = "Fail!";
//       messageSmallNew = "No cheating... you clicked too early.";
//     } else {
//       messageNew = "Success!";
//       messageSmallNew = "You clicked " + countOutput + " ms too late...";
//     }

//     this.setState({
//       message: messageNew,
//       messageSmall: messageSmallNew,
//       messageClass: "message show"
//     });
//   };

//   render() {
//     return (
//       <div className="row justify-content-between">
//         <div className="col-12 col-md-6">
//           <div className="timing-section">
//             <header>
//               <HeaderText componentName={this.constructor.name} />
//             </header>

//             <div className="btn-and-message higher">
//               <div>
//                 <MainBtn classProp="button start-btn" clickProp={this.handleStart}>
//                   Start game
//                 </MainBtn>

//                 <MainBtn classProp={this.state.stopClass} clickProp={this.handleStop}>
//                   End game
//                 </MainBtn>
//               </div>

//               <div className={this.state.messageClass}>
//                 <h4>
//                   {this.state.message}
//                 </h4>
//                 <p>
//                   {this.state.messageSmall}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="col-12 col-md-5">
//           <Sidebar componentName={this.constructor.name} />
//           <VideoSidebar
//           src="https://www.youtube.com/embed/92CUwz7s4sM"
//           height="230"
//           width="100%"
//           title="getting-started"
//           />
//         </div>
//       </div>
//     );
//   }
// }
