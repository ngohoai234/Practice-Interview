// : Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
// column are set to 0.

// Hint: use first row and first column to determine row or col need to set zero

// Step 1 : loop all matrix from row 1 and col 1
// step 2: if met zero
//  step 2.1 : matrix[current_row][0] = 0
//  step 2.2 : matrix[0][current_col] =
// step 3: loop row and set column zero
// step 4: loop col and set row zero

const nullifyRow = (matrix, row) => {
  for (let j = 0; j < matrix[0].length; j++) {
    matrix[row][j] = 0;
  }
};
const nullifyColumn = (matrix, column) => {
  for (let j = 0; j < matrix.length; j++) {
    matrix[j][column] = 0;
  }
};

const setZeroMatrix = (matrix) => {
  let hasRowZero = false;
  let hasColumnZero = false;

  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      hasRowZero = true;
      break;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      hasColumnZero = true;
      break;
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  for (let i = 1; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      nullifyColumn(matrix, i);
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      nullifyRow(matrix, i);
    }
  }

  if (hasRowZero) {
    nullifyRow(matrix, 0);
  }
  if (hasColumnZero) {
    nullifyColumn(matrix, 0);
  }

  return matrix;
};

console.log(
  setZeroMatrix([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
