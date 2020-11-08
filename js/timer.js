const daysValue = document.querySelector('span[data-value="days"]');
const hoursValue = document.querySelector('span[data-value="hours"]');
const minsValue = document.querySelector('span[data-value="mins"]');
const secsValue = document.querySelector('span[data-value="secs"]');
const clockFace = document.querySelector('#timer-1');

console.log(clockFace);

// const targetDate = new Date(2021, 1, 1, 0, 0, 0, 0);

class CountdownTimer {
  constructor({ targetDate }) {
    this.targetDate = targetDate;
    this.start();
  }

  // const timer = {
  start() {
    setInterval(() => {
      const currentTime = Date.now();

      const time = this.targetDate - currentTime;
      const { days, hours, mins, secs } = GetTimeComponents(time);
      //   console.log('delta: ', time);
      updateClockFace({ days, hours, mins, secs });
      console.log(`${days}::${hours}::${mins}::${secs}`);
    }, 1000);
  }
}
// }
// timer.start();

function pad(value) {
  return String(value).padStart(2, '0');
}

function GetTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return { days, hours, mins, secs };
}

function updateClockFace({ days, hours, mins, secs }) {
  // clockFace.textContent = `${days}:${hours}:${mins}:${secs}`;
  daysValue.textContent = `${days}`;
  hoursValue.textContent = `${hours}`;
  minsValue.textContent = `${mins}`;
  secsValue.textContent = `${secs}`;
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});
