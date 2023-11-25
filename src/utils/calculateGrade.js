const calculateGrade = score => {
  if (score === null || score === undefined || typeof score !== 'number') {
    return null;
  }

  const percentage = parseInt(score);

  let grade = null;
  let remarks = null;

  if (percentage >= 97) {
    grade = 'A+';
  } else if (percentage >= 93 && percentage <= 96) {
    grade = 'A';
  } else if (percentage >= 90 && percentage <= 92) {
    grade = 'A-';
  } else if (percentage >= 87 && percentage <= 89) {
    grade = 'B+';
  } else if (percentage >= 83 && percentage <= 86) {
    grade = 'B';
  } else if (percentage >= 80 && percentage <= 82) {
    grade = 'B-';
  } else if (percentage >= 77 && percentage <= 79) {
    grade = 'C+';
  } else if (percentage >= 73 && percentage <= 76) {
    grade = 'C';
  } else if (percentage >= 70 && percentage <= 72) {
    grade = 'C-';
  } else if (percentage >= 67 && percentage <= 69) {
    grade = 'D+';
  } else if (percentage >= 63 && percentage <= 66) {
    grade = 'D';
  } else if (percentage >= 60 && percentage <= 62) {
    grade = 'D-';
  } else if (percentage < 60) {
    grade = 'F';
  }

  if (score >= 90) {
    remarks = "Excepcional! Você dominou este quiz. Parabéns! Está chegando no nível Einstein!";
  } else if (score >= 80 && score <= 89) {
    remarks = "Ótimo trabalho! Você se destacou neste quiz. Está se aproximando do nível Einstein!";
  } else if (score >= 70 && score <= 79) {
    remarks = "Bom esforço! Você passou no quiz. Continue assim!";
  } else if (score >= 60 && score <= 69) {
    remarks = "Você passou, mas há potencial para melhorias. Continue buscando o nível Einstein!";
  } else if (score < 60) {
    remarks = "A aprendizagem é uma jornada. Continue, e você chegará lá. Lembre-se do nível Einstein!";
  }

  return {
    grade,
    remarks,
  };
};

export default calculateGrade;
