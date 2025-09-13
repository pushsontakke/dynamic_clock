import greet from "./utils.js";

function dynamicClock() {
  const clock = document.getElementById("dynamic-clock");

  const div = document.createElement("div");
  const submitBtn = document.createElement("button");

  submitBtn.innerText = "Lap";
  let saveTime = "";

  if (clock) {
    clock.innerText = greet("Piyush");
    clock.appendChild(div);
    clock.appendChild(submitBtn);
    setInterval(() => {
      const time = new Date();
      const t = time.toLocaleTimeString();
      div.innerText = t;
      saveTime = t;
    }, 1000);
  }

  const handleMultipleLaps = () => {
    const lapTime = document.createElement("div");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete Lap";
    if (clock) {
      clock.appendChild(lapTime);
      clock.appendChild(deleteBtn);
    }
    lapTime.innerText = saveTime;
    deleteBtn.addEventListener("click", () => {
      lapTime.remove();
      deleteBtn.remove();
    });
  };

  submitBtn.addEventListener("click", function () {
    handleMultipleLaps();
  });
}

const StopWatch = () => {
  const TimerWatch = document.getElementById("stop-watch");

  const startBtn = document.createElement("button");
  const stopBtn = document.createElement("button");
  const timer = document.createElement("div");
  startBtn.innerText = "start";
  stopBtn.innerText = "stop";

  let timing = 0;

  TimerWatch?.appendChild(timer);
  TimerWatch?.appendChild(startBtn);
  TimerWatch?.appendChild(stopBtn);

  let counter = 0;
  startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    handleStopWatch();
  });

  stopBtn.addEventListener("click", function () {
    clearInterval(timing);
    startBtn.disabled = false;
  });

  function handleStopWatch() {
    timing = setInterval(() => {
      counter++;
      timer.innerHTML = `${counter}`;
    }, 1000);
  }
};

dynamicClock();
StopWatch();
