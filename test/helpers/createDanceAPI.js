const DanceParty = require('../../src/p5.dance');

module.exports = {
  createDanceAPI: (props) => {
    return new Promise(resolve => {
      new DanceParty({
        moveNames: [],
        playSound: ({callback}) => callback(),
        onInit: nativeAPI => resolve(nativeAPI),
        ...props
      });
    });
  }
};
