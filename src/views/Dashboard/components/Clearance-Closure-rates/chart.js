// Palette
import palette from 'theme/palette';

var color=[];
colourRandom();
// Chart data
export const data = {
  datasets: [
    {
      data: [0.5941, 0.8057, 0.1508, 0.2992],
      backgroundColor:  color ,
      borderWidth: 8,
      borderColor: palette.common.white,
      hoverBorderColor: palette.common.white
    }
  ],
  labels: ['Homicide - Gun', 'Homicide - Other Weapon', 'Agg Assault - Gun', 'Agg Assault - Other Weapon']
};



// Chart options
export const options = {
  legend: {
    display: false
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
  for(var i=0;i<4;i++)
  {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    color.push(c);
  }
}

