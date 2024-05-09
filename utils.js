const questions = require("./questions.json");

const getRandomQuestion = (topic) => {
  let questionTopic = topic;

  if (questionTopic === "случайный вопрос") {
    questionTopics = Object.keys(questions);
    const randomId = Math.floor(Math.random() * questionTopics.length);
    questionTopic = questionTopics[randomId];
  }

  const randomQuestionIndex = Math.floor(
    Math.random() * questions[questionTopic].length
  );

  return {
    question: questions[questionTopic][randomQuestionIndex],
    questionTopic: questionTopic,
  };
};

const getCorrectAnswer = (topic, id) => {
  const question = questions[topic].find((question) => question.id === id);

  if (!question.hasOptions) {
    return question.answer;
  }

  return question.options.find((option) => option.isCorrect).text;
};

module.exports = { getRandomQuestion, getCorrectAnswer };
