function startGame() {
  let totalPoints = 0;

  let question1 = prompt(
    "Ən kiçik 3 rəqəmi toplayanda neçə edir? (İpucu: 0 da rəqəmdir.)"
  );
  if (question1 == 3) {
    alert("Bəli, haqlısınız, 5 xal qazandınız");
    totalPoints += 5;
  } else {
    alert("Təəssüf ki səhvdir");
  }

  let value = confirm("Oyuna davam etmək istəyirsənmi?");
  if (!value) {
    alert(`Sənin total xalın: ${totalPoints}`);
    alert("OYUN BİTTİ");
    return;
  }

  let question2 = prompt(
    "Bir saat əvvəl saat 3 idi. Amma 1 saat sonra saat 5 olacaq. Bu necə ola bilər?"
  );
  if (question2 == 4) {
    alert("Bəli, haqlısınız, 5 xal qazandınız");
    totalPoints += 5;
  } else {
    alert("Təəssüf ki səhvdir");
  }

  value = confirm("Oyuna davam etmək istəyirsənmi?");
  if (!value) {
    alert(`Sənin total xalın: ${totalPoints}`);
    alert("OYUN BİTTİ");
    return;
  }

  let question3 = prompt(
    "10 dəqiqəlik iş 10 nəfərə 10 manatdır. Bəs 1 nəfərin 10 dəqiqəlik işi neçə manatdır?"
  );
  if (question3 == 10) {
    alert("Bəli, haqlısınız, 5 xal qazandınız");
    totalPoints += 5;
  } else {
    alert("Təəssüf ki səhvdir");
  }

  value = confirm("Oyuna davam etmək istəyirsənmi?");
  if (!value) {
    alert(`Sənin total xalın: ${totalPoints}`);
    alert("OYUN BİTTİ");
    return;
  }

  let question4 = prompt("2*2-5*4+10");
  if (question4 == -6) {
    alert("Bəli, haqlısınız, 5 xal qazandınız");
    totalPoints += 5;
  } else {
    alert("Təəssüf ki səhvdir");
  }

  alert(`Sənin total xalın: ${totalPoints}`);
  alert("OYUN BİTTİ");
}

startGame();
