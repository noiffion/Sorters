const builtin =`
function builtin(array) {
  array.sort((a, b) => a - b);
}
`;

export default {name: 'builtin', text: builtin};
