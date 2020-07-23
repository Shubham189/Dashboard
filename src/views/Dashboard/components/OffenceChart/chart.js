// Palette
import palette from 'theme/palette';

var color=[];
colourRandom();
// Chart data
export const data = {
  datasets: [
    {
      data: [424730, 270146, 11500, 6975, 25212, 572, 8284],
      backgroundColor:  color ,
      borderWidth: 8,
      borderColor: palette.common.white,
      hoverBorderColor: palette.common.white
    }
  ],
  labels: ['Agg Assault - Other Weapon', 'Agg Assault - Gun', 'Agg Assault - Weapon Unspecified','Homicide - Weapon Unspecified', 'Homicide - Gun', 'Homicide - Other Weapon', 'Non-Fatal Shooting' ]
};


/*
[
        palette.primary.main,
        palette.danger.main,
        palette.warning.main
      ]
 */

// Chart options
export const options = {
  legend: {
    display: true
  },
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  cutoutPercentage: 80,
  layout: { padding: 0 },
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 1,
    borderColor: palette.border,
    backgroundColor: palette.common.white,
    titleFontColor: palette.text.primary,
    bodyFontColor: palette.text.secondary,
    footerFontColor: palette.text.secondary
  }
};

function colourRandom()
{
  for(var i=0;i<7;i++)
  {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    color.push(c);
  }
}

