document.addEventListener('DOMContentLoaded', function () {
    const timeElement = document.getElementById('time');
    const alarmButton = document.getElementById('alarmBtn');
    let alarmTime;
  
    // Update time every second
    setInterval(updateTime, 1000);
  
    // Set Alarm button click event
    alarmButton.addEventListener('click', function () {
      setAlarm();
    });
  
    function updateTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
  
      const currentTime = `${hours}:${minutes}:${seconds}`;
      timeElement.textContent = currentTime;
  
      // Check if it's time for the alarm
      if (alarmTime && currentTime === alarmTime) {
        showAlert('Alarm!');
        alarmTime = null; // Reset the alarm time after it triggers
      }
    }
  
    function setAlarm() {
      const userTime = prompt('Enter alarm time (HH:mm:ss):');
      if (userTime) {
        const regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
        if (regex.test(userTime)) {
          alarmTime = userTime;
          alert(`Alarm set for ${alarmTime}`);
        } else {
          alert('Invalid time format. Please use HH:mm:ss');
        }
      }
    }
  
    function showAlert(message) {
      alert(message);
    }
  });
  