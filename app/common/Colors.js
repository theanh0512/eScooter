const Colors = {
  black: 'rgba(51, 49, 50, 1)',
  grey: 'rgba(213, 213, 213, 1)',
  greyDark: 'rgba(154, 154, 154, 1)',
  greyLight: 'rgba(243, 243, 243, 1)',
  greyMap: 'rgba(216, 216, 216, 1)',
  greyBorder: 'rgba(221, 221, 221, 1)',
  greyText: 'rgba(180, 180, 180, 1)',
  white: 'rgba(255, 255, 255, 1)',
  passiveGreen: 'rgba(23, 216, 95, 1)',
  greenText: 'rgba(0, 203, 76, 1)',
  activeGreen: 'rgba(22, 154, 68, 1)',
  greenTextDark: 'rgba(8, 128, 50, 1)',
  greenBackground: 'rgba(43, 214, 101, 1)',
  passiveRed: 'rgba(255, 58, 40, 1)',
  activeRed: 'rgba(177, 20, 12, 1)',
  errorRed: 'rgba(255, 58, 40, 1)',
  yellow: 'rgba(255, 203, 0, 1)',
  hbOrange: 'rgba(255, 138, 10, 1)',
  hbOrangeTag: 'rgba(255, 138, 10, 1)',
  dandelion: 'rgba(255, 231, 0, 1)',
  dandelionDark: 'rgba(255, 207, 0, 1)',
  lightBlue: 'rgba(2, 153, 153, 1)',
  transparent: 'rgba(0, 0, 0, 0)',
  transparentWhite: 'rgba(255, 255, 255, 0)',
  blueTag: 'rgba(109, 176, 227, 1)',
  darkBlue: 'rgba(26, 47, 96, 1)',
  robinEggBlue: 'rgba(196, 244, 254, 1)',
  greenTag: 'rgba(0, 150, 57, 1)',
  darkGreenTag: 'rgba(2, 153, 153, 1)',
  translucenceYellow: 'rgba(255, 231, 0, 0.15)',
  purple: 'rgba(78, 13, 142, 1)'
};

module.exports = {
  ...Colors,

  colorWithAlpha(name: ?string = 'black', opacity: number = 1) {
    let scopeNameVar = name;
    if (!Colors[scopeNameVar]) {
      scopeNameVar = 'black';
    }
    return Colors[scopeNameVar].split(', 1)').join(`, ${opacity})`);
  }
};
