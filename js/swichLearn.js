const swichLearn = () => {
  let learn = localStorage.getItem('learn');
  if (learn === 'en') {
    learn = 'ua';
  } else {
    learn = 'en';
  }
  localStorage.setItem('learn', learn)
}
export default swichLearn;